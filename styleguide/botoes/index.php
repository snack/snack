<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use Symfony\Component\Yaml\Parser as YamlParser;

$loader->addPath('modules');
$loader->addPath('template');

//YAML Parser
$yaml = new YamlParser();

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Botões";
$container['body_class'] = "buttons";
$buttons = $yaml->parse(file_get_contents(__DIR__.'/buttons.yml'));

echo $twig->render('/buttons.html.twig', array('buttons' => $buttons, 'container' => $container));
