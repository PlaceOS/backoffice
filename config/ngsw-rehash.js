// Update the file hashes in a built ngsw.json after files change, for example
// after `sentry-cli sourcemaps inject` adds debug IDs. The service worker
// rejects files whose hash does not match.
// Usage: bun config/ngsw-rehash.js dist/backoffice/browser
const { createHash } = require('crypto');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const dir = process.argv[2];
if (!dir) throw new Error('Usage: ngsw-rehash.js <build directory>');
const manifest_path = join(dir, 'ngsw.json');
const manifest = JSON.parse(readFileSync(manifest_path, 'utf-8'));

let changed = 0;
for (const url of Object.keys(manifest.hashTable)) {
    const hash = createHash('sha1')
        .update(readFileSync(join(dir, url)))
        .digest('hex');
    if (manifest.hashTable[url] === hash) continue;
    manifest.hashTable[url] = hash;
    changed++;
}
writeFileSync(manifest_path, JSON.stringify(manifest, null, 2));
console.log(`Updated ${changed} hashes in ${manifest_path}`);
