<?php

require_once __DIR__ . '/vendor/autoload.php';

//Twig Configuration
$templates_path = __DIR__ . '/layout';

$loader = new Twig_Loader_Filesystem($templates_path);
$twig = new Twig_Environment($loader);

//Project Configuration
$container = new A2boilerplate\Container\Pimple();
$container['project'] = 'Nome do Projeto';
$container['cms'] = 'A2siteBox/WordPress';
$container['browsers'] = 'Firefox, Chrome, IE8+';
$container['styleguide_url'] = '/styleguide';
$container['meta_description'] = 'Descrição da meta tag description.';
$container['meta_keywords'] = 'Tags da meta taga keywords.';