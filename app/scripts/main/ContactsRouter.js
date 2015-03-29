define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var ListController = require('content/ListController');
  var ShowController = require('content/ShowController');
  var EditController = require('content/EditController');
  var ContactManager;

  var ContactsRouter = Marionette.AppRouter.extend({
    appRoutes: {
      'contacts': 'listContacts',
      'contacts/:id': 'showContactById',
      'contacts/:id/edit': 'editContact'
    },
    routes: {
      '': 'defaultRoute'
    },
    defaultRoute: function() {
      this.navigate('contacts');
      ListController.listContacts();
    }
  });

  function addRoutesOnContactManager() {
    ContactManager.navigate = function(route, options) {
      options = options || {};
      Backbone.history.navigate(route, options);
    };

    ContactManager.getCurrentRoute = function() {
      return Backbone.history.fragment;
    };

    ContactManager.on('contacts:list', function() {
      ContactManager.navigate('contacts');
    });

    ContactManager.on('contact:show', function(id) {
      ContactManager.navigate('contacts/' + id);
      ShowController.showContactById(id);
    });

    ContactManager.on('contact:edit', function(id) {
      ContactManager.navigate('contacts/' + id + '/edit');
      EditController.editContactById(id);
    });

    ContactManager.on('start', function() {
      Backbone.history.start();
    });
  }

  function initialize(contactManager) {
    ContactManager = contactManager;
    addRoutesOnContactManager();

    new ContactsRouter({
      controller: {
        listContacts: ListController.listContacts.bind(ListController),
        showContactById: ShowController.showContactById.bind(ShowController),
        editContact: EditController.editContactById.bind(EditController)
      }
    });
  }

  return {
    initialize: initialize
  };
});
