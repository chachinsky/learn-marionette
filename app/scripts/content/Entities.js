define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var _ = require('underscore');
  var LocalStorage = require('util/LocalStorage');

  var Contact = Backbone.Model.extend({
    urlRoot: 'contacts',
    defaults: {
      firstName: '',
      phoneNumber: 'No phone Number!'
    },
    validate: function(attrs, options) {
      var errors = {};
      if (!attrs.firstName) {
        errors.firstName = 'can\'t be blank';
      }
      if (!attrs.lastName) {
        errors.lastName = 'can\'t be blank';
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  LocalStorage.configureStorage(Contact);

  var ContactCollection = Backbone.Collection.extend({
    url: 'contacts',
    model: Contact,
    comparator: 'firstName'
  });

  LocalStorage.configureStorage(ContactCollection);

  return {
    Contact: Contact,
    ContactCollection: ContactCollection
  };
});
