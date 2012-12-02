var app = app || {};
$(function($){
    'use strict';
    app.Todo = Backbone.Model.extend({
        defaults:{
           title: '',
		   completed: false 
        },
       
        toggle: function() {
            this.url = "/todos/" + this.attributes.id + "/completed";
			this.save({
				completed: !this.get('completed')
			});
		}
    });
});









/*Task = Backbone.Model.extend({

    defaults:{
        completed: false,
        status: "incomplete"
    },
    isCompleted: function(){
        return this.get('status') == "completed" ;
    },
    render: function(){
        tasks.add(this);
    },
    toggleStatus: function(){
        this.get("status") == "incomplete" ? this.set({status: "completed"}) : this.set({status: "incompleted"})
    }
    
    
});

var app = app || {};

(function() {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({

		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function() {
			this.save({
				completed: !this.get('completed')
			});
		}

	});

}());*/
