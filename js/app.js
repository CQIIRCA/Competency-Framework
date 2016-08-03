$(function () {

	$('.wqd2-wrapper').hover (function() {
		

		if ($('.trigger').hasClass('active')) {

		} 

		else {

			$('.trigger').fadeIn();
		$('.trigger').addClass('animated bounceIn');

		}

	}, function() {
		
		if ($('.trigger').hasClass('active')) {

		} 

		else {

			$('.trigger').fadeOut();
			$('.trigger').removeClass('animated bounceIn');

		}

	});
	

	$(".assurance-box, .content-box, .governance-box, .improvement-box, .leadership-box").click(function (event) {
	    // show delete dialog for $(this).closest(".server")
	    event.stopPropagation();
	});

	$(".popup-box, .close-popup-box").click(function (event) {
	    // show delete dialog for $(this).closest(".server")
	    $('.popup-box').fadeOut();
	    $('.cf-page').removeClass('lightbox-on');
	    console.log($(this));
	});

	$( ".trigger-context" ).click(function() {
		$('.context-box').fadeIn();
		$('.cf-page').addClass('lightbox-on');
	});

	$( ".trigger-assurance" ).click(function() {
		$('.assurance-box').fadeIn();
		$('.cf-page').addClass('lightbox-on');
	});

	$( ".trigger-governance" ).click(function() {
		$('.governance-box').fadeIn();
		$('.cf-page').addClass('lightbox-on');
	});

	$( ".trigger-improvement" ).click(function() {
		$('.improvement-box').fadeIn();
		$('.cf-page').addClass('lightbox-on');
	});

	$( ".trigger-leadership" ).click(function() {
		$('.leadership-box').fadeIn();
		$('.cf-page').addClass('lightbox-on');
	});


});