define(function(require) {
  'use strict';

  var ShowContact = require('content/ShowContact');
  var ContactManager = require('main/ContactManager');

  return {
    showContact : function(model){
      var contactView = new ShowContact({
        model: model
      });

      ContactManager.mainRegion.show(contactView);
    },
    showContactById : function(id){
      var contacts = ContactManager.request('contact:entities');
      var model = contacts.get(id);
      this.showContact(model);
    }
  };

});
