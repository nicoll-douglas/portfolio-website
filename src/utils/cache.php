<?php

function cache($duration = 1800)
{
  header("Cache-Control: public, max-age=$duration");
}
