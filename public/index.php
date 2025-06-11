<?php

require_once __DIR__ . "/../src/bootstrap.php";

require_once alias("@utils/buffer.php");
require_once alias("@utils/cache.php");

$head =  alias("@head");
$tail = alias("@tail");
$home = alias("@content/home.php");
$projects = alias("@content/projects.php");
$about = alias("@content/about.php");
$contact =  alias("@content/contact.php");
$notFound = alias("@content/notFound.php");

// cache(3600);

switch ($_SERVER["REQUEST_URI"]) {
  case "/":
    $title = "Nicoll Douglas";
    $template = false;
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
  case "/ssr/not-found":
    echo buffer($notFound);
    break;
  default:
    http_response_code(404);
    $title = "404 Not Found";
    $template = false;
    require $head;
    require $notFound;
    require $tail;
}
