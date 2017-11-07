import $ from 'jquery';

$(document).ready(() => {
	$('.menu').on('mouseenter', () => {
		$('.nav-menu').show();
	})
	$('.nav-menu').on('mouseleave', () => {
		$('.nav-menu').hide();
	});
	
	$('.btn').on('mouseenter', (event) => {
		$(event.currentTarget).addClass('btn-hover');
	}).on('mouseleave', (event) => {
		$(event.currentTarget).removeClass('btn-hover');
	})

	$('.postText').on('keyup', (event) => {
		$(event.currentTarget).focus();
		const post = $(event.currentTarget).val();//GETS users input from .postText
		let remaining = 140 - post.length;
		$('.characters').html(remaining);//.html would work here too

		// if (post.length >= 140) {
		// 	$('.wordcount').css('color', 'red');
		// } else {
		// 	return false;
		// }

		if (remaining <= 0) {
			$('.wordcount').addClass('red');
		} else if (remaining > 0) {
			$('.wordcount').removeClass('red');
		}
	});
	
}); 
