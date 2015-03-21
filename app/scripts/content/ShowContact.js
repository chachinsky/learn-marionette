define(function(require){
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var ShowContact = Marionette.ItemView.extend({
  	template: Templates.ContactView
  });

  return ShowContact;
});