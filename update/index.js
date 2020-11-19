const ghpages = require('gh-pages'),
  pkg = require('../package.json'),
  path = require('path'),
  url = path.resolve(__dirname, '..', 'storybook-static')

ghpages.publish(url, {
  repo: pkg.repository.url,
  remote: 'upstream'
}, (err) => {
  console.log('err>>>', err);
})