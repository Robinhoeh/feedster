import $ from 'jquery';//importing jQuery - npm install jQuery and boilerplate

$(document).ready(() => {//wrap code in doc ready
	$('.menu').on('mouseenter', () => {//when mouse hovers over .menu
		$('.nav-menu').show();//display .nav-menu
	})
	$('.nav-menu').on('mouseleave', () => {//when mouse leaves
		$('.nav-menu').hide();//hide the .nav-menu
	});
	
	$('.btn').on('mouseenter', (event) => {//when mouse hovers btn
		$(event.currentTarget).addClass('btn-hover');//ONLY element being hovered add btn-hover
	}).on('mouseleave', (event) => {//mouse leaves
		$(event.currentTarget).removeClass('btn-hover');//only on hovered element remove class
	})

	$('.postText').on('keyup', (event) => {//when a key is pushed down then up
		$(event.currentTarget).focus();//.focus expects an event
		const post = $(event.currentTarget).val();//GETS users input from .postText
		let remaining = 140 - post.length;// remaining variable SETS and holds value
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
