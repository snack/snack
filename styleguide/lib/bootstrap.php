<?php

require_once __DIR__ . '/vendor/autoload.php';

//Twig Configuration
$templates_path = __DIR__ . '/layout';

$loader = new Twig_Loader_Filesystem($templates_path);
$twig = new Twig_Environment($loader);

//Project Configuration
$container = new A2boilerplate\Container\Pimple();
$container['project'] = 'Nome do Projeto';
$container['cms'] = 'WordPress/A2siteBox';
$container['browsers'] = 'Firefox, Chrome, IE8+';
$container['styleguide_url'] = '/styleguide';