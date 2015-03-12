var dir = require('node-dir');
var fs = require('fs');

dir.files('.', function (err, files){
	fs.writeFileSync('files.json', JSON.stringify(files));
})