define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var ShowMissingContact = Marionette.ItemView.extend({
    template: Templates.MissingContactView
  });

  return ShowMissingContact;
});
