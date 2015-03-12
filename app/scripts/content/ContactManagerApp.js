define(function(require) {
  'use strict';

  var MainContainer = require('content/MainContainer');
  var ContactManager = require('content/ContactManager');
  var Contact = require('content/Contact');
  var ContactView = require('view/ContactView');

  ContactManager.addRegions({
    mainRegion: '#main-region'
  });

  ContactManager.Contact = Contact;
  ContactManager.ContactView = ContactView;

  ContactManager.on('start', function() {
    MainContainer.render();

    var alice = new ContactManager.Contact({
      firstName: 'Josie',
      lastName: 'Medina'
    });

    var contactView = new ContactManager.ContactView({
      model: alice
    });

    ContactManager.mainRegion.show(contactView);

  });

  return ContactManager;

});
