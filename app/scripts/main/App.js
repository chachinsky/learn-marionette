define(function(require) {
  'use strict';

  var ListController = require('content/ListController');
  var ContactManager = require('content/ContactManager');
  var MainContainer = require('main/MainContainer');

  MainContainer.render();

  ContactManager.on('start', function() {
    ListController.listContacts();
  });

  return ContactManager;

});
