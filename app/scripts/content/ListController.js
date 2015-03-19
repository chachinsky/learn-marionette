define(function(require) {
  'use strict';

  require('main/RequestResponse');
  var List = require('content/List');
  var ContactManager = require('content/ContactManager');

  return {
    listContacts: function() {
      var contacts = ContactManager.request('contact:entities');

      var contactsListView = new List.Contacts({
        collection: contacts
      });

      contactsListView.on('childview:contact:delete', function(childview, model){
        contacts.remove(model);
      });

      ContactManager.mainRegion.show(contactsListView);
    }
  };

});
