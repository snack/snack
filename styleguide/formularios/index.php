<?php

require_once __DIR__ . '/../lib/bootstrap.php';

use Symfony\Component\Yaml\Parser as YamlParser;

$loader->addPath('modules');

//YAML Parser
$yaml = new YamlParser();

//Put module name in the container initialized on bootstrap.php
$container['module'] = "Formulários";
$container['body_class'] = "forms";
$forms = $yaml->parse(file_get_contents(__DIR__.'/forms.yml'));

echo $twig->render('/modules/forms.html.twig', array('forms' => $forms, 'container' => $container));
