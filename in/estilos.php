<!-- CSS -->
<link rel="stylesheet" href="css/main.css">

<!-- Modernizr -->
<script src="js/libs/modernizr/modernizr.js"></script>

<!-- Respond -->
<!--[if lt IE 9]>
<script src="js/libs/respond/dest/respond.min.js"></script>
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
