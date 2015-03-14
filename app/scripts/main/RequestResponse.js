define(function(require) {
  'use strict';

  var Entities = require('content/Entities');
  var ContactManager = require('content/ContactManager');

  var contacts;

  var initializeContacts = function() {
    contacts = new Entities.ContactCollection([{
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
  };

  var API = {
    getContactEntities: function() {
      if (contacts === undefined) {
        initializeContacts();
      }

      return contacts;
    }
  };

  ContactManager.reqres.setHandler('contact:entities', function() {
    return API.getContactEntities();
  });
});
