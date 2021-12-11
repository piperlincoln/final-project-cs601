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
 * This function creates popups when the user hovers over the Star Wars movie.
 *
 * Author: Piper Lincoln
 */
domReady(function() {
  // Define event listeners that will open the relevant popup on hover.
  createMouseEvents(document.getElementById('first-movie'), 'first-popup');
  createMouseEvents(document.getElementById('second-movie'), 'second-popup');
  createMouseEvents(document.getElementById('third-movie'), 'third-popup');
  createMouseEvents(document.getElementById('fourth-movie'), 'fourth-popup');
  createMouseEvents(document.getElementById('fifth-movie'), 'fifth-popup');
  createMouseEvents(document.getElementById('sixth-movie'), 'sixth-popup');
  createMouseEvents(document.getElementById('seventh-movie'), 'seventh-popup');
  createMouseEvents(document.getElementById('eighth-movie'), 'eighth-popup');
  createMouseEvents(document.getElementById('ninth-movie'), 'ninth-popup');
  createMouseEvents(document.getElementById('tenth-movie'), 'tenth-popup');
  createMouseEvents(document.getElementById('eleventh-movie'), 'eleventh-popup');
});

/*
 * This function opens popups with information about each Star Wars movie.
 *
 * Author: Piper Lincoln
 */
function createMouseEvents(movie, popup) {
  movie.onmouseover = function() {
    document.getElementById(popup).style.display = 'block';
  };
  movie.onmouseout = function() {
    document.getElementById(popup).style.display = 'none';
  };
}
