define(function(require) {
  'use strict';

  var $ = require('jquery');
  var Loading = require('common/Loading');
  var ShowMissingContact = require('content/ShowMissingContact');
  var EditContact = require('content/EditContact');
  var ContactManager = require('main/ContactManager');

  function createEditContactView(contact) {
    var view = new EditContact({
      model: contact
    });

    view.on('form:submit', function(data) {
      contact.save(data);
      ContactManager.trigger('contact:show', contact.get('id'));
    });

    return view;
  }

  return {
    editContact: function(model) {
      var view;

      if (model === undefined) {
        view = new ShowMissingContact();
      } else {
        view = createEditContactView(model);
      }

      ContactManager.mainRegion.show(view);
    },
    editContactById: function(id) {
      Loading.show('Editing a contact', 'Loading...');

      var fetchingContact = ContactManager.request('contact:entity', id);

      $.when(fetchingContact).done(function(contact) {
        this.editContact(contact);
      }.bind(this));
    }
  };
});
