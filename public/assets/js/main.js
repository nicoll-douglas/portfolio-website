import updateActiveLink from "./updateActiveLink.js";
import hydrateNavigation from "./hydrateNavigation.js";
import handlePopState from "./handlePopState.js";
import handleScroll from "./handleScroll.js";
import { pageTransitionIn } from "./transitions.js";

window.addEventListener("popstate", handlePopState);
window.addEventListener("scroll", handleScroll);
updateActiveLink();
hydrateNavigation();
pageTransitionIn();
