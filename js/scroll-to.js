$(document).ready(function (){

	$("a.scrollToElement").click(function(event) {
  		event.preventDefault();
		var href = $(this).attr('href');
	
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, 1000);

	});

});