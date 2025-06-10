/**
 * Event handler to handle window scrolling.
 * @param {MouseEvent} e Mouse scroll event.
 */
function handleScroll(e) {
  const isScrolled =
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;

  document
    .querySelector("header")
    .classList[isScrolled ? "add" : "remove"]("header-scroll");
}

export default handleScroll;
