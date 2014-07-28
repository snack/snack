<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use Symfony\Component\Yaml\Parser as YamlParser;

//YAML Parser
$yaml = new YamlParser();

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Layouts";
$container['body_class'] = "layouts";
$layouts = $yaml->parse(file_get_contents(__DIR__.'/layouts.yml'));

echo $twig->render('/modules/layouts.html.twig', array('layouts' => $layouts, 'container' => $container));
