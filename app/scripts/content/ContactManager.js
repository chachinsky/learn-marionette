define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Mustache = require('mustache');
  var ContactManager = new Marionette.Application();

  Marionette.Renderer.render = function(template, data) {
    return Mustache.render(template, data);
  };

  ContactManager.addRegions({
    mainRegion: '#main-region'
  });

  return ContactManager;

});
