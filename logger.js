var loggly = require('loggly')
var config = { subdomain: "lyoshenka" };
var client = loggly.createClient(config);
var defaultInputToken = '79852208-a320-4202-8f9c-cbfcd7ee05b6';

this.log = function (message) 
{
  client.log(defaultInputToken, message);
};
