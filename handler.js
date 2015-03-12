WebApp.connectHandlers.use('/bower_components', function (req, res, next){
	Assets.getText('lib/bower_components' + req.url, function (err, file){
		if (err){
			next();
		} else {
			res.writeHead(200, {'Content-Type': req.url.split('.')[1] == 'js' ? 'application/javascript' : 'text/' + req.url.split('.')[1]});
			res.write(file);
			res.end();
		}
	});
});
