import ssr from "./ssr.js";

/**
 * Handles page navigation when a link is clicked.
 * @param {MouseEvent} e Mouse click event.
 */
function handleNavigation(e) {
  const linkUrl = new URL(e.target.href, window.location.origin);
  if (linkUrl.origin !== window.location.origin) {
    return;
  }

  e.preventDefault();

  if (window.location.href === e.target.href) {
    return;
  }

  window.history.pushState(null, null, e.target.pathname);
  ssr(e.target.pathname);
}

export default handleNavigation;
