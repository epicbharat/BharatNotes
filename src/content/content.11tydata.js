// Set permalink so /content/gs2/slug/ becomes /gs2/slug/
module.exports = {
  permalink: (data) => {
    // Strip "content/" prefix from the URL
    let url = data.page.filePathStem.replace(/^\/content/, "");
    // If the file is index.md inside a folder, strip the trailing /index
    // so /subjects/history-culture/ancient-india/index → /subjects/history-culture/ancient-india/
    url = url.replace(/\/index$/, "");
    // Strip leading chapter number prefix from the final path segment
    // e.g. /subjects/polity/constitutional-polity/01-preamble → /subjects/polity/constitutional-polity/preamble
    url = url.replace(/\/\d+-([^/]+)$/, "/$1");
    return `${url}/index.html`;
  },
};
