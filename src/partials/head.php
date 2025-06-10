<!DOCTYPE html>
<html lang="en">

<head>
  <title><?php
          if (!empty($title)) {
            echo $title . " | ";
          }
          ?>Nicoll Douglas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Itim&display=block" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/global.css">
  <?php if (isset($css)): ?>
    <link rel="stylesheet" href="<?= $css ?>">
  <?php endif; ?>
  <script src="/assets/js/global.js" type="module" defer></script>
  <meta name="author" content="Nicoll Douglas">
  <?php if (isset($description)): ?>
    <meta name="description" content="<?= $description ?>">
  <?php endif; ?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/icon.png" type="image/png">
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
  <main>
    <div>