$(document).ready(function() {


	$('.js-cart').click(function() {
		$('.js-overlay').add('.js-popup').addClass('is-active');
		$('body').addClass('is-hidden');
	
	});
	
	$('.js-back').click(function() {
	 	$('.js-overlay').add('.js-popup').removeClass('is-active');
		$('body').removeClass('is-hidden');
	});

	//Click on document
	$(document).click(function(e) {
		var allDocExeptPopupAndCart = !$(e.target).closest('.js-popup').length && 
									  !$(e.target).closest('.js-cart').length;
	
	
		if (allDocExeptPopupAndCart) {
			$('.js-popup').add('.js-overlay')
						  .removeClass('is-active');
			$('body').removeClass('is-hidden');
		}
	});
});

