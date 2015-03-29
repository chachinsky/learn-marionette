define(function(require) {
  'use strict';

  require('jquery.spin');
  var $ = require('jquery');
  var Marionette = require('marionette');
  var Templates = require('templates/Templates');
  var ContactManager = require('main/ContactManager');

  var Loading = Marionette.ItemView.extend({
    template: Templates.Loading,
    title: 'Loading Data',
    message: 'Please wait, data is loading.',
    onShow: function() {
      var opts = {
        lines: 13, // The number of lines to draw 
        length: 20, // The length of each line 
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '120px', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
      };
      $('#spinner').spin(opts);
    },
    serializeData: function() {
      return {
        title: Marionette.getOption(this, 'title'),
        message: Marionette.getOption(this, 'message')
      };
    }
  });



  return {
    show: function(title, message) {
      var loadingScreen = new Loading({
        title: title,
        message: message
      });
      ContactManager.mainRegion.show(loadingScreen);
    }
  };
});
