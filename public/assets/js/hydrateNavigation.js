import handleNavigation from "./handleNavigation.js";

/**
 * Registers the navigation handler for link elements.
 */
function hydrateNavigation(root = document) {
  root.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", handleNavigation);
  });
}

export default hydrateNavigation;
