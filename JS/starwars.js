/*
 * This function continually checks if the DOM is ready
 * before calling a function to ask the user for their name.
 *
 * Author: Josh Hanson
 * Modifier: Piper Lincoln
 */
function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/*
 * This function displays a welcome message with the name of the user.
 *
 * Author: Josh Hanson
 * Modifier: Piper Lincoln
 */
domReady(function() {
  var firstMovie = document.getElementById('first-movie');
  var secondMovie = document.getElementById('second-movie');
  var thirdMovie = document.getElementById('third-movie');
  var fourthMovie = document.getElementById('fourth-movie');
  var fifthMovie = document.getElementById('fifth-movie');
  var sixthMovie = document.getElementById('sixth-movie');
  var seventhMovie = document.getElementById('seventh-movie');
  var eighthMovie = document.getElementById('eighth-movie');
  var ninthMovie = document.getElementById('ninth-movie');
  var tenthMovie = document.getElementById('tenth-movie');
  var eleventhMovie = document.getElementById('eleventh-movie');

  createMouseEvents(firstMovie, 'first-popup');
  createMouseEvents(secondMovie, 'second-popup');
  createMouseEvents(thirdMovie, 'third-popup');
  createMouseEvents(fourthMovie, 'fourth-popup');
  createMouseEvents(fifthMovie, 'fifth-popup');
  createMouseEvents(sixthMovie, 'sixth-popup');
  createMouseEvents(seventhMovie, 'seventh-popup');
  createMouseEvents(eighthMovie, 'eighth-popup');
  createMouseEvents(ninthMovie, 'ninth-popup');
  createMouseEvents(tenthMovie, 'tenth-popup');
  createMouseEvents(eleventhMovie, 'eleventh-popup');
});

function createMouseEvents(movie, popup) {
  movie.onmouseover = function() {
    document.getElementById(popup).style.display = 'block';
  }
  movie.onmouseout = function() {
    document.getElementById(popup).style.display = 'none';
  }
}
