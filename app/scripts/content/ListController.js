define(function(require) {
  'use strict';

  require('main/RequestResponse');
  var List = require('content/List');
  var ContactManager = require('content/ContactManager');
  var ShowController = require('content/ShowController');

  return {
    listContacts: function() {
      var contacts = ContactManager.request('contact:entities');

      var contactsListView = new List.Contacts({
        collection: contacts
      });

      contactsListView.on('childview:contact:delete', function(childview, model){
        contacts.remove(model);
      });

      contactsListView.on('childview:contact:show', function(childview, model){
        ShowController.showContact(model);
      });

      ContactManager.mainRegion.show(contactsListView);
    }
  };

});
