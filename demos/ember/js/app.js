App = Ember.Application.create();

App.GoldHotpantsComponent = Ember.Component.extend({
  tagName: 'section'
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
    	captions: [{
			  body: "Ow! My eye."
			}, {
			  body: "Shiny!"
			}]
		}
  }
});