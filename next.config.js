
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  // exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
    return paths
  }
  
});