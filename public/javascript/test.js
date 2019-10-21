alert("Hello World");

var iLikeMeat = true

if (iLikeMeat) {

	document.write("Tu aimes la viande");
}

else {
	document.write("Tu n'aimes pas la viande");
}



var myAge = 8

if (myAge > 30) {

	document.write("Tu as plus de 30 ans");

} else if (myAge > 20 ) {

	document.write("Tu as plus de 20 ans");

} else if (myAge > 10) {

	document.write("Tu as plus de 10 ans");

} else {

	document.write("Tu as moins de 10 ans");

}


var myNewAge = 40

if (myNewAge >= 18 && myNewAge <= 30) {

	document.write("Tu es le bienvenue");

} else {

	document.write("Tu n'est pas le bienvenue");

}

var AgeV2 = 30

if (AgeV2 === 30 || AgeV2 === 40 || AgeV2 === 50) {

	document.write("alors tu es le bienvenue");

} else {

	document.write("Alors tu n'es pas le bienvenue");

}


var age = 5

while (age < 10) {

	console.log("Tu as moins de 10 ans");
	age++;

}

document.write("Tu as maintenant plus de 10 ans");

// The for loop is the same of while but un a simplier way of writing it

for (age = 0; age < 10; age++) {

	console.log("Tu as moins de 10 ans");

}

document.write("Tu as maintenant plus de 10ans, test de la boucle for");


for (i = 0; i < 10; i++) {

	if (i === 3 || i === 5) {

		continue;

	}

	console.log(i)

	if (i === 7) {

		break;

	}

}

console.log("J'ai break la boucle au numéro 7");


// On test les fonctions maintenant

function getAverage(a, b, c, d, e, f) {

	var average = (a + b + c + d + e + f) / 6; // average is a local variable cause it can't be used again wherever the code
	console.log(average);

}

var myResult = getAverage(7,8,9,10,11,12); // myResult is a global variable cause it can be used again and again wherever the code
console.log("La moyenne est de " + myResult);






console.log(Math.PI);
document.write(Math.PI); // document is an object, write is a method of document. Math is an object, PI is a method of Math
console.log(Math.round(7.7));
console.log(Math.round(7.4)); // console is an object, log is a method of the console object.
console.log(Math.floor(7.7));





var a = 7;
var b = 6;

if (isNaN(a)) {

	console.log("coucou c'est moi");

} else {

	console.log("coucou c'est toi");

}



var myString = 'C\'est une "sacré"" string';
console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());




// Create an object

var myArray = new Array();
myArray [0] = 8;
myArray [1] = "hello";



var myCar = new Object();
myCar.maxspeed = 50;
myCar.driver = "Romain";
myCar.drive = function(){console.log("now driving")};

myCar.drive();
console.log(myCar.driver);

var myCar2 = {
	maxSpeed : 80,
	driver : "Nick",
	drive : function(speed, time) {
		console.log(speed * time);
	}
}

console.log(myCar2.maxspeed);
myCar2.drive(50, 3);


// "THIS" Keyword : Il sert à appeler la variable au dessus

var myCar4 = {
	maxSpeed : 90,
	driver : "Adrien",
	drive : function(speed, time) {
		console.log(speed * time);
	},
	logDriver : function () {
		console.log("driver name is " + this.driver);
		
	}
}


myCar4.logDriver();


// Constructor function

var yoyo = function(maxSpeed, driver){
	this.maxSpeed = maxSpeed;
	this.driver = driver;
	this.drive = function(speed, time) {
		console.log(speed * time);
	};
	this.logDriver = function () {
		console.log("driver name is " + this.driver);
		
	};
}

var myTruck = new yoyo(70, "Ninja Man");
var myTruck2 = new yoyo(70, "Romain");
var myTruck3 = new yoyo(70, "Camille");
var myTruck4 = new yoyo(70, "Charline");

myTruck.drive(30,5);
myTruck3.logDriver();


var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1450, 11, 29, 10, 30, 10);
var myFutureDate = new Date(20500, 9, 15, 10, 30, 10);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1985, 0, 24, 14, 39, 58);
var birthday2 = new Date(1985, 0, 24, 14, 39, 58);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {

	console.log("birthdays are equals");

} else {

	console.log("birthday are not equals");

}






