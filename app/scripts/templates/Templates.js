define(function(require) {
  'use strict';

  return {
    MainContainer: require('text!templates/MainContainerTemplate.html'),
    Navbar: require('text!templates/NavbarTemplate.html'),
    Contact: require('text!templates/ContactTemplate.html'),
    ContactList: require('text!templates/ContactListTemplate.html'),
    ContactView: require('text!templates/ContactView.html'),
    MissingContactView: require('text!templates/MissingContactView.html'),
    Loading: require('text!templates/Loading.html'),
    ContactForm: require('text!templates/ContactForm.html')
  };
});
