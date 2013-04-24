<!-- CSS -->
<link rel="stylesheet" href="css/main.css">

<!-- Modernizr -->
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>

<!-- Respond -->
<!--[if lt IE 9]>
<script src="js/libs/respond.min.js"></script>
<![endif]-->

<!-- Verif Mobile -->
<?php
   require_once 'in/Mobile_Detect.php';
   $detect = new Mobile_Detect();

   $isMobile = $detect->isMobile();
   $isTablet = $detect->isTablet();
?>
