/* Top Navbar responsive */
function expandNavbar() {
	var x = document.getElementById("top-navbar");
	// Add class responsive when "responsive" is not in class
	if(x.className === "topnav")
		x.className += " responsive";
	else
		x.className = "topnav";
}

$(document).ready(function(){
	// Init Wow.js
	new WOW().init();

	$(window).scroll(function() {
		// Show scroll-top button if window is scrolled down.
		if ($(this).scrollTop() > 100) {
			$('#scroll-top').fadeIn();
		}
		else {
			$('#scroll-top').fadeOut();
		}
	});

	// Animated scroll to top.
	$('#scroll-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});

	// Show coursework details.
	$('.details').click(function() {
		if ($('.course-desc').is(":hidden")) {
			$('.course-desc').show("slow");
			$('.details').html("less <i class='fa fa-chevron-up'></i>");
		}
		else {
			$('.course-desc').slideUp();
			$('.details').html("details <i class='fa fa-chevron-down'></i>");
		}
	});
});