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
		//targeted element to finish animation
		var targeted = $('#content div:nth-child(3)');
		
		//overlay element which is doing the animation
		var overlay = $('#cover div.overlay');
		
		//gets current scroll position in website
		var scrollPos 	= $(document).scrollTop();	
		
		//gets distance from top of window for selected element
		var scrollTop     = $(window).scrollTop(),
			elementOffset = targeted.offset().top;
			
		//default/filler value for the opacity (can't be less than 1)
		var targetOpacity = 1;
		
		//conditional for target opacity
		//checks users current place in document and creates a % distance away from targeted element
		scrollPos <= elementOffset ? targetOpacity = (scrollPos/elementOffset).toFixed(2) : targetOpacity;
		
		//changes opacity based off of conditional
		var rgbaCol = 'rgba(0, 0, 0, ' + targetOpacity + ')';
		overlay.css('background-color', rgbaCol);
	};




});


})( jQuery );
