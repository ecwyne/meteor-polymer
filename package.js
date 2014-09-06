Package.describe({
  summary: "Adds polymer functionality to Meteor"
});

Package.onUse(function (api) {

  api.addFiles("platform.js", 'client');
  api.addFiles("import.js", 'client');
});
