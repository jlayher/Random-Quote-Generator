/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
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



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
};
console.log(getRandomQuote());


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote() {
  var randomQuote = getRandomQuote();
  var html = '';
  html += '<p class="quote">' +  randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  if (quotes.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  };
  if (quotes.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  };

  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  return html;
};

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
