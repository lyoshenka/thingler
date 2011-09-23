var cradle = require('cradle');

this.connection = new(cradle.Connection)({
//    host:  '127.0.0.1',
    host: process.env['CLOUDANT_URL'],
    port: 443 //5984
});

this.database = this.connection.database('thingler');

this.parseRev = function (rev) {
    return parseInt(rev.match(/^(\d+)-/)[1]);
};
