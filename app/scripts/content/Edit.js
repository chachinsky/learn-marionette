define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var EditContact = Marionette.ItemView.extend({
    template: Templates.ContactForm,
    events: {
      'click button.js-submit': 'submitClicked'
    },
    submitClicked: function() {
      console.log('edit contact');

      return false;
    }
  });


  return EditContact;
});
