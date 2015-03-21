define(function(require) {
  'use strict';

  var ShowContact = require('content/ShowContact');
  var ContactManager = require('content/ContactManager');

  return {
    showContact: function(model){
      var contactView = new ShowContact({
        model: model
      });

      ContactManager.mainRegion.show(contactView);
    }
  };

});
