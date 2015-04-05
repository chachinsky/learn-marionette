define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var Layout = Marionette.LayoutView.extend({
    template: Templates.ContactListLayout,
    regions: {
      panelRegion: '#panel-region',
      contactsRegion: '#contacts-region'
    }
  });

  var Panel = Marionette.ItemView.extend({
    template: Templates.ContactListPanel,
    triggers: {
      'click #new-contact': 'contact:new'
    }
  });

  var Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: Templates.Contact,
    triggers: {
      'click #del-btn': 'contact:delete',
      'click #show-btn': 'contact:show',
      'click #edit-btn': 'contact:edit'
    },
    events: {
      'click': 'highlightName',
    },
    highlightName: function() {
      this.$el.toggleClass('warning');
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
    Contacts: Contacts,
    Layout: Layout,
    Panel: Panel
  };

});
