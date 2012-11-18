BackboneTodoApp.Views.Stats = Backbone.View.extend({
    template: JST['todo/stats'],
    initialize: function(){
     this.collection.on("change:completed", this.render );
     this.collection.on("remove", this.render);
    },
    render: function(){
        console.log("Rendering Stats");
        $(this.el).html(this.template({todos: this.collection}));
        return this;
    }

});