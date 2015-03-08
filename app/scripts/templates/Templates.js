define(function(require) {
  'use strict';

  return {
    MainContainer: require('text!templates/MainContainerTemplate.html'),
    Navbar: require('text!templates/NavbarTemplate.html'),
    Static: require('text!templates/StaticTemplate.html'),
    DiffStatic: require('text!templates/DiffStaticTemplate.html')
  };
});
