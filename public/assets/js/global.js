const main = document.querySelector("main");

const keys = {
  "/": {
    ssr: "/ssr/home",
    title: "Nicoll Douglas",
    id: "home",
  },
  "/about": {
    ssr: "/ssr/about",
    title: "About | Nicoll Douglas",
    id: "about",
  },
  "/projects": {
    ssr: "/ssr/projects",
    title: "Projects | Nicoll Douglas",
    id: "projects",
  },
  "/contact": {
    ssr: "/ssr/contact",
    title: "Contact | Nicoll Douglas",
    id: "contact",
  },
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
  ssr(e.target.pathname);
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
  document.title = keys[window.location.pathname].title;
}

async function ssr(key) {
  updateTitle();
  main.firstElementChild.remove();

  main.id = keys[key].id;
  main.appendChild(document.createElement("div"));

  try {
    const response = await fetch(keys[key].ssr);
    const html = await response.text();
    main.firstElementChild.innerHTML = html;
  } catch (e) {
    console.error(e);
  }

  registerNavigation(main.firstElementChild);
  updateHeaderNavigation();
}

window.addEventListener("popstate", (e) => {
  ssr(window.location.pathname);
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
