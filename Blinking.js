var b = true;
var speed = 250;
setInterval(() =>  {
	if (b) {
		document.getElementById("blink").style.opacity = 0;
		b = false;
			
	}
	else {
		document.getElementById("blink").style.opacity = 1;
		b = true;
		
	}
}, speed);