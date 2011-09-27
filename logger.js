var loggly = require('loggly')
var config = { subdomain: "lyoshenka" };
var client = loggly.createClient(config);
var defaultInputToken = '79852208-a320-4202-8f9c-cbfcd7ee05b6';
var sys = require('sys');

this.log = function (message) 
{
  sys.puts('Logging message ' + message);
  client.log(defaultInputToken, message);
};
