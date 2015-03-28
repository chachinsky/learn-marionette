define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var LocalStorage = require('util/LocalStorage');

  var Contact = Backbone.Model.extend({
    urlRoot: 'contacts',
    defaults: {
      firstName: '',
      phoneNumber: 'No phone Number!'
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
