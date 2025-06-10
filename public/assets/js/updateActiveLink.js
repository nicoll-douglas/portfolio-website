/**
 * Updates the active link in the header nav according to the current pathname.
 */
function updateActiveLink() {
  document.querySelectorAll("header a").forEach((link) => {
    link.classList.remove("nav-active");
    if (window.location.pathname === link.pathname) {
      link.classList.add("nav-active");
    }
  });
}

export default updateActiveLink;
