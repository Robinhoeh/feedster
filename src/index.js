import $ from 'jquery';

$(document).ready(() => {
	$('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  })
  $('.nav-menu').on('mouseleave', () => {
  	$('.nav-menu').hide();
	});
  
  $('.btn').on('mouseenter', () => {
    $('.btn').addClass('btn-hover');
  });
  
}); 
