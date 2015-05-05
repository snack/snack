<!doctype html>
<!--[if IE 7]> <html class="no-js ie7" lang="pt-br"> <![endif]-->
<!--[if IE 8]> <html class="no-js ie8" lang="pt-br"> <![endif]-->
<!--[if IE 9]> <html class="no-js ie9" lang="pt-br"> <![endif]-->
<head>
    <meta charset="utf-8">
    <title>Título da Página | Projeto</title>
    <?php include __DIR__ . '/build/in/meta.php'; ?>
    <?php include __DIR__ . '/build/in/estilos.php'; ?>

    <style>
        .fa{
            font-size: 45px;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <?php include __DIR__ . '/build/in/header.php'; ?>

    <main role="main">
        <!--[if IE 7]> IE7 <![endif]-->
        <!--[if IE 8]> IE8 <![endif]-->
        <!--[if IE 9]> IE9 <![endif]-->

        <div class="row">
            <i class="fa fa-facebook-square"></i>
            <i class="fa fa-twitter-square"></i>
            <i class="fa fa-linkedin-square"></i>
            <i class="fa fa-google-plus-square"></i>
        </div>
    </main>

    <!-- Footer -->
    <?php include __DIR__ . '/build/in/footer.php' ;?>

    <!-- Scripts -->
    <script src="build/js/scripts.min.js"></script>
</body>
</html>
