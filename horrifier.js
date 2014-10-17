//coffee is horrible
$(document).ready(function() {
	console.log($(window).height()/2-$("#cuppa").height()/2);
	$("#cuppa").css({
		top: $(window).height()/2-$("#cuppa").height()/2,
		left: $(window).width()/2-$("#cuppa").width()/2
	}).delay(700).fadeIn(300);

})