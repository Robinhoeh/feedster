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
  
}); 
