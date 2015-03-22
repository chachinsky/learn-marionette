define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var RequestReponse = require('main/RequestResponse');
  var Marionette = require('marionette');
  var ContactManager = new Marionette.Application();

  ContactManager.reqres.setHandler('contact:entities', function() {
    return RequestReponse.getContactEntities();
  });

  ContactManager.addRegions({
    mainRegion: '#main-region'
  });

  ContactManager.navigate = function(route, options){
    options = options || {};
    Backbone.history.navigate(route, options);
  };

  ContactManager.getCurrentRoute = function(){
    return Backbone.history.fragment;
  };

  ContactManager.on('contacts:list', function(){
    ContactManager.navigate('contacts');
  });

  ContactManager.on('contact:show', function(id){
    ContactManager.navigate('contacts/' + id);
  });

  ContactManager.on('start', function() {
    Backbone.history.start();
  });

  return ContactManager;

});
