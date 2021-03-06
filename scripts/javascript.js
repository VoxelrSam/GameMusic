var currentPage = "home";   // Global variable declared for the nav function to keep track of current page
var lastPage = "home";

$(document).ready(function(){

	// removes javascript notice
	$('#javascriptNotice').css('display','none');
	
	setCss();

});

//sets css to accomodate for different resolutions and such
function setCss(){

	// margin left (used for horizontal alignment) is calculated based on width of the element
	$('#innerLoad').css('margin-left',"-" + $('#innerLoad').width() / 2 + "px");
	
	// checks to determine if the ratio of the window is greater than the background. if it is, the css height and width properties need to be switched. in short: keeps the background fullscreen and centered.
	setInterval(function(){
		if (window.innerHeight / window.innerWidth > $('#background').height() / $('#background').width()){
		
			$('#background, #backgroundOverlay').css({
				"width": "auto",
				"height": "105%"
			});
		} else {
			$('#background, #backgroundOverlay').css({
				"width": "105%",
				"height": "auto"
			});
		}
		
		$('#background, #backgroundOverlay').css("margin-left", "-" + ($('#background').width() / 2).toString() + "px");
		
		$('#HWContent').css("margin-top", ($('#cloudbuffer').height()/1.5 * -1) + "px");
		
		$('.spacer').css("height", window.innerHeight + "px");
	},1);
}

// Removes the loading screen when the website has loaded
function loaded(){

	// bounces screen out of view
	$('#load').addClass("animated bounceOutUp");
	
	// animates in the header and footer after the loading screen has finished bouncing out
	$('#load').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		
	});
	
}

function navigateTo(element){
	$('html, body').animate({
		scrollTop: $(element).offset().top - 60
	}, 1000);
}