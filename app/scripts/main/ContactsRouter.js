define(function(require){
	'use strict';

	var Marionette = require('marionette');
	var ListController = require('content/ListController');
	var ShowController = require('content/ShowController');

	var ContactsRouter = Marionette.AppRouter.extend({
		appRoutes: {
			'contacts': 'listContacts',
			'contacts/:id' : 'showContact'
		},
		routes: {
			'' : 'defaultRoute'
		},
		defaultRoute: function(){
			this.navigate('contacts');
			ListController.listContacts();
		}
	});

	function initialize(){
		new ContactsRouter({
			controller: {
				listContacts : ListController.listContacts,
				showContact : ShowController.showContactById
			}
		});
	}

	return {
		initialize: initialize
	};
});