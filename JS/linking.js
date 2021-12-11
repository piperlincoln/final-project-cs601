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
 * This function links to the relevant background section when a
 * user clicks on the corresponding row in the table.
 *
 * Author: Piper Lincoln
 */
domReady(function() {
  // The first row should link to the Minnesota section.
  const firstRow = document.getElementById(`row-1`);
  firstRow.addEventListener("click", () => {
    window.location.href = `#section-1`;
  });
  // The next five rows should link to the five sections.
  for (let i = 2; i < 7; i++) {
    const row = document.getElementById(`row-${i}`);
    row.addEventListener("click", () => {
      window.location.href = `#section-${i-1}`;
    });
  }
});
