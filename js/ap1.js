document.addEventListener("DOMContentLoaded", function(){

var myPix = new Array("_images/black_chair.png", "_images/orange.png", "_images/red_chair.png");
var thisPic = 0;

document.querySelector("#prev").onclick = NEXT;
document.querySelector("#next").onclick = PREV;

function PREV(){
	if(thisPic == 0) {
		thisPic = myPix.length;
	}
	thisPic--;
	document.querySelector("#foto").src = myPix[thisPic];
	return false;
	}

function NEXT() {
	thisPic++;
	if(thisPic == myPix.length) {
		thisPic = 0;
	}
	document.querySelector("#foto").src = myPix[thisPic];
	return false;
}
});