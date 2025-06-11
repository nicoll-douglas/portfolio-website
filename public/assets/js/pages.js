/**
 * Data about the site's pages.
 */
const pages = {
  "/": {
    ssr: "/ssr/home",
    title: "Nicoll Douglas",
    id: "home",
  },
  "/projects": {
    ssr: "/ssr/projects",
    title: "Projects | Nicoll Douglas",
    id: "projects",
  },
  "/about": {
    ssr: "/ssr/about",
    title: "About | Nicoll Douglas",
    id: "about",
  },
  "/contact": {
    ssr: "/ssr/contact",
    title: "Contact | Nicoll Douglas",
    id: "contact",
  },
};

/**
 * Resolve a page from the pages object or falls back to "not found".
 * @param {string} key The key of the page.
 * @returns {{ssr: string; title: string; id: string;}} The page.
 */
function getPage(key) {
  if (pages.hasOwnProperty(key)) {
    return pages[key];
  }

  return {
    ssr: "/ssr/not-found",
    title: "404 Not Found",
    id: "not-found",
  };
}

export { getPage };
