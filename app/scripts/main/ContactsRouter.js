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
      ContactManager.trigger('contacts:list');
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
      ListController.listContacts();
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
        listContacts: function() {
          console.log('listContacts');
          ListController.listContacts.call(ListController);
        },
        showContactById: function(id) {
          console.log('showContactById');
          ShowController.showContactById.call(ShowController, id);
        },
        editContact: EditController.editContactById.bind(EditController)
      }
    });
  }

  return {
    initialize: initialize
  };
});
