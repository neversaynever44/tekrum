$(document).ready(function() {


	$('.js-cart').click(function() {
		$('.js-overlay').add('.js-popup').addClass('is-active');
		$('body').addClass('is-hidden');
	
	});
	
	$('.js-back').click(function() {
	 	$('.js-overlay').add('.js-popup').removeClass('is-active');
		$('body').removeClass('is-hidden');
	});

});

