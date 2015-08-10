;(function(global, undefined){
	'use strict';

	var sleepingDog = new BioCreature(function() {
		this.type = 'Dog';
		this.current_state = 'sleep';
	});

	var sleepingBaby = new BioCreature(function() {
		this.type = 'Baby';
		this.current_state = 'cry';
	});

	var sleepingCat = new BioCreature(function() {
		this.type = 'Cat';
		this.current_state = 'awake';
	});

})(window);