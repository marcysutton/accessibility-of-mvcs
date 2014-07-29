App = Ember.Application.create();

App.GoldHotpantsComponent = Ember.Component.extend({
	attributeBindings: [
		'tabIndex'
	],
	tagName: 'div',
	ariaRole: 'form',

	tabIndex: function() {
		return this.get('active') ? 0 : -1;
	}.property('active')
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