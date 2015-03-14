define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: Templates.Contact
  });

  var Contacts = Marionette.CollectionView.extend({
    tagName: 'table',
    className: 'table table-hover',
    childView: Contact
  });

  return {
    Contact: Contact,
    Contacts: Contacts
  };

});
