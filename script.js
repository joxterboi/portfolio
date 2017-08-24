function backgroundImage2() {	
	document.body.style.backgroundImage = "url(bilder/home/2.jpg)";
	window.setTimeout(backgroundImage3, 6000);
}
function backgroundImage3() {	
	document.body.style.backgroundImage = "url(bilder/home/3.jpg)";
	setTimeout(backgroundImage4, 6000);
}
function backgroundImage4() {	
	document.body.style.backgroundImage = "url(bilder/home/4.jpg)";
	setTimeout(backgroundImage5, 6000);
}
function backgroundImage5() {	
	document.body.style.backgroundImage = "url(bilder/home/5.jpg)";
	setTimeout(backgroundImage1, 6000);
}
function backgroundImage1() {	
	document.body.style.backgroundImage = "url(bilder/home/4.jpg)";
	setTimeout(backgroundImage2, 6000);
}