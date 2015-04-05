define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var ShowContact = Marionette.ItemView.extend({
    template: Templates.ContactView,
    events: {
      'click a.js-edit': 'editClicked'
    },
    editClicked: function() {
      this.trigger('contact:edit', this.model);
      return false;
    }
  });

  return ShowContact;
});
