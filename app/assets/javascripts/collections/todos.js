BackboneTodoApp.Collections.Todos = Backbone.Collection.extend({

  model: BackboneTodoApp.Models.Todo,
  url: '/api/todos',
  completed: function(){
    return this.filter(function(todo){
        return todo.get("completed");
    })
  },
  remaining: function(){
    return this.without.apply(this, this.completed());
  }
});
