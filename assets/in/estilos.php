<!-- CSS -->
<link rel="stylesheet" href="build/css/main.min.css">

<!-- Modernizr -->
<script src="../components/modernizr/modernizr.js"></script>

<!-- Respond -->
<!--[if lt IE 9]>
<script src="components/respond/dest/respond.min.js"></script>
<![endif]-->

<!-- Verif Mobile -->
<?php
   require_once 'assets/in/mobile_detect.php';
   $detect = new Mobile_Detect();

   $isMobile = $detect->isMobile();
   $isTablet = $detect->isTablet();

   $notMobile = ! $isMobile || $isTablet;
   $onlyMobile = $isMobile && ! $isTablet
;?>
