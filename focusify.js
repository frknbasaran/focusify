$.fn.focusify = function(wait, color, type){
	return this.each(function(){
		switch(type) {
			case 'border':
				console.log("border working on..");
				$(this).find('.focusify-disable').fadeTo("fast",0).addClass('focusedDisable');
				var current = $(this).find('.focusify-enable').css('border');
				$(this).find('.focusify-enable').css('border','2px solid '+color).addClass('focusedEnable');
				setTimeout(function() {
					console.log("deactivator start..");
					$('.focusedDisable').fadeTo("fast",1);
					$('.focusedEnable').css('border',current);
					$('.focusify-disable').removeClass('focusedDisable');
					$('.focusify-enable').removeClass('focusedEnable');
				}, wait);
				break;
			case 'background':
				console.log("background working on..");
				$(this).find('.focusify-disable').fadeTo("fast",0).addClass('focusedDisable');
				var current = $(this).find('.focusify-enable').css('background-color');
				$(this).find('.focusify-enable').css('background-color',color).addClass('focusedEnable');
				setTimeout(function() {
					$('.focusedDisable').fadeTo("fast",1);
					$('.focusedDisable').css('background-color',current);
					$('.focusify-disable').removeClass('focusedDisable');
					$('.focusify-enable').removeClass('focusedEnable');
				}, wait);
				break;
			case 'reverse':
				$(this).find('.focusify-disable').fadeTo("fast", 0).addClass('focusedDisable');
				var background_color = $(this).find('.focusify-enable').css('background-color');
				var color = $(this).find('.focusify-enable').css('color');
				$(this).find('.focusify-enable').css({'background-color':color, 'color':background_color}).addClass('focusedEnable');
				setTimeout(function() {
					$('.focusedDisable').fadeTo("fast", 1).removeClass('focusedDisable');
					$('.focusedEnable').css({'background-color':background_color, 'color':color}).removeClass('focusedEnable');
				}, wait);
				break;
			default:
				console.log("Focusify Error: Not selected any element");
				break;
		}
	});
}