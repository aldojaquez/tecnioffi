// JavaScript Document




//tooltip



$(document).ready(function() {

	$('a[rel=tooltip]').mouseover(function(e) {
		
		var tip = $(this).attr('title');	
		
		$(this).attr('title','');
		
		$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');		
				
		$('#tooltip').fadeIn('500');
		$('#tooltip').fadeTo('10',0.9);
		
	}).mousemove(function(e) {
	
		$('#tooltip').css('top', e.pageY  -10 );
		$('#tooltip').css('left', e.pageX + 10 );
		
	}).mouseout(function() {
	
		$(this).attr('title',$('.tipBody').html());
	
		$(this).children('div#tooltip').remove();
		
	});

});
