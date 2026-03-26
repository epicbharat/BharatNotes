// Set permalink so /content/gs2/slug/ becomes /gs2/slug/
module.exports = {
  permalink: (data) => {
    // Strip "content/" prefix from the URL
    const url = data.page.filePathStem.replace(/^\/content/, "");
    return `${url}/index.html`;
  },
};
