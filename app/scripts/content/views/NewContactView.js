define(function(require) {
  'use strict';

  var FormView = require('content/base/Form');

  var NewContactView = FormView.extend({
    title: 'New Contact'
  });


  return NewContactView;
});
