define(function(require) {
  'use strict';

  require('jquery.ui');
  var $ = require('jquery');
  var List = require('content/List');
  var EditContact = require('content/EditContact');
  var ContactManager = require('main/ContactManager');
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
        });

        contactsListView.on('childview:contact:edit', function(childview, model) {
          var view = new EditContact({
            model: model,
            asModal: true
          });

          view.on('form:submit', function(data) {
            if (model.save(data)) {
              childview.render();
              ContactManager.dialogRegion.empty();
              childview.flash('success');
            } else {
              view.triggerMethod('form:data:invalid', model.validationError);
            }
          });

          ContactManager.dialogRegion.show(view);
        });

        ContactManager.mainRegion.show(contactsListView);
      });
    }
  };

});
