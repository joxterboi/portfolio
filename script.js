var backgroundNumber = 0;
function backgroundCounter() {
	setTimeout(function() {			
		if (backgroundNumber < 5) {
			backgroundNumber =  backgroundNumber + 1;
			console.log(backgroundNumber)
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


