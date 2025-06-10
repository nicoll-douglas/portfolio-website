<?php

function buffer($filePath)
{
  ob_start();
  require $filePath;
  return ob_get_clean();
}
