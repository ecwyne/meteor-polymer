Package.describe({
  summary: "Adds polymer functionality to Meteor"
});

Package.on_use(function (api) {
  var where = ['client'];

  api.add_files(["platform.js"], where);
  api.add_files(["import.js"], where);
});
