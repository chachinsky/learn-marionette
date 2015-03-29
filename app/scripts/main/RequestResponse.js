define(function(require) {
  'use strict';

  var $ = require('jquery');
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

    return contacts.models;
  };

  function getContactEntities() {
    var contacts = new Entities.ContactCollection();
    var defer = $.Deferred();
    var promise;

    setTimeout(function() {
      contacts.fetch({
        success: function(data) {
          defer.resolve(data);
        }
      });
    }, 500);

    promise = defer.promise();

    $.when(promise).done(function(contacts) {
      if (contacts.length === 0) {
        var models = initializeContacts();
        contacts.reset(models);
      }
    });

    return promise;
  }

  function getContactEntity(contactId) {
    var contact = new Entities.Contact({
      id: contactId
    });
    var defer = $.Deferred();

    setTimeout(function() {
      contact.fetch({
        success: function(data) {
          defer.resolve(data);
        },
        error: function() {
          defer.resolve();
        }
      });
    }, 500);

    return defer.promise();
  }

  return {
    getContactEntities: getContactEntities,
    getContactEntity: getContactEntity
  };
});
