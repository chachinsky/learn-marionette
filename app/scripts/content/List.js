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
      'click #show-btn': 'showClicked',
      'click #edit-btn': 'editClicked'
    },
    highlightName: function() {
      this.$el.toggleClass('warning');
    },
    deleteBtn: function() {
      this.trigger('contact:delete', this.model);
      return false;
    },
    showClicked: function() {
      this.trigger('contact:show', this.model);
      return false;
    },
    editClicked: function(e) {
      e.stopPropagation();
      this.trigger('contact:edit', this.model);
      return false;
    },
    flash: function(cssClass) {
      var $view = this.$el;
      $view.hide().toggleClass(cssClass).fadeIn(800, function() {
        setTimeout(function() {
          $view.toggleClass(cssClass);
        }, 500);
      });
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
