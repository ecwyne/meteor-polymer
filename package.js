Package.describe({
	summary: 'Add Polymer Base to meteor Project',
	version: '1.0.6_1',
	git: 'https://github.com/ecwyne/meteor-polymer.git',
	name: 'ecwyne:polymer'
});

Package.onUse(function(api) {

	api.use('webapp', 'server');
  	api.use(['templating'], 'client');
	api.versionsFrom('METEOR@0.9.0');

	getFiles().forEach(function (filename){
		api.addFiles(filename, 'server', {isAsset: true});
	});
	api.addFiles('handler.js', 'server');
	api.addFiles('import.html', 'client');
});


function getFiles(){
	//Polymer 1.0.2
	var arr = ["polymer/.bower.json","polymer/LICENSE.txt","polymer/bower.json","polymer/build.log","polymer/polymer-micro.html","polymer/polymer-mini.html","polymer/polymer.html","webcomponentsjs/.bower.json","webcomponentsjs/CustomElements.js","webcomponentsjs/CustomElements.min.js","webcomponentsjs/HTMLImports.js","webcomponentsjs/HTMLImports.min.js","webcomponentsjs/MutationObserver.js","webcomponentsjs/MutationObserver.min.js","webcomponentsjs/README.md","webcomponentsjs/ShadowDOM.js","webcomponentsjs/ShadowDOM.min.js","webcomponentsjs/bower.json","webcomponentsjs/build.log","webcomponentsjs/package.json","webcomponentsjs/webcomponents-lite.js","webcomponentsjs/webcomponents-lite.min.js","webcomponentsjs/webcomponents.js","webcomponentsjs/webcomponents.min.js"];
	return arr.map(function (e){
		return 'lib/bower_components/' + e;
	});
}