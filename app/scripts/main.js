$(document).ready(function(){
	$(".contactLink").click(function(){
		if ($("#contactForm").is(":hidden")){
			$("#contactForm").slideDown("slow");
		}
		else{
			$("#contactForm").slideUp("slow");
		}
	});
});
$(document).ready(function() {
	function filterPath(string) {
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}
	$('a[href*=#]').each(function() {
		if ( filterPath(location.pathname) == filterPath(this.pathname)
			&& location.hostname == this.hostname
			&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
		var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
		if ($target) {
			var targetOffset = $target.offset().top;
			$(this).click(function() {
				$('html, body').animate({scrollTop: targetOffset}, 1000, function() { document.body.style.height = ""; console.log("a"); });
				return false;
			});
		}
	}
});
});
var s = skrollr.init({smoothScrolling: true});
window.scrollReveal = new scrollReveal();
/*! Smooth Scroll - v1.4.5 - 2012-07-22
* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */