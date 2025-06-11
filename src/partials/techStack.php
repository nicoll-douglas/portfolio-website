<h3 class="top-6 bottom-3">Tech Stack</h3>
<ul class="icon-badges">
  <?php foreach ($techStack as [$techName, $techIcon]): ?>
    <li class="icon-badge">
      <?php
      require alias("@icon/$techIcon.php");
      echo $techName;
      ?>
    </li>
  <?php endforeach; ?>
</ul>