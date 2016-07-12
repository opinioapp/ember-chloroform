/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-chloroform',
  
  included: function (app, parentAddon) {
    var target = (parentAddon || app);
    target.import('vendor/styles.css');
  }
};
