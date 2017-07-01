var holdMyBeer = document.getElementById("holdMyBeer");

var drink = "beer";

var lyrics = "";

var bottles = "99";

for (var i=bottles; i > 0; i--){

	lyrics = i + " bottles of " + drink + " on the wall, " + i + " bottles of " + drink + ", take one down, pass it around, " + (i - 1) + " bottles of " + drink + " on the wall!"

	holdMyBeer.innerHTML += lyrics + "<br/><br/>";		
}