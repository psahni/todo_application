BackboneTodoApp.Models.Todo = Backbone.Model.extend({

  defaults: function(){
      return {
        completed: false
      };
    },
  validate: function(attrs){
    if(attrs.title.length == 0){
      return "must not be blank";
    }
  },
  toggle: function(){
      this.save({completed: !this.get("completed")});
  }

});
