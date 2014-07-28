<?php

require_once __DIR__ . '/vendor/autoload.php';

use Symfony\Component\Yaml\Parser as YamlParser;

//Twig Configuration
$templates_path = __DIR__ . '/layout';

$loader = new Twig_Loader_Filesystem($templates_path);
$twig = new Twig_Environment($loader);

//YAML Parser
$yaml = new YamlParser();
$project = $yaml->parse(file_get_contents(__DIR__.'/../project.yml'));

//Project Configuration
$container = new A2boilerplate\Container\Pimple();
$container['project'] = $project;