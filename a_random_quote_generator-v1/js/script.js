/*
The array of objects "quotes" is created.  It contains 7 quotes total.  The first
quote lacks a citation, and the final quote lacks a year property.
*/
var quotes = [
  {quote: "I do parkour.", source: "Jacopo Greenslade", year: "2012"},

  {quote: "That's a lotta fish.", source: "Mathew Broderick", citation: "Godzilla", year: "1998"},

  {quote: "Part time...", source: "Harison Ford",
  citation: "Indiana Jones and the Kingdom of the Crystal Skull", year: "2008"},

  {quote: "Star Wars The Phantom Menace was the most dissapointing thing since my son.",
  source: "Harry S. Plinkett", citation: "Red Letter Media", year: "2012"},

  {quote: "Now this is podracing!", source: "Anakin Skywalker",
  citation: "Star Wars Episode I, The Phantom Menace", year: "1999"},

  {quote: "Star Wars is really about a top half Darth Maul robot," +
  " and a bottom half Darth Maul robot fighting each other with 20 lightsabers," +
  " while Obi-Wan is stuck in the middle",
  source: "Rich Evans", citation: "The Nerd Crew", year: "2017"},

  {quote: "I'm the baby!  Gotta love me!", source: "Baby Sinclair", citation: "Dinosaurs"},
];
console.log(quotes);

/*
Get Random Quote Function is created.  The variable "randomNumber" stores a value
between 0 and 6, which corresponds to the 7 indeces in the array above.
The function returns one of the 7 above array items (an object).
*/
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
};
console.log(getRandomQuote());

/*
The printQuote function is created.  This function calls the getRandomQuote
function above, and the object properties from the randomly selected array are
added to a string called "html".  In the case that a "citation" or "year" property
are contained in the above array, those are added to or omitted from
the html string, using conditional statements.  The text is fromatted for HTML
and returns the html value created.
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

  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  return html;
};
printQuote();

//This code is provided with the project materials.  
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
