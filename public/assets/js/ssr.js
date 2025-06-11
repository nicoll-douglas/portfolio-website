import { getPage } from "./pages.js";
import hydrateNavigation from "./hydrateNavigation.js";
import updateActiveLink from "./updateActiveLink.js";
import errorPage from "./errorPage.js";
import { pageTransitionIn } from "./transitions.js";

/**
 * Function to server-side render page content.
 * @param {string} key The key of the page.
 */
async function ssr(key) {
  const main = document.querySelector("main");
  const { title, ssr } = getPage(key);

  document.title = title;

  main.firstElementChild.remove();
  main.appendChild(document.createElement("div"));

  try {
    const response = await fetch(ssr);
    const html = await response.text();
    if (!response.ok) {
      throw new Error("SSR request failed.");
    }

    main.firstElementChild.innerHTML = html;
  } catch (e) {
    console.error(e);
    document.title = "Oops!";
    main.firstElementChild.innerHTML = errorPage;
  }

  pageTransitionIn();
  hydrateNavigation(main.firstElementChild);
  updateActiveLink();
}

export default ssr;
