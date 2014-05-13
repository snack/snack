<!-- CSS -->
<link rel="stylesheet" href="build/css/main.min.css">

<!-- Modernizr -->
<script src="build/js/libs/modernizr.min.js"></script>

<!-- Respond -->
<!--[if lt IE 9]>
	<script src="build/js/libs/respond.min.js"></script>
<![endif]-->

<!-- Verif Mobile -->
<?php
   require_once 'build/in/mobile_detect.php';
   $detect = new Mobile_Detect();

   $isMobile = $detect->isMobile();
   $isTablet = $detect->isTablet();

   $notMobile = ! $isMobile || $isTablet;
   $onlyMobile = $isMobile && ! $isTablet
;?>

<script>
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X');ga('send','pageview');
</script>