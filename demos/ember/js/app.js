App = Ember.Application.create();

Ember.RadioButton = Ember.View.extend({  
  tagName : "input",
  type : "radio",
  attributeBindings : [ "name", "type", "value", "checked:checked:" ],
  click : function() {
    this.set("selection", this.$().val())
  },
  checked : function() {
    return this.get("value") == this.get("selection");   
  }.property()
});

Ember.AccessibleTextField = Ember.TextField.extend({
	attributeBindings : [ "aria-label" ]
});

App.GoldHotpantsComponent = Ember.Component.extend({
	captions: [{
	  body: "Ow! My eye."
	}, {
	  body: "Shiny!"
	}],

	winningCaption: "Tom Dale's Gold Shorts",
  
  radioButtonSelected: null,
	
	attributeBindings: [
		'tabIndex',
		'ariaLabel'
	],
	tagName: 'div',
	ariaRole: 'form',

	didInsertElement: function(){
		this.set('winningCaption', this.get('captions')[0].body);
	},

	radioButtonSelectedObserver: function(obj) {
		this.set('winningCaption', this.radioButtonSelected);
  }.observes('radioButtonSelected'),

	winningCaptionObserver: function(){
		// do something fancy here
		$('.alt').addClass('highlighted')
		window.setTimeout(function(){
			$('.alt').removeClass('highlighted');
		},2000);
	}.observes('winningCaption'),

	tabIndex: function() {
		return this.get('active') ? 0 : -1;
	}.property('active'),

	createCaption: function() {
		// Get the caption set by the "New Caption" text field
		var caption = this.get('newCaption');
		if (!caption.trim()) {
			return;
		}
		// Create the new Caption model
		this.get('captions').pushObject({body: caption});

		// Clear the "New Caption" text field
		this.set('newCaption', '');

		// Save the new model
		// this.get('store').commit();
	}
});