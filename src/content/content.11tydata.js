// Set permalink so /content/gs2/slug/ becomes /gs2/slug/
module.exports = {
  permalink: (data) => {
    // Strip "content/" prefix from the URL
    let url = data.page.filePathStem.replace(/^\/content/, "");
    // If the file is index.md inside a folder, strip the trailing /index
    // so /subjects/history-culture/ancient-india/index → /subjects/history-culture/ancient-india/
    url = url.replace(/\/index$/, "");
    return `${url}/index.html`;
  },
};
