<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use Symfony\Component\Yaml\Parser as YamlParser;

$loader->addPath(__DIR__.'/template');

//YAML Parser
$yaml = new YamlParser();

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Cores";
$container['body_class'] = "colors";
$modules_list = $yaml->parse(file_get_contents(__DIR__.'/modules_list_config.yml'));

echo $twig->render('/modules_template.html.twig', array('modules_list' => $modules_list, 'container' => $container));
