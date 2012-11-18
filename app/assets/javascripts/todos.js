window.BackboneTodoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
   this.App = new Todo.Routers.Todos;
   Backbone.history.start({pushState: !0});
  }
};

$(document).ready(function(){
  BackboneTodoApp.initialize();
});
