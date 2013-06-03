<!-- CSS -->
<link rel="stylesheet" href="css/main.css">

<!-- Humans txt -->
<link type="text/plain" rel="author" href="humans.txt" />

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
