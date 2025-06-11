/**
 * Transition the main page content in.
 */
function pageTransitionIn() {
  setTimeout(() => {
    document.querySelector("main > div").classList.add("page-transition-in");
  }, 200);
}

export { pageTransitionIn };
