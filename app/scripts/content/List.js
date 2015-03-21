define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: Templates.Contact,
    events: {
      'click': 'highlightName',
      'click #del-btn': 'deleteBtn',
      'click #show-btn': 'showClicked'
    },
    highlightName: function() {
      this.$el.toggleClass('warning');
    },
    deleteBtn: function(){
      this.trigger('contact:delete', this.model);
      return false;
    },
    showClicked: function(){
      this.trigger('contact:show', this.model);
      return false;
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
