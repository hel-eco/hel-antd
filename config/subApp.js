const helDevUtils = require('hel-dev-utils');
const pkg = require('../package.json');

const subApp = helDevUtils.createReactSubApp(pkg, { npmCdnType: 'unpkg' });
// const subApp = helDevUtils.createReactSubApp(pkg, { npmCdnType: 'unpkg', homePage: 'http://my-unpkg.com' });

module.exports = subApp;
