const main = document.querySelector("main");

const ssrKeys = {
  "/": "/ssr/home",
  "/about": "/ssr/about",
  "/projects": "/ssr/projects",
  "/contact": "/ssr/contact",
};

const titleKeys = {
  "/": "Nicoll Douglas",
  "/about": "About | Nicoll Douglas",
  "/projects": "Projects | Nicoll Douglas",
  "/contact": "Contact | Nicoll Douglas",
};

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
  ssr(ssrKeys[e.target.pathname]);
}

function registerNavigation(root = document) {
  root.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", handleNavigation);
  });
}

function updateHeaderNavigation() {
  document.querySelectorAll("header a").forEach((link) => {
    link.classList.remove("nav-active");
    if (window.location.pathname === link.pathname) {
      link.classList.add("nav-active");
    }
  });
}

function updateTitle() {
  document.title = titleKeys[window.location.pathname];
}

async function ssr(target) {
  updateTitle();
  main.firstElementChild.remove();
  main.appendChild(document.createElement("div"));

  try {
    const response = await fetch(target);
    const html = await response.text();
    main.firstElementChild.innerHTML = html;
  } catch (e) {
    console.error(e);
  }

  registerNavigation(main.firstElementChild);
  updateHeaderNavigation();
}

window.addEventListener("popstate", (e) => {
  ssr(ssrKeys[window.location.pathname]);
});

window.addEventListener("scroll", (e) => {
  const isScrolled =
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;
  document
    .querySelector("header")
    .classList[isScrolled ? "add" : "remove"]("header-scroll");
});

registerNavigation();
updateHeaderNavigation();
