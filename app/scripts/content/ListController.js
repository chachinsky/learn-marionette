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

      ContactManager.mainRegion.show(contactsListView);
    }
  };

});
