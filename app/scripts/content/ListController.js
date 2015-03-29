define(function(require) {
  'use strict';

  var List = require('content/List');
  var ContactManager = require('main/ContactManager');
  var ShowController = require('content/ShowController');
  var Loading = require('common/Loading');

  return {
    listContacts: function() {
      var fetchingContacts = ContactManager.request('contact:entities');
      Loading.show('List Loading', 'will display in a moment');

      $.when(fetchingContacts).done(function(contacts) {
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
      });
    }
  };

});
