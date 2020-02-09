var can = document.getElementById("canvas");
var ctx = can.getContext("2d");
can.height = window.innerHeight*1.8;
can.width = window.innerWidth*1.8;
var font_size = 12;
var columns = can.width / font_size;
drops_x = [];
for (let x = 0; x < Math.round(columns); x++) {
	drops_x[x] = 0;
}
let y = 0
let y1 = 0;
function draw() {
	ctx.fillStyle = "rgba(13, 2, 8, 0.04)";
	ctx.fillRect(0,0, can.width, can.height);
	
	ctx.font = font_size + "px arial";
	ctx.fillStyle = "green";
	for (let i = 0; i < drops_x.length; i++) {
		ctx.fillText(Math.round(Math.random()), font_size*i, drops_x[i]*font_size)
		drops_x[i]++;
		if (drops_x[i]*font_size > can.height && Math.random() > 0.9) {
			drops_x[i] = 0;
		}
	}
	  
}
setInterval(draw, 40);

