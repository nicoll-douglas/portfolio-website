<?php

require_once __DIR__ . "/../src/bootstrap.php";

require_once alias("@utils/cache.php");

$head =  alias("@head");
$tail = alias("@tail");
$home = alias("@content/home.php");
$projects = alias("@content/projects.php");
$about = alias("@content/about.php");
$contact =  alias("@content/contact.php");
$notFound = alias("@content/notFound.php");

if (getenv("APP_ENV") === "production") {
  cache(3600);
}

switch ($_SERVER["REQUEST_URI"]) {
  case "/":
    $title = "Nicoll Douglas";
    $description = "Showcasing web development and DevOps projects, skills, and experience in building modern, scalable digital solutions.";
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
    $description = "Learn more about Nicoll, a web developer with a strong background in PHP, React, and DevOps practices focused on building reliable, high-performance web applications.";
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
    require $home;
    break;
  case "/ssr/projects":
    require $projects;
    break;
  case "/ssr/about":
    require $about;
    break;
  case "/ssr/contact":
    require $contact;
    break;
  case "/ssr/not-found":
    require $notFound;
    break;
  default:
    http_response_code(404);
    $title = "404 Not Found";
    $template = false;
    require $head;
    require $notFound;
    require $tail;
}
