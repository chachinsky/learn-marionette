define(function(require) {
  'use strict';

  var LocalStorage = require('backbone.localstorage');
  var _ = require('underscore');


  function findStorageKey(entity) {
    // use a model's urlRoot value
    if (entity.urlRoot) {
      return _.result(entity, 'urlRoot');
    }
    // use a collection's url value
    if (entity.url) {
      return _.result(entity, 'url');
    }
    // fallback to obtaining a model's storage key from
    // the collection it belongs to
    if (entity.collection && entity.collection.url) {
      return _.result(entity.collection, 'url');
    }

    throw new Error('Unable to determine storage key');
  }

  function StorageMixin(entityPrototype) {
    var storageKey = findStorageKey(entityPrototype);
    return {
      localStorage: new LocalStorage(storageKey)
    };
  }

  return {
    configureStorage: function(entity) {
      _.extend(entity.prototype, new StorageMixin(entity.prototype));
    }
  };

});
