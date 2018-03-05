// Changing background
var backgroundNumber = 0;
function backgroundCounter() {
	setTimeout(function() {			
		if (backgroundNumber < 5) {
			backgroundNumber =  backgroundNumber + 1;
		} else {
			backgroundNumber = 0;
		}
		backgroundChange();
	}, 7500);
}
function backgroundChange() {
	if (backgroundNumber > 0) {
		document.body.style.backgroundImage = "url(bilder/home/" + backgroundNumber +".jpg)";
		backgroundCounter();
	} else {
		backgroundCounter();
	}
}


//Photo menu hover blur
//1
function hoverGlass() {
	var blurDiv = document.getElementById("masterBlurer");
	blurDiv.className += " blurBackground";
	document.getElementById("seeMore").getElementsByTagName("p")[0].style.opacity = "1";
}

function hoverGlassRemove() {
	var blurDiv = document.getElementById("masterBlurer");
	blurDiv.className -= " blurBackground";
	document.getElementById("seeMore").getElementsByTagName("p")[0].style.opacity = "0";
}
//2
function hoverGlass2() {
	var blurDiv = document.getElementById("masterBlurer2");
	blurDiv.className += " blurBackground";
	document.getElementById("seeMore2").getElementsByTagName("p")[0].style.opacity = "1";
}

function hoverGlassRemove2() {
	var blurDiv = document.getElementById("masterBlurer2");
	blurDiv.className -= " blurBackground";
	document.getElementById("seeMore2").getElementsByTagName("p")[0].style.opacity = "0";
}
//3
function hoverGlass3() {
	var blurDiv = document.getElementById("masterBlurer3");
	blurDiv.className += " blurBackground";
	document.getElementById("seeMore3").getElementsByTagName("p")[0].style.opacity = "1";
}

function hoverGlassRemove3() {
	var blurDiv = document.getElementById("masterBlurer3");
	blurDiv.className -= " blurBackground";
	document.getElementById("seeMore3").getElementsByTagName("p")[0].style.opacity = "0";
}