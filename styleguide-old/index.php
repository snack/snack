<?php

require_once __DIR__ . '/lib/bootstrap.php';

echo $twig->render('index.html.twig', array('iterator' => null, 'container' => $container));
