<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use A2boilerplate\Iterator\BoilerplateDirectoryIterator;

//Module Path to Iterate
$module_path = __DIR__ . '/modules';
$iterator = new BoilerplateDirectoryIterator($module_path);

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Grid";
$container['body_class'] = "grid";

echo $twig->render('modules.html.twig', array('iterator' => $iterator, 'container' => $container));
