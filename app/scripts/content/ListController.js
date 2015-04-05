define(function(require) {
  'use strict';

  require('jquery.ui');
  var $ = require('jquery');
  var List = require('content/views/List');
  var Entities = require('content/Entities');
  var EditContactView = require('content/views/EditContactView');
  var NewContactView = require('content/views/NewContactView');
  var ContactManager = require('main/ContactManager');
  var Loading = require('common/Loading');

  return {
    listContacts: function() {
      var fetchingContacts = ContactManager.request('contact:entities');
      Loading.show('List Loading', 'will display in a moment');

      var contactsListLayout = new List.Layout();
      var contactsListPanel = new List.Panel();

      $.when(fetchingContacts).done(function(contacts) {
        var contactsListView = new List.Contacts({
          collection: contacts
        });

        contactsListLayout.on('show', function() {
          contactsListLayout.panelRegion.show(contactsListPanel);
          contactsListLayout.contactsRegion.show(contactsListView);
        });

        contactsListPanel.on('contact:new', function() {
          var newContact = new Entities.Contact();

          var view = new NewContactView({
            asModal: true,
            model: newContact
          });

          view.on('form:submit', function(data) {
            if (contacts.length > 0) {
              var highestId = contacts.max(function(c) {
                return c.id;
              }).get('id');
              data.id = highestId + 1;
            } else {
              data.id = 1;
            }

            if (newContact.save(data)) {
              contacts.add(newContact);
              ContactManager.dialogRegion.empty();
              contactsListView.children.findByModel(newContact).flash('success');
            } else {
              view.triggerMethod('form:data:invalid', newContact.validationError);
            }

          });

          ContactManager.dialogRegion.show(view);
        });

        contactsListView.on('childview:contact:delete', function(childview, args) {
          args.model.destroy();
        });

        contactsListView.on('childview:contact:show', function(childview, args) {
          var model = args.model;
          ContactManager.trigger('contact:show', model.get('id'));
        });

        contactsListView.on('childview:contact:edit', function(childview, args) {
          var model = args.model;
          var view = new EditContactView({
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

        ContactManager.mainRegion.show(contactsListLayout);
      });
    }
  };

});
