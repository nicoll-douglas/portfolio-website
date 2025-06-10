import { getPage } from "./pages.js";
import hydrateNavigation from "./hydrateNavigation.js";
import updateActiveLink from "./updateActiveLink.js";
import errorPage from "./errorPage.js";

/**
 * Function to server-side render page content.
 * @param {string} key The key of the page.
 */
async function ssr(key) {
  const main = document.querySelector("main");
  const { title, ssr, id } = getPage(key);

  document.title = title;
  main.id = id;

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
    main.id = "error";
    main.firstElementChild.innerHTML = errorPage;
  }

  hydrateNavigation(main.firstElementChild);
  updateActiveLink();
}

export default ssr;
