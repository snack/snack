<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use Symfony\Component\Yaml\Parser as YamlParser;

$loader->addPath('modules');

//YAML Parser
$yaml = new YamlParser();

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Grid";
$container['body_class'] = "grid";
$grid = $yaml->parse(file_get_contents(__DIR__.'/grid.yml'));

echo $twig->render('modules/grid.html.twig', array('grid' => $grid, 'container' => $container));
