/**
 * Loads key-term article markdown files from src/content/key-term-articles/
 * Returns a map of termSlug -> { content (HTML), frontmatter }
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ARTICLES_DIR = path.join(__dirname, "..", "content", "key-term-articles");

// Simple markdown-to-HTML converter for tables, headers, lists, bold, italic, links, blockquotes, hr
function mdToHtml(md) {
  let html = md;

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');

  // Tables
  html = html.replace(/^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)*)/gm, function(match, header, sep, body) {
    var ths = header.split('|').filter(c => c.trim()).map(c => '<th>' + c.trim() + '</th>').join('');
    var rows = body.trim().split('\n').map(function(row) {
      var tds = row.split('|').filter(c => c.trim()).map(c => '<td>' + c.trim() + '</td>').join('');
      return '<tr>' + tds + '</tr>';
    }).join('\n');
    return '<div class="article-body"><table><thead><tr>' + ths + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
  });

  // Headers
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Paragraphs (lines not already wrapped)
  html = html.replace(/^(?!<[hultbdao]|<\/|$)(.+)$/gm, '<p>$1</p>');

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

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
      html: mdToHtml(content)
    };
  }

  return articles;
};
