require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    text: '../bower_components/text/text',
    mustache: '../bower_components/mustache/mustache',
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    'backbone.localstorage': '../bower_components/backbone.localStorage/backbone.localStorage',
    spin: '../bower_components/spinjs/spin',
    'jquery.spin': '../bower_components/spinjs/jquery.spin',
    'backbone.syphon': '../bower_components/backbone.syphon/lib/backbone.syphon',
    'jquery.ui': '../bower_components/jquery-ui/jquery-ui'
  },
  shim: {
    'backbone.localstorage': ['backbone'],
    'backbone.syphon': ['backbone'],
    'jquery.spin': ['jquery'],
    'jquery.ui': ['jquery']
  }
});

define(function(require) {
  'use strict';

  var App = require('main/App');

  App.start();
});
