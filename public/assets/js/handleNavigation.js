import ssr from "./ssr.js";

/**
 * Handles page navigation when a link is clicked.
 * @param {MouseEvent} e Mouse click event.
 */
function handleNavigation(e) {
  const linkUrl = new URL(e.currentTarget.href, window.location.origin);
  if (linkUrl.origin !== window.location.origin) {
    return;
  }

  const isImage = /\.(gif|jpe?g|png|webp)$/i.test(e.currentTarget.href);
  if (isImage) {
    return;
  }

  e.preventDefault();

  if (window.location.href === e.currentTarget.href) {
    return;
  }

  window.history.pushState(null, null, e.currentTarget.pathname);
  ssr(e.currentTarget.pathname);
}

export default handleNavigation;
