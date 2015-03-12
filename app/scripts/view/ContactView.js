define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  return Marionette.ItemView.extend({
    template: Templates.Contact,
    events: {
      'click p': 'alertPhoneNumber'
    },
    alertPhoneNumber: function() {
      console.log(this.model.escape('phoneNumber'));
    }
  });

});
