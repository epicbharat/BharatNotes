/**
 * Merges all mains question sources into one array:
 *   src/_data/mains/pyq/{gs1,gs2,gs3,gs4,essay}.json  → type:'pyq'
 *   src/_data/mains/practice/{...}.json                → type:'practice'
 *
 * Consumed by:
 *   /mains/mock/      → full pool
 *   /mains/pyq/       → type:'pyq' only
 *   /mains/practice/  → type:'practice' only
 */

const fs   = require('fs');
const path = require('path');

function loadFolder(folderPath, type) {
  const dir = path.join(__dirname, folderPath);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .flatMap(f => {
      try {
        const raw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
        return (Array.isArray(raw) ? raw : []).map(q => ({ ...q, type }));
      } catch { return []; }
    });
}

module.exports = function() {
  const pyq      = loadFolder('mains/pyq',      'pyq');
  const practice = loadFolder('mains/practice', 'practice');
  return [...pyq, ...practice];
};
