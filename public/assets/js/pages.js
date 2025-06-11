/**
 * Data about the site's pages.
 */
const pages = {
  "/": {
    ssr: "/ssr/home",
    title: "Nicoll Douglas",
  },
  "/projects": {
    ssr: "/ssr/projects",
    title: "Projects | Nicoll Douglas",
  },
  "/about": {
    ssr: "/ssr/about",
    title: "About | Nicoll Douglas",
  },
  "/contact": {
    ssr: "/ssr/contact",
    title: "Contact | Nicoll Douglas",
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
  };
}

export { getPage };
