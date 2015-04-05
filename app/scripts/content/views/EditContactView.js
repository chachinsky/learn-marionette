define(function(require) {
  'use strict';

  var FormView = require('content/base/Form');

  var EditContactView = FormView.extend({
    initialize: function() {
      this.title = 'Edit ' + this.model.get('firstName') +
        ' ' + this.model.get('lastName');
    }
  });


  return EditContactView;
});
