// This file holds all functions as well as variables used for calculations

var quote; // Keeps track of the current quote message

var source; // Keeps track of the character who said the quote

var citation; // Keeps track of the origin of the quote

var year; // Keeps track of the year that the quote was said

var mediaType; // Keeps track of the type of media the quote is from

var actor; // Keeps track of the actor who said the quote

var outputToHTML; // Keeps track of the string to be outputted to html

// Background colors that are randomly selected
var backgroundColors = ["red", "orange", "black", "green", "blue", "purple"];

// Sets variables used for outputting to HTML based on randomQuote object
function setQuoteValues(randomQuote) {

  // Sets values of variables based on the current quote
  quote = randomQuote.quote;
  source = randomQuote.source;
  citation = randomQuote.citation;
  year = randomQuote.year;
  mediaType = randomQuote.mediaType;
  actor = randomQuote.actor;
}

// Generates a random number used as an index for the various arrays
function generateRandomNumber(upperLimit) {
  return Math.floor( Math.random() * upperLimit);
}

// Gets a random color from the backgroundColors array
function getRandomColor() {
  var generatedIndex = generateRandomNumber(backgroundColors.length);
  var randomColor = backgroundColors[generatedIndex];
  return randomColor;
}

// Gets a random quote from the listOfQuotes array
function getRandomQuote() {
  var generatedIndex = generateRandomNumber(quotes.length)
  var randomQuote = quotes[generatedIndex];
  return randomQuote;
}

// Generates a string of HTML code based on generated information
function generateHTML() {

  // This creates an formatted string based on current variables
  var generatedHTML = '<p class="quote">' + quote + "</p>" + '<p class="source">' +
                      source + ' (' + actor + ')' + '<span class="citation">' +
                      citation + '(' + mediaType + ')' + '</span>' +
                      '<span class="year">' + year + '</span>';
  return generatedHTML;
}


// Formats and styles information to display the quote in an HTML file
function printQuote() {

  // Gets a random quote and a random background color
  var randomQuote = getRandomQuote();
  var randomColor = getRandomColor();

  // Resets variables to the values of the selected quote and generates a string of HTML
  setQuoteValues(randomQuote);
  outputToHTML = generateHTML();

  // Edits information for a new output
  document.getElementById('quote-box').innerHTML = outputToHTML;
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
  document.getElementById('body').style.backgroundColor = randomColor;
}

// This function first calls the printQuote function (To ensure that a quote
// is displayed at the start of the webpage) and then calls the function again
// after 20,000 milliseconds (20 seconds) have passed.
// Information on setInterval function provided by the Mozilla Developer Network
function timerDelay() {
  printQuote();
  window.setInterval(printQuote, 20000);
}

// Given by treehouse template (told not to touch this!)
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
