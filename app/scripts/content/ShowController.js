define(function(require) {
  'use strict';

  var ShowContact = require('content/ShowContact');
  var ShowMissingContact = require('content/ShowMissingContact');
  var ContactManager = require('main/ContactManager');

  return {
    showContact: function(model) {
      var contactView;

      if (model === undefined) {
        contactView = new ShowMissingContact();

      } else {
        contactView = new ShowContact({
          model: model
        });
      }


      ContactManager.mainRegion.show(contactView);
    },
    showContactById: function(id) {
      var contact = ContactManager.request('contact:entity', id);
      this.showContact(contact);
    }
  };

});
