function firstTest() {
	var test = document.getElementById("testJs");
	test.style.WebkitTransition = "all 2s";
	test.style.backgroundColor = "red";
}

function fourthTest () {
	var hello = document.getElementById("testJs");
	hello.style.backgroundColor = "white";
}

function secondTest () {
	var hello = document.getElementById("content");
	hello.style.color = "red";
}

function thirdTest () {
	var hello = document.getElementById("content");
	hello.style.color = "black";
}

function shadowpopup () {
	var hello = document.getElementById("popup");
	hello.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";
}

function shadowpopupback () {
	var hello = document.getElementById("popup");
	hello.style.boxShadow = "none";
}

function shadowpopup2 () {
	var hello = document.getElementById("testpopup");
	hello.style.WebkitTransition = "all 2s";
	hello.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";
}

function shadowpopupback2 () {
	var hello = document.getElementById("testpopup");
	hello.style.boxShadow = "none";
}

function zoom1 () {
	var hello = document.getElementById("zoomimg");
	hello.style.WebkitTransition = "all 2s";
	hello.style.transform = "scale(1.5)";
	
}

function zoomback1 () {
	var hello = document.getElementById("zoomimg");
	hello.style.transform = "scale(1)";
}