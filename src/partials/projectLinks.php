<h3 class="top-6 bottom-3">Links</h3>
<ul class="icon-badges">
  <?php foreach ($projectLinks as [$name, $href]): ?>
    <li>
      <a class="icon-badge link" href="<?= $href ?>" target="_blank" rel="noopener noreferrer">
        <?php
        echo $name;
        require alias("@icon/externalLink.php");
        ?>
      </a>
    </li>
  <?php endforeach; ?>
</ul>