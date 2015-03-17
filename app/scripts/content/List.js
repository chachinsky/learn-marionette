define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: Templates.Contact,
    events: {
      'click': 'highlightName',
      'click td': 'displayText'
    },
    highlightName: function() {
      this.$el.toggleClass('warning');
    },
    displayText: function(e) {
      alert($(e.target).text());
    }
  });

  var Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: Templates.ContactList,
    childView: Contact,
    childViewContainer: 'tbody'
  });

  return {
    Contact: Contact,
    Contacts: Contacts
  };

});
