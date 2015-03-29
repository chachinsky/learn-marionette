define(function(require) {
  'use strict';

  var $ = require('jquery');
  var ShowContact = require('content/ShowContact');
  var ShowMissingContact = require('content/ShowMissingContact');
  var ContactManager = require('main/ContactManager');
  var Loading = require('common/Loading');

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
      var fetchingContact = ContactManager.request('contact:entity', id);
      Loading.show();

      $.when(fetchingContact).done(function(contact) {
        this.showContact(contact);
      }.bind(this));

    }
  };

});
