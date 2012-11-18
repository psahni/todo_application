BackboneTodoApp.Routers.Todos = Backbone.Router.extend({
  routes: {
    '' : 'index'
  },
  initialize: function(){
    this.collection = new BackboneTodoApp.Collections.Todos;
    this.container  = jQuery("#container");
    this.collection.reset(this.container.data("todos"));
  },
  index: function(){
   this.container.empty();
   var view = new Todo.Views.Index({collection: this.collection});
   return this.container.html(view.render().el);
  }
});
