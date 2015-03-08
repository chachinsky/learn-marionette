require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    text: '../bower_components/text/text',
    mustache: '../bower_components/mustache/mustache',
    marionette: '../bower_components/marionette/lib/backbone.marionette'

  }
});

define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Templates = require('templates/Templates');
  var Marionette = require('marionette');

  var MainContainer = Backbone.View.extend({
    el: 'body',
    render: function() {
      this.$el.append(Templates.Navbar);
      this.$el.append(Templates.MainContainer);
    }
  });

  new MainContainer().render();


});
