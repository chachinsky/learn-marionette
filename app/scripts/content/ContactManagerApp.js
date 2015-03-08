define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');
  var MainContainer = require('content/MainContainer');

  var ContactManager = new Marionette.Application();

  ContactManager.addRegions({
    mainRegion: '#main-region'
  });

  ContactManager.StaticView = Marionette.ItemView.extend({
    template: Templates.Static
  });

  ContactManager.on('start', function() {
    new MainContainer().render();
    var staticView = new ContactManager.StaticView({
      tagName: 'ul',
      template: Templates.DiffStatic
    });

    ContactManager.mainRegion.show(staticView);

  });

  return ContactManager;

});
