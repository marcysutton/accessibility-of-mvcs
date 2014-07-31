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

App.GoldHotpantsComponent = Ember.Component.extend({
	captions: [{
	  body: "Ow! My eye."
	}, {
	  body: "Shiny!"
	}],

	winningCaption: "Tom Dale's Gold Shorts",
  
  radioButtonSelected: 1,
	
	attributeBindings: [
		'tabIndex'
	],
	tagName: 'div',
	ariaRole: 'form',

	winningCaptionDidChange: function(sender, key, value, rev){
		// do something fancy here
	},

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