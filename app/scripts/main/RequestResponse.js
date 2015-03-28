define(function(require) {
  'use strict';

  var Entities = require('content/Entities');

  var initializeContacts = function() {
    var contacts = new Entities.ContactCollection([{
      id: 1,
      firstName: 'jose',
      lastName: 'medina',
      phoneNumber: '610-731-6827'
    }, {
      id: 2,
      firstName: 'mercedes',
      lastName: 'fernandez',
      phoneNumber: '123-123-1231'
    }, {
      id: 3,
      firstName: 'solangel',
      lastName: 'garcia',
      phoneNumber: '123-121-1231'
    }, {
      id: 4,
      firstName: 'johnnie',
      lastName: 'garcia',
      phoneNumber: '123-121-1231'
    }, {
      id: 5,
      firstName: 'jose',
      lastName: 'angel',
      phoneNumber: '123-121-1231'
    }]);

    contacts.forEach(function(contact) {
      contact.save();
    });

    return contacts;
  };

  function getContactEntities() {
    var contacts = new Entities.ContactCollection();
    contacts.fetch();

    if (contacts.length === 0) {
      return initializeContacts();
    }
    return contacts;
  }

  function getContactEntity(contactId) {
    var contact = new Entities.Contact({
      id: contactId
    });
    contact.fetch();
    return contact;
  }

  return {
    getContactEntities: getContactEntities,
    getContactEntity: getContactEntity
  };
});
