// store the div - to apply css and make it all fancy 
var beer_holder = document.getElementById("beer_holder");

// Non-alcoholic to keep it PG
var drink = "O'Doul's";

var lyrics = "";

var cans = "99";

// Create a variable called 'i' and set it to the cans variable amount. 
// Check if i is greater than 0,
// if it is, than do what is between the curly brackets, the subtract 1 from cans
for(var i=cans; i > 0; i--){
   
    lyrics = i + " cans of " + drink + " on the wall, " + i + " cans of " + drink +
        " take one down, pour it down the sink, " + (i - 1) + " cans of O'Doul's on the wall."
    
    // take the paragraph tag and put the lyrics within it
    //  the <br/> tags make sure each lyric goes on a seperate line
    beer_holder.innerHTML += lyrics + "<br/><br/>";
    
}