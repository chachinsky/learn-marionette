define(function(require) {
  'use strict';

  var RequestResponse = require('main/RequestResponse');
  var Marionette = require('marionette');
  var ContactManager = new Marionette.Application();

  ContactManager.reqres.setHandler('contact:entities', function() {
    return RequestResponse.getContactEntities();
  });

  ContactManager.reqres.setHandler('contact:entity', function(id) {
    return RequestResponse.getContactEntity(id);
  });

  ContactManager.addRegions({
    mainRegion: '#main-region',
    dialogRegion: '#dialog-region'
  });

  return ContactManager;

});
