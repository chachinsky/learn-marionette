define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  return Marionette.ItemView.extend({
    tagName: 'li',
    template: Templates.Contact
  });

});
