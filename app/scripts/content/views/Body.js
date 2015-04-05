define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var Body = Marionette.LayoutView.extend({
    el: 'body',
    template: Templates.Body,
    regions: {
      navbar: '#nav-bar-region',
      main: '#main-container-region'
    }
  });

  var navbar = new Marionette.ItemView({
    template: Templates.Navbar
  });

  var mainContainer = new Marionette.ItemView({
    template: Templates.MainContainer
  });

  var body = new Body();

  body.on('render', function() {
    body.navbar.show(navbar);
    body.main.show(mainContainer);
  });

  return body;
});
