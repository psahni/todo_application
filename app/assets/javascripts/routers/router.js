

/*TodoList = Backbone.Router.extend({
    initialize: function(){
        formView =  new TaskFormView({collection: tasks, el: "#todo-form"})
    },
    routes:{
        "": "index"
    },
    index: function(){
        formView.render();
    }
})
*/

var app = app || {};

$(function($) {
	'use strict';
	// Todo Router
	// ----------
	var Workspace = Backbone.Router.extend({
		routes:{
			'*filter': 'setFilter'
		},
		setFilter: function( param ) {
			// Set the current filter to be used
			app.TodoFilter = param.trim() || '';
			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			console.log("in router")
			app.Todos.trigger('filter');
		}
	});
	app.TodoRouter = new Workspace();
	Backbone.history.start();
});
