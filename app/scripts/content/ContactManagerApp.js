define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var MainContainer = require('content/MainContainer');
  var ContactManager = require('content/ContactManager');
  var Contact = require('content/Contact');
  var ContactItemView = require('view/ContactItemView');

  ContactManager.addRegions({
    mainRegion: '#main-region'
  });

  ContactManager.Contact = Contact;
  ContactManager.ContactCollection = Backbone.Collection.extend({
    model: ContactManager.Contact,
    comparator: function(contact) {
      return contact.get('firstName') + ' ' + contact.get('lastName');
    }
  });

  ContactManager.ContactItemView = ContactItemView;
  ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: ContactManager.ContactItemView
  });

  ContactManager.on('start', function() {
    MainContainer.render();

    var contacts = new ContactManager.ContactCollection([{
      firstName: 'jose',
      lastName: 'medina',
      phoneNumber: '610-731-6827'
    }, {
      firstName: 'mercedes',
      lastName: 'fernandez',
      phoneNumber: '123-123-1231'
    }, {
      firstName: 'solangel',
      lastName: 'garcia',
      phoneNumber: '123-121-1231'
    }, {
      firstName: 'johnnie',
      lastName: 'garcia',
      phoneNumber: '123-121-1231'
    }, {
      firstName: 'jose',
      lastName: 'angel',
      phoneNumber: '123-121-1231'
    }]);

    var contactsListView = new ContactManager.ContactsView({
      collection: contacts
    });

    ContactManager.mainRegion.show(contactsListView);

  });

  return ContactManager;

});
