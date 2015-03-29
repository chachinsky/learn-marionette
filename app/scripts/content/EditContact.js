define(function(require) {
  'use strict';

  require('backbone.syphon');
  var $ = require('jquery');
  var Backbone = require('backbone');
  var _ = require('underscore');
  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var EditContact = Marionette.ItemView.extend({
    template: Templates.ContactForm,
    events: {
      'click button.js-submit': 'submitClicked'
    },
    submitClicked: function() {
      var data = Backbone.Syphon.serialize(this);
      this.trigger('form:submit', data);
      return false;
    },
    onFormDataInvalid: function(errors) {

      var clearFormErrors = function() {
        var $form = this.$el.find('form');
        $form.find('.help-inline').each(function() {
          $(this).remove();
        });
        $form.find('.form-group').each(function() {
          $(this).removeClass('has-error');
        });
      }.bind(this);

      clearFormErrors();

      _.each(errors, function(error, key) {
        var $formGroup = this.$el.find('#contact-' + key).parent();
        var $errorEl = $('<span/>').addClass('help-inline error').text(error);
        $formGroup.append($errorEl).addClass('has-error');
      }.bind(this));


    }
  });


  return EditContact;
});
