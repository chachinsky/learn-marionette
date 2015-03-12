define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var Contact = Backbone.Model.extend({
    defaults: {
      firstName: '',
      phoneNumber: 'No phone Number!'
    }
  });

  return Contact;
});
