var cradle = require('cradle');

// Get the username and password from the url
var cloudant_parts = /(\w+)\:\/\/([^:]+)\:([^@]+)@(.+)/.exec(process.env['CLOUDANT_URL']);

this.connection = new(cradle.Connection)({
//    host:  '127.0.0.1',
    host: cloudant_parts[1] + '://' + cloudant_parts[4],
    port: 443, //5984
    auth: { username: cloudant_parts[2], password:cloudant_parts[3] }
});

this.database = this.connection.database('thingler');

this.parseRev = function (rev) {
    return parseInt(rev.match(/^(\d+)-/)[1]);
};
