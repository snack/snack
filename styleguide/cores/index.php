<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use Symfony\Component\Yaml\Parser as YamlParser;

$loader->addPath(__DIR__.'/template');

//YAML Parser
$yaml = new YamlParser();

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Cores";
$container['body_class'] = "colors";
$colors = $yaml->parse(file_get_contents(__DIR__.'/colors.yml'));

echo $twig->render('/colors.html.twig', array('colors' => $colors, 'container' => $container));
