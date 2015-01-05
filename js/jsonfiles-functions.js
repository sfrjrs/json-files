// JavaScript Document

jQuery(document).ready(function($) {
  $('a[rel*=facebox]').facebox({
	loading_image : 'images/facebox/loading.gif',
	close_image   : 'images/facebox/closelabel.gif'
  }) 
})

$(function() {
	$('#gallery a').lightBox({fixedNavigation:true});
});