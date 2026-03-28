/**
 * Loads key-term article markdown files from src/content/key-term-articles/
 * Uses 'marked' library for proper markdown-to-HTML conversion
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

const ARTICLES_DIR = path.join(__dirname, "..", "content", "key-term-articles");

module.exports = function() {
  const articles = {};
  if (!fs.existsSync(ARTICLES_DIR)) return articles;

  for (const file of fs.readdirSync(ARTICLES_DIR)) {
    if (!file.endsWith('.md')) continue;
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = data.termSlug || file.replace(/\.md$/, '');
    articles[slug] = {
      slug: slug,
      sourceFile: data.sourceFile || '',
      html: marked.parse(content)
    };
  }

  return articles;
};
