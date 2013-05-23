var rc = require('rc');

module.exports = rc('platdujour', {
  couch_host: 'http://localhost:5984', // default CouchDB in admin party mode
  couch_db: '/platdujour'
});
