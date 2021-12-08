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
  var username = sessionStorage.getItem('Username');
  let welcome = document.getElementById("username");
  if (username === 'null' || username === null) {
    username = askName();
    welcome.innerText = "Welcome to My Portfolio, " + username;
    username = sessionStorage.setItem('Username', username)
  } else {
    welcome.innerText = "Welcome to My Profile, " + username;
  }
});

/*
 * This function prompts the user for their name.
 *
 * Author: Josh Hanson
 * Modifier: Piper Lincoln
 */
function askName() {
    return prompt("Welcome to my Portfolio! Please tell me your name.");
}
