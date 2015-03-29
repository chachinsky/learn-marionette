define(function(require) {
  'use strict';

  require('backbone.syphon');
  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var EditContact = Marionette.ItemView.extend({
    template: Templates.ContactForm,
    events: {
      'click button.js-submit': 'submitClicked'
    },
    submitClicked: function() {
      var data = Backbone.Syphon.serialize(this);
      console.log(data);
      this.trigger('form:submit', data);
      return false;
    }
  });


  return EditContact;
});
