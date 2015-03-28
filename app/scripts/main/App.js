define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Mustache = require('mustache');
  var Body = require('content/Body');
  var ContactManager = require('main/ContactManager');
  var ContactsRouter = require('main/ContactsRouter');

  Marionette.Renderer.render = function(template, data) {
    return Mustache.render(template, data);
  };

  ContactManager.addInitializer(function() {
    ContactsRouter.initialize();
  });

  Body.render();

  return ContactManager;
});
