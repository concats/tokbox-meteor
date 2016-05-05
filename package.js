Package.describe({
  summary: "Integrate real-time communications into your website and mobile apps using the OpenTok WebRTC API.",
  version: "2.3.0",
  name: "concats:tokbox",
  git: "https://github.com/concats/tokbox-meteor"
});

Npm.depends({
  "opentok": "2.3.0"
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('server/index.js', 'server');
  api.addFiles(['client/opentok.2.8.0.js', 'client/opentok-layout.js'], 'client');
  api.export(['OpenTok', 'OpenTokClient'], 'server');
});
