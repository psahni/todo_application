BackboneTodoApp.Views.Todo = Backbone.View.extend({
   template: JST['todos/todo'],
   tagName: 'li',
   events: {
    'click    .check'         : "toggleCompleted",
    'dblclick .todo-text'     : "edit",
    'click    .todo-destroy'  : "clear",
    'keypress .todo-input'    : "updateOnEnter"
    },
    initialize: function(){
        this.model.on("change", this.render);
        this.model.on("destroy", this.remove);
        this.model.on("error", function(todo, error){
          return alert("item " + error);
        });
    },
    render: function(){
        this.$(this.el).html(this.template({todo: this.model}));
        return this;
    },
    edit: function(){
        this.$(this.el).addClass('editing');
        this.$(".todo-input")
            .val(this.model.get('title'))
            .focus()
            .on("blur", function(){ this.model.save({title: this.$(".todo-input").val() })} )
        $(this.el).removeClass('editing')
    },
    updateOnEnter: function(event){
      if(event.keyCode == 13){
       $('.todo-input').trigger('blur')
      }
    },
    toogleCompleted: function(){
        this.model.toggle();
    },
    clear: function(){
        this.model.destroy();
    },
    remove: function(){
        $(this.el).remove();
    }
});