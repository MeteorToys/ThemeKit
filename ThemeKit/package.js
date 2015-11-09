Package.describe({
  name:          'meteortoysthemes:name',
  summary:       'A theme for Meteor Toys',
  version:       '1.0.0',
  git:           'https://github.com/MeteorToys/ThemeKit.git',
  documentation: 'README.md',
  debugOnly:     true
});


Package.onUse(function(api) {
  api.add_files(["client/theme.css"],  "client");
  api.versionsFrom('1.0');
});
