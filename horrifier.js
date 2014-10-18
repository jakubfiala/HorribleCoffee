//coffee is horrible

var flasherOn = false;

$(document).ready(function() {

	//initialize cuppa
	$("#cuppa").css({
		top: $(window).height()/2-$("#cuppa").height()/2,
		left: $(window).width()/2-$("#cuppa").width()/2
	}).delay(700).fadeIn(300);

	//initialize footer
	$("footer").css({
		bottom: 5
	});

	//init webaudio
	var audioContext = webkitAudioContext ? new webkitAudioContext() : new AudioContext;

	console.log(audioContext.sampleRate);

	var flash = function(){
		setInterval(function(){
			if (!flasherOn) {
				$("#flasher").show();
				flasherOn = true;
			}
			else {
				$("#flasher").hide();
				flasherOn = false;
			}
		}, 50);
	}

	//$("body").keypress(flash);
	setTimeout(flash, 5000);

})
