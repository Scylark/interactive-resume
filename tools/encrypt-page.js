#!/usr/bin/env node
// Encrypts an HTML file into a password-gated static page (AES-256-GCM, PBKDF2 600k).
// Usage:  ANSWERS_PASS='your passphrase' node tools/encrypt-page.js <source.html> <output.html>
// The passphrase is never written to disk or to the repo. Only the encrypted payload is committed.
const fs = require('fs');
const crypto = require('crypto');

const [src, out] = process.argv.slice(2);
const pass = process.env.ANSWERS_PASS;
if (!src || !out || !pass) {
    console.error("usage: ANSWERS_PASS='...' node tools/encrypt-page.js <source.html> <output.html>");
    process.exit(1);
}

// Wrap the artifact-style source (title/link/style then body) in a full document.
const raw = fs.readFileSync(src, 'utf8');
const cut = raw.indexOf('</style>');
const head = cut === -1 ? '' : raw.slice(0, cut + 8);
const body = cut === -1 ? raw : raw.slice(cut + 8);
const doc = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">'
    + head + '</head><body>' + body + '</body></html>';

const ITER = 600000;
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(pass, salt, ITER, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const ct = Buffer.concat([cipher.update(doc, 'utf8'), cipher.final(), cipher.getAuthTag()]);
const payload = Buffer.concat([salt, iv, ct]).toString('base64');

const gate = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>James Vickers</title>
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<style>
:root{--bg:#f5f5f7;--card:#fff;--text:#1d1d1f;--muted:#6e6e73;--border:#e5e5ea;--accent:#0071e3;--danger:#c0392b}
@media (prefers-color-scheme:dark){:root{--bg:#111;--card:#1c1c1e;--text:#f5f5f7;--muted:#98989d;--border:#2c2c2e}}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
form{width:min(92vw,380px);background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px 26px 24px;box-shadow:0 12px 40px rgba(0,0,0,.08)}
.jv{width:44px;height:44px;border-radius:50%;background:var(--text);color:var(--card);display:grid;place-items:center;font-weight:700;font-size:15px;letter-spacing:.02em;margin-bottom:16px}
h1{font-size:17px;margin:0 0 4px;font-weight:650}
p{margin:0 0 18px;font-size:13px;color:var(--muted);line-height:1.45}
label{display:block;font-size:12px;font-weight:600;color:var(--muted);margin-bottom:6px;letter-spacing:.02em}
input{width:100%;font:inherit;font-size:15px;padding:11px 12px;border:1px solid var(--border);border-radius:10px;background:var(--bg);color:var(--text);outline:none}
input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(0,113,227,.18)}
button{margin-top:12px;width:100%;font:inherit;font-size:14px;font-weight:600;padding:11px;border:0;border-radius:10px;background:var(--accent);color:#fff;cursor:pointer}
button:disabled{opacity:.6;cursor:default}
.err{display:none;margin-top:10px;font-size:12.5px;color:var(--danger)}
.err.on{display:block}
</style>
</head>
<body>
<form id="f" autocomplete="off">
  <div class="jv">JV</div>
  <h1>Private page</h1>
  <p>This page is encrypted. Enter the passphrase to open it.</p>
  <label for="p">Passphrase</label>
  <input id="p" type="password" autocomplete="current-password" autofocus required>
  <button id="b" type="submit">Open</button>
  <div class="err" id="e">That passphrase didn't work. Check it and try again.</div>
</form>
<script>
(function(){
  var PAYLOAD = "${payload}";
  var ITER = ${ITER};
  var f = document.getElementById('f'), p = document.getElementById('p'), b = document.getElementById('b'), e = document.getElementById('e');
  var enc = new TextEncoder();
  function b64(s){ var bin = atob(s), a = new Uint8Array(bin.length); for (var i=0;i<bin.length;i++) a[i]=bin.charCodeAt(i); return a; }
  async function open(pass){
    var raw = b64(PAYLOAD), salt = raw.slice(0,16), iv = raw.slice(16,28), data = raw.slice(28);
    var km = await crypto.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey']);
    var key = await crypto.subtle.deriveKey({name:'PBKDF2', salt:salt, iterations:ITER, hash:'SHA-256'}, km, {name:'AES-GCM', length:256}, false, ['decrypt']);
    var plain = await crypto.subtle.decrypt({name:'AES-GCM', iv:iv}, key, data);
    var html = new TextDecoder().decode(plain);
    try { sessionStorage.setItem('answers-pass', pass); } catch(_){}
    document.open(); document.write(html); document.close();
  }
  f.addEventListener('submit', async function(ev){
    ev.preventDefault(); e.classList.remove('on'); b.disabled = true; b.textContent = 'Opening…';
    try { await open(p.value); }
    catch(_) { e.classList.add('on'); b.disabled = false; b.textContent = 'Open'; p.select(); }
  });
  try { var s = sessionStorage.getItem('answers-pass'); if (s) { b.disabled = true; b.textContent = 'Opening…'; open(s).catch(function(){ b.disabled=false; b.textContent='Open'; }); } } catch(_){}
})();
</script>
</body>
</html>
`;
fs.writeFileSync(out, gate);

// Self-check: decrypt with WebCrypto exactly as the browser will.
(async () => {
    const { subtle } = crypto.webcrypto;
    const rawb = Buffer.from(payload, 'base64');
    const km = await subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
    const k = await subtle.deriveKey({ name: 'PBKDF2', salt: rawb.subarray(0, 16), iterations: ITER, hash: 'SHA-256' }, km, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    const plain = Buffer.from(await subtle.decrypt({ name: 'AES-GCM', iv: rawb.subarray(16, 28) }, k, rawb.subarray(28))).toString('utf8');
    if (plain !== doc) throw new Error('self-check failed');
    console.log(`encrypted ${src} -> ${out} (${(fs.statSync(out).size/1024).toFixed(0)} KB), WebCrypto self-check passed`);
})().catch(err => { console.error(err); process.exit(1); });
