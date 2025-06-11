<h1>Projects</h1>

<section>
  <?php
  $projectTitle = "Homelab";
  $projectDate = "May 2025 - Present";
  $projectTags = ["DevOps", "Networking"];
  require alias("@partials/projectHeaders.php");
  ?>

  <div class="project-split">
    <div>
      <p class="top-0">
        I maintain a personal homelab where I self-host several services including my own websites and a Gitea instance for version control. This setup has been the main way for me to deepen my skills in DevOps, SysAdmin, and networking.
      </p>
      <p>
        This project actively gives me hands-on experience managing real infrastructure, and it's been a reliable platform for testing and deploying personal projects.
      </p>
      <?php
      $projectLinks = [
        ["Source code", "https://github.com/nicoll-douglas/homelab"],
        ["Homelab Blog", "https://homelab.nicolldouglas.dev"]
      ];
      require alias("@partials/projectLinks.php");
      ?>
    </div>
    <figure class="project-figure">
      <img class="project-image" src="/assets/images/projects/homelab/gitea.png" alt="Gitea instance">
      <figcaption>Gitea instance</figcaption>
    </figure>
  </div>
  <?php
  $techStack = [
    ["Debian", "debian"],
    ["BASH", "bash"],
    ["Nginx", "nginx"],
    ["Docker", "docker"],
    ["Gitea", "gitea"],
    ["Cloudflare", "cloudflare"]
  ];
  require alias("@partials/techStack.php");
  ?>
</section>

<hr>

<section>
  <?php
  $projectTitle = "Blog";
  $projectDate = "May 2025 - Present";
  $projectTags = ["Full-stack Dev"];
  require alias("@partials/projectHeaders.php");
  ?>

  <div class="project-split">
    <div>
      <p class="top-0">
        A simple and self-hosted blog site made with PHP where I regularly document my progress with my homelab.
      </p>
      <?php
      $projectLinks = [
        ["Site", "https://homelab.nicolldouglas.dev"],
        ["Source code", "https://github.com/nicoll-douglas/homelab-blog"]
      ];
      require alias("@partials/projectLinks.php");
      ?>
    </div>
    <figure class="project-figure">
      <img class="project-image" src="/assets/images/projects/blog/home.png" alt="Homelab blog home">
      <figcaption>Home page</figcaption>
    </figure>
  </div>
  <?php
  $techStack = [
    ["HTML", "html"],
    ["CSS", "css"],
    ["PHP", "php"],
    ["Docker", "docker"],
  ];
  require alias("@partials/techStack.php");
  ?>
</section>

<hr>

<section>
  <?php
  $projectTitle = "Meshara";
  $projectDate = "Jan 2025 - Present";
  $projectTags = ["Full-stack Dev", "DevOps"];
  require alias("@partials/projectHeaders.php");
  ?>

  <div class="project-split">
    <div>
      <p class="top-0">
        A freelance project I actively work on for a friend where I meticulously craft and iterate a front-facing product site.
      </p>
      <p>Handling everything from design to code, to frontend, backend, deployment, and more, it's been a full-stack, end-to-end project that balances creative iteration, client communication, and technical versatility.</p>
      <?php
      $projectLinks = [
        ["Site", "https://meshara.net"]
      ];
      require alias("@partials/projectLinks.php");
      ?>
    </div>
    <figure class="project-figure">
      <img class="project-image" src="/assets/images/projects/meshara/new.png" alt="Meshara home">
      <figcaption>Home page</figcaption>
    </figure>
  </div>


  <?php
  $techStack = [
    ["Next.js", "nextJs"],
    ["MongoDB", "mongoDb"],
    ["Nginx", "nginx"],
    ["Docker", "docker"],
    ["Digital Ocean", "digitalOcean"]
  ];
  require alias("@partials/techStack.php");
  ?>
</section>

<hr>

<section>
  <?php
  $projectTitle = "Chattr";
  $projectDate = "Jun 2024 - Sep 2024";
  $projectTags = ["Full-stack Dev"];
  require alias("@partials/projectHeaders.php");
  ?>

  <div class="project-split">
    <div>
      <p class="top-0">
        A messaging board app/prototype where users can connect through user-created boards, threads, and replies—think a dumbed-down version of Reddit.
      </p>
      <p>
        Building this project from scratch was a key gateway for me into full-stack development via Node.js and overall a great learning experience.
      </p>

      <?php
      $projectLinks = [
        ["Source code", "https://github.com/nicoll-douglas/chattr"]
      ];
      require alias("@partials/projectLinks.php");
      ?>
    </div>
    <figure class="project-figure">
      <a href="/assets/images/projects/chattr/demo.gif" target="_blank" title="Demo">
        <img class="project-image" src="/assets/images/projects/chattr/demo.gif" alt="Chattr demo">
      </a>
      <figcaption>Demo</figcaption>
    </figure>
  </div>

  <?php
  $techStack = [
    ["React", "react"],
    ["Node.js", "nodeJs"],
    ["MongoDB", "mongoDb"],
    ["Docker", "docker"],
  ];
  require alias("@partials/techStack.php");
  ?>
</section>