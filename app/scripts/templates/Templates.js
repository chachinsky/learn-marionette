define(function(require) {
  'use strict';

  return {
    Body: require('text!templates/Body.html'),
    MainContainer: require('text!templates/MainContainer.html'),
    Navbar: require('text!templates/NavbarTemplate.html'),
    Contact: require('text!templates/ContactTemplate.html'),
    ContactList: require('text!templates/ContactListTemplate.html'),
    ContactView: require('text!templates/ContactView.html'),
    MissingContactView: require('text!templates/MissingContactView.html'),
    Loading: require('text!templates/Loading.html'),
    ContactForm: require('text!templates/ContactForm.html'),
    ContactListLayout: require('text!templates/ContactListLayout.html'),
    ContactListPanel: require('text!templates/ContactListPanel.html')
  };
});
