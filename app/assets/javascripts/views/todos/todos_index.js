BackboneTodoApp.Views.TodosIndex = Backbone.View.extend({

  template: JST['todos/index'],
  events: {
    'keypress #new-todo'    : "createOnEnter",
    'keyup    #new-todo'    : "showTooltip",
    'click    .todo-clear a': "clearCompleted"
  },
  initialize: function(){
    this.collection.on("reset", this.render);
    this.collection.on("add", this.appendTodo);
  },
  render: function(){
    console.log("rendering");
    $(this.el).html($(this).html(this.template()));
    this.collection.each(this.appendTodo);
    this.renderStats();
    return this;
  },
  appendTodo: function(todo){
      var view = new BackboneTodoApp.Views.Todo({model: todo });
      return this.$("#todo-list").html(view.render().el);
  },
  renderStats: function(){
      var view = new Todo.View.Stats({collection: this.collection});
      return this.$("todo-stats").html(view.render().el);
  },
  createOnEnter: function(event){
      var text = this.$("#new-todo").val();
      if(text && event.code == 13){
        this.collection.create({title: text});
        this.$("#new-todo").val('');
      }
  },
  showToolTip: function(){
      var tooltip = this.$(".ui-tooltip-top");
      var text =  this.$("#new-todo").val();
      tooltip.fadeOut();
      if(this.tooltipTimeout){
        clearTimeout(this.tooltipTimeout);
      }
      if(text!='' && text!=this.$("#new-todo").attr('placeholder')){
        var show =  function(){
            return tooltip.show().fadeIn();
        }
      }
      this.tooltipTimeout = _.delay(show, 1000);
  },
  clearCompleted: function(){
      _.each(this.collection.completed(), function(todo){
            todo.destroy({silent: !0});
      });
      this.collection.trigger("reset");
  }


});
