(function( $ ) {

// Document Ready
$(document).ready(function() {



    	// do stuff on scroll	
	$(window).on("scroll",function(e){
		// Fade color on scroll
		//-------------------------------//
		changeAlphaBG();
	});

	// Fade color on scroll
	// Counts up from 0 -> 100
	//-------------------------------//
	function changeAlphaBG() {
		
		//variable creation
		var targeted 		= $('#content div:nth-child(2)'); 	//targeted element to finish animation
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


	// Fade color on scroll
	// Counts down from 1 -> 0
	//-------------------------------//
	function changeAlphaBGDown() {
		
		//variable creation
		var finshedTarget 	= $('#content'); 		//targeted element to finish animation
		var animatedElm		= $('#cover .textwrapper'); 	//overlay element which is doing the animation
		var targetOpacity 	= 0; 				//Set max opacity value you want to use
		
		//gets distance from top of window for selected element
		var scrollPos = $(this).scrollTop();
		elementOffset = finshedTarget.offset().top;
			
		//gets the final position so we can do some conditional logic
		var percentage = (1 - scrollPos/elementOffset).toFixed(2);
				
		//conditional for target opacity
		//checks users current place in document and creates a % distance away from targeted element		
		percentage >= targetOpacity ? targetOpacity = percentage : targetOpacity;

		//changes opacity based off of conditional
		animatedElm.css({ 'opacity' : targetOpacity });
	};




});


})( jQuery );
