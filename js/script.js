/*When being graded, I am aiming for the "exceeds expectations" grade.
In the even that my project does not meet the requirements for exceeds expectations
I would like to attempt to meet the criteria again, rather than settle for
a "meets expectations" grade.
*/

/*
The array of objects "quotes" is created.  It contains 7 quotes total.  The first
quote lacks a citation, and the final quote lacks a year property.  For the sake of
the project's exctra credit, I added a "tag" property to all Objects,
however, I removed the tag property from one of the objects in the array(the 6th quote),
so that the final conditional statement in the print function has to check for the
existence of the property.
*/
var quotes = [
  {quote: "I do parkour.", source: "Jacopo Greenslade", year: "2012", tag: "Friend"},

  {quote: "That's a lotta fish.", source: "Mathew Broderick", citation: "Godzilla", year: "1998", tag: "Movie"},

  {quote: "Part time...", source: "Harison Ford",
  citation: "Indiana Jones and the Kingdom of the Crystal Skull", year: "2008", tag: "Movie"},

  {quote: "Star Wars The Phantom Menace was the most dissapointing thing since my son.",
  source: "Harry S. Plinkett", citation: "Red Letter Media", year: "2012", tag: "Youtube"},

  {quote: "Now this is podracing!", source: "Anakin Skywalker",
  citation: "Star Wars Episode I, The Phantom Menace", year: "1999", tag: "Movie"},

  {quote: "Star Wars is really about a top half Darth Maul robot," +
  " and a bottom half Darth Maul robot fighting each other with 20 lightsabers," +
  " while Obi-Wan is stuck in the middle.",
  source: "Rich Evans", citation: "The Nerd Crew", year: "2017"},

  {quote: "I'm the baby!  Gotta love me!", source: "Baby Sinclair", citation: "Dinosaurs", tag: "TV Show"},
];


/*
Get Random Quote Function is created.  The variable "randomNumber" stores a value
between 0 and 6, which corresponds to the 7 indeces in the array above.
The function returns one of the 7 above array items (an object).
*/
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
};


/*
The printQuote function is created.  This function calls the getRandomQuote
function above, and the object properties from the randomly selected array are
added to a string called "html".  In the case that a "citation" or "year" property
are contained in the above array, those are added to, or omitted from
the html string, using conditional statements.  The text is fromatted for HTML
and returns the html value created.

For Exceeds Expectations Credit, I have added another property to the Array of
Objects above, titled "tag".  This is formatted to display following the year
property, seperated by a comma and a space.
*/
function printQuote() {
  var randomQuote = getRandomQuote();
  var html = '';
  html += '<p class="quote">' +  randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  };
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  };
  if (randomQuote.tag) {
    html+= '<span class="tag">, ' + randomQuote.tag + ' </span>';

  };
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  return html;
};
printQuote();

//This function provides a random background color for the Exceeds Expectations Reqs.
//This is done by generating a random red, blue, and green value, combining them,
//and updating the background color, to the element generated.
function randomRGB() {
    var x = Math.floor(Math.random() *256);
    var y = Math.floor(Math.random() *256);
    var z = Math.floor(Math.random() *256);
    var background = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background= background;
    document.getElementById("loadQuote").onclick= background;
};
randomRGB();

//This code sets an interval, or a time at which the quote and background color change
setInterval(printQuote, 5000);
setInterval(randomRGB, 5000);
//This code is provided with the project materials.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//I tweaked the above code to get the background color to change on click, rather than
// just when the page was refreshed.
document.getElementById('loadQuote').addEventListener("click", randomRGB, false);
