'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  const css = funnel('node_modules/bootstrap/dist/css', {
    include: ['*.min.css'],
    destDir: 'bootstrap.css',
  });
  const js = funnel('node_modules/bootstrap/dist/js', {
    include: ['*.js'],
    destDir: 'bootstrap.js',
  });
  app.import('vendor/leagacy.css');
  return app.toTree(css, js);
};
