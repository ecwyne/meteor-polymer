var dir = require('node-dir');
var fs = require('fs');

dir.files('.', function (err, files){
	fs.writeFileSync('files.json', JSON.stringify(files.filter(function (file){
		return !/app\.js/.test(file) && !/node_modules/.test(file) && !/files\.json/.test(file);
	})));
});