<!-- CSS -->
<link rel="stylesheet" href="css/main.css">

<!-- Font Awesome IE7 -->
<!--[if IE 7]>
   <link rel="stylesheet" href="css/font-awesome-ie7.min.css">
<![endif]-->

<!-- Modernizr -->
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>

<!-- Respond -->
<!--[if lt IE 9]>
<script src="js/libs/respond.min.js"></script>
<![endif]-->

<!-- Verif Mobile -->
<?php
   require_once 'in/mobile_detect.php';
   $detect = new Mobile_Detect();

   $isMobile = $detect->isMobile();
   $isTablet = $detect->isTablet();

   $notMobile = ! $isMobile || $isTablet;
   $onlyMobile = $isMobile && ! $isTablet;
?>
