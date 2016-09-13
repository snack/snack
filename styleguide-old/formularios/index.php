<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use Symfony\Component\Yaml\Parser as YamlParser;

$loader->addPath(__DIR__.'/modules');
$loader->addPath(__DIR__.'/template');

//YAML Parser
$yaml = new YamlParser();

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Formulários";
$container['body_class'] = "forms";
$modules_list = $yaml->parse(file_get_contents(__DIR__.'/modules_list_config.yml'));

echo $twig->render('/modulestemplate.html.twig', array('modules_list' => $modules_list, 'container' => $container));
