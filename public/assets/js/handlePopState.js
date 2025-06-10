import ssr from "./ssr.js";

/**
 * Server-side renders the page content for the "popstate" event.
 */
function handlePopState() {
  ssr(window.location.pathname);
}

export default handlePopState;
