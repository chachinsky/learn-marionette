define(function(require) {
  'use strict';

  var List = require('content/List');
  var ContactManager = require('main/ContactManager');
  var ShowController = require('content/ShowController');

  return {
    listContacts: function() {
      var contacts = ContactManager.request('contact:entities');

      var contactsListView = new List.Contacts({
        collection: contacts
      });

      contactsListView.on('childview:contact:delete', function(childview, model) {
        model.destroy();
      });

      contactsListView.on('childview:contact:show', function(childview, model) {
        ContactManager.trigger('contact:show', model.get('id'));
        ShowController.showContact(model);
      });

      ContactManager.mainRegion.show(contactsListView);
    }
  };

});
