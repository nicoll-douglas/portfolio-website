<div class="project-header">
  <h2><?= $projectTitle ?></h2>
  <p class="icon-badge project-date">
    <?php
    require alias("@icon/calendar.php");
    echo $projectDate;
    ?>
  </p>
</div>
<div class="project-tags">
  <?php foreach ($projectTags as $tag): ?>
    <p><?= $tag ?></p>
  <?php endforeach; ?>
</div>