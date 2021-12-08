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
  const row = document.getElementById(`row-1`);
  row.addEventListener("click", () => {
    window.location.href = `#section-1`;
  });
  for (let i = 2; i < 7; i++) {
    const row = document.getElementById(`row-${i}`);
    row.addEventListener("click", () => {
      window.location.href = `#section-${i-1}`;
    });
  }
});
