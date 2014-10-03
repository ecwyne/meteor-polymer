var bower = Npm.require("bower");
var path = Npm.require('path');
var bowerCommands = ["info", "install", "link", "list", "lookup", "prune",
                     "register", "search", "update", "uninstall"];

Bower = {};

// Wrap every asynchronus bower command with `Meteor._wrapAsync`
_.forEach(bowerCommands, function (command) {
  Bower[command] = Meteor.wrapAsync(function() {
    argsArray = _.toArray(arguments);
    var callback = argsArray.pop();
    bower.commands[command]
      .apply(this, argsArray)
      .on('end', function(res) { callback(null, res); })
      .on('error', function(err) { callback(err, null); });
  });
});

console.log('installing polymer into public direcory...');
var dir = path.join(path.relative(process.cwd(), process.env.PWD), 'public/bower_components');
Bower.install(['polymer#0.4.2'], {save: true}, {directory: dir});
