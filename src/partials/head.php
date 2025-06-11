<!DOCTYPE html>
<html lang="en">

<head>
  <title><?php
          if (!empty($title)) {
            echo $title;
          }
          if (!isset($template)) {
            $template = true;
          }
          if (!empty($template)) {
            echo " | Nicoll Douglas";
          }
          ?></title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Itim&display=block" rel="stylesheet">

  <link rel="stylesheet" href="/assets/css/global.css">
  <link rel="stylesheet" href="/assets/css/page.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <link rel="stylesheet" href="/assets/css/utilities.css">
  <link rel="shortcut icon" href="/assets/images/icon.png" type="image/png">
  <script src="/assets/js/main.js" type="module" defer></script>

  <meta name="author" content="Nicoll Douglas">
  <meta name="description" content="<?= $description ?>">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <?php

  ?>
  <main id="<?= match ($_SERVER["REQUEST_URI"]) {
              "/" => "home",
              "/about" => "about",
              "/contact" => "contact",
              "/projects" => "projects",
              default => "not-found"
            }
            ?>">
    <div>