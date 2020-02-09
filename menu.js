function change() {
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("options").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.menu') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3')) {
		document.getElementById("menu").classList.remove("change");
		document.getElementById("options").classList.remove("show");
	  
	}
}
