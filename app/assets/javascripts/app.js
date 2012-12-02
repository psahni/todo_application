/*window.MyApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
   this.App = new TodoList;
   Backbone.history.start({pushState: !0});
  }
};

$(document).ready(function(){
  MyApp.initialize();
});
*/

var app = app || {};
var ENTER_KEY = 13;

$(function() {
	// Kick things off by creating the **App**.
	new app.AppView();

});
