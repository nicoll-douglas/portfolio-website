<?php
require_once __DIR__ . "/../src/utils/buffer.php";
require_once __DIR__ . "/../src/utils/cache.php";

$head =  __DIR__ . "/../src/partials/head.php";
$tail =  __DIR__ . "/../src/partials/tail.php";
$home = __DIR__ . "/../src/content/home.php";
$projects = __DIR__ . "/../src/content/projects.php";
$about = __DIR__ . "/../src/content/about.php";
$contact = __DIR__ . "/../src/content/contact.php";
$notFound = __DIR__ . "/../src/content/notFound.php";

// cache(43200);

switch ($_SERVER["REQUEST_URI"]) {
  case "/":
    require $head;
    require $home;
    require $tail;
    break;
  case "/projects":
    $title = "Projects";
    require $head;
    require $projects;
    require $tail;
    break;
  case "/about":
    $title = "About";
    require $head;
    require $about;
    require $tail;
    break;
  case "/contact":
    $title = "Contact";
    require $head;
    require $contact;
    require $tail;
    break;
  case "/ssr/home":
    echo buffer($home);
    break;
  case "/ssr/projects":
    echo buffer($projects);
    break;
  case "/ssr/about":
    echo buffer($about);
    break;
  case "/ssr/contact":
    echo buffer($contact);
    break;
  default:
    echo buffer($notFound);
}
