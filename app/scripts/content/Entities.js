define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var Contact = Backbone.Model.extend({
    defaults: {
      firstName: '',
      phoneNumber: 'No phone Number!'
    }
  });

  var ContactCollection = Backbone.Collection.extend({
    model: Contact,
    comparator: 'firstName'
  });

  return {
    Contact: Contact,
    ContactCollection: ContactCollection
  };
});
