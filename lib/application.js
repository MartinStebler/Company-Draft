
dom = "inital";

$(document).ready(function(){

  bindEvents();
  dom = $('#sec-wrapper').html();

  
});

function bindEvents(){
	$('.maintitle').on('hover', function() {
		$(this).parents().first().toggleClass('main-sec');
		$(this).parents().first().toggleClass('main-sec-active');
	});
	
	$('.inactive').on('hover', function() {
		$(this).toggleClass('inactive');
		$(this).toggleClass('active');
	});
	
	$('.show').on('click', function() {
		$(this).next().fadeToggle("slow");
	});
	
		
	$('#top-left').on('click', function() {
		$('#top-left').hide();
		$('#top-right').hide();
		$('#bottom-right').hide();
		$('#bottom-left').hide();
		$('#bottom-left').parents().first().removeClass('left');
		$(this).parents().first().next().fadeOut("slow");
		$(this).parents().first().next().next().fadeOut("slow");
		$(this).parents().first().next().next().next().fadeOut("slow");
		$(this).parents().first().animate({
			marginLeft: "0in",
		}, 500 );
		$(this).parents().first().animate({
			width: "95%",
		}, 500 );
		var elem = $(this);
		$(this).parents().first().animate({
			height: "170%",
		}, 500, function(){
			elem.next().show();
		});
		
		backToMainHandler();
		
  });
  
  $('#top-right').on('click', function() {
		$('#top-left').hide();
		$('#top-right').hide();
		$('#bottom-right').hide();
		$('#bottom-left').hide();
		$('#bottom-left').parents().first().removeClass('left');
		$(this).parents().first().prev().fadeOut("slow");
		$(this).parents().first().next().fadeOut("slow");
		$(this).parents().first().next().next().fadeOut("slow");
		$(this).parents().first().animate({
			marginLeft: "0in",
		}, 500 );
		$(this).parents().first().animate({
			width: "95%",
		}, 500 );
		var elem = $(this);
		$(this).parents().first().animate({
			height: "150%",
		}, 500, function(){
			elem.next().show();
		});
		
		backToMainHandler();
		
  });
  
  $('#bottom-left').on('click', function() {
		$('#top-left').hide();
		$('#top-right').hide();
		$('#bottom-right').hide();
		$('#bottom-left').hide();
		$('#bottom-left').parents().first().removeClass('left');
		$(this).parents().first().prev().fadeOut("slow");
		$(this).parents().first().prev().prev().fadeOut("slow");
		$(this).parents().first().next().fadeOut("slow");
		$(this).parents().first().animate({
			marginLeft: "0in",
		}, 500 );
		$(this).parents().first().animate({
			width: "95%",
		}, 500 );
		var elem = $(this);
		$(this).parents().first().animate({
			height: "130%",
		}, 500, function(){
			elem.next().show();
		});
		
		backToMainHandler();
		
  });
  
    $('#bottom-right').on('click', function() {
		$('#top-left').hide();
		$('#top-right').hide();
		$('#bottom-right').hide();
		$('#bottom-left').hide();
		$('#bottom-left').parents().first().removeClass('left');
		$(this).parents().first().prev().fadeOut("slow");
		$(this).parents().first().prev().prev().fadeOut("slow");
		$(this).parents().first().prev().prev().prev().fadeOut("slow");
		$(this).parents().first().animate({
			marginLeft: "0in",
		}, 500 );
		$(this).parents().first().animate({
			width: "95%",
		}, 500 );
		var elem = $(this);
		$(this).parents().first().animate({
			height: "130%",
		}, 500, function(){
			elem.next().show();
		});
		
		backToMainHandler();
		
  });
}

function backToMainHandler(){
	$(document).on('click', function(e) {
		var $target = $(e.target);
		if($target.is("body")){
			$('#sec-wrapper').html(dom).fadeIn("slow");
			bindEvents();
		}
	});
}


