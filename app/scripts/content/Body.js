define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Templates = require('templates/Templates');

  var Body = Backbone.View.extend({
    el: 'body',
    render: function() {
      this.$el.append(Templates.Navbar);
      this.$el.append(Templates.MainContainer);
    }
  });

  return new Body();
});
