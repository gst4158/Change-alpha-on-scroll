(function( $ ) {

// Document Ready
$(document).ready(function() {



    // make position sensitive to size and document's width		
	$(window).on("scroll",function(e){
		// Fade color on scroll
		//-------------------------------//
		changeAlphaBG();
	});

	// Fade color on scroll
	//-------------------------------//
	function changeAlphaBG() {
		
		//variable creation
		var targeted 		= $('#content div:nth-child(1)'); 	//targeted element to finish animation
		var overlayWrap		= $('#cover div.overlay'); 		//overlay element which is doing the animation
		var targetOpacity 	= .75; 					//Set max opacity value you want to use

		//gets current scroll position in website
		var scrollPos 	= $(document).scrollTop();	
		
		//gets distance from top of window for selected element
		var scrollTop     = $(window).scrollTop(),
			elementOffset = targeted.offset().top;
			
		//gets the final position so we can do some conditional logic
		var percentage = (scrollPos/elementOffset).toFixed(2);
				
		//conditional for target opacity
		//checks users current place in document and creates a % distance away from targeted element		
		percentage <= targetOpacity ? targetOpacity = percentage : targetOpacity;

		//changes opacity based off of conditional
		var opacity = targetOpacity;
		overlayWrap.css('opacity', opacity);
	};





});


})( jQuery );
