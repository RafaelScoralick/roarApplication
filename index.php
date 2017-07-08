<!doctype html>
<html lang="pt-br" ng-app="roarApplication" id="ng-app">
<head>
  	<meta charset="utf-8">
  	<meta http-equiv="Content-Language" content="pt-br">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  	<title>Old Skull Publisher</title>
  	<meta name="author" content="Rafael Scoralick">

    <!-- Disable tap highlight on IE -->
    <meta name="msapplication-tap-highlight" content="no">

    <link rel="manifest" href="/manifest.json">

    <!-- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="Old Skull Publisher">
    <link rel="icon"  sizes="192x192" href="/wp-content/themes/roarApplication/build/image/android-chrome-192x192.png">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Old Skull Publisher">
    <link rel="apple-touch-icon" href="/wp-content/themes/roarApplication/build/image/apple-touch-icon.png">

    <meta property="fb:app_id" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:tile" content="">
    <meta property="og:image" content="">
    <meta property="og:description" content="">
    
    
    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="/wp-content/themes/roarApplication/build/image/msapplication-icon-144x144.png">
    <meta name="msapplication-TileColor" content="#2F3BA2">

    <!-- Color the status bar on mobile devices -->
    <meta name="theme-color" content="#2F3BA2">

    <!-- Material Design icons
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
     --> 
    <link rel='stylesheet' rel="canonical" type='text/css' href='/wp-content/themes/roarApplication/build/css/req.min.css'/>
  	<link rel='stylesheet' rel="canonical" type='text/css' href='/wp-content/themes/roarApplication/style.css'/>
  	<base href="/">
</head>
<body>

  <roar-root>
    
  </roar-root>
    
    
 	<script src="/wp-content/themes/roarApplication/build/js/req.min.js"></script>
	<noscript>Sem Javascript :(</noscript>
	<script src="/wp-content/themes/roarApplication/build/js/templateCache.js"></script>
	<script src="/wp-content/themes/roarApplication/build/js/roar.js"></script>
	
	<script>
	if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
	</script>
	
	<script async>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.9&appId=1010332698987070";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
  <script async id="dsq-count-scr" src="//oldskull-rafaelscoralick.disqus.com/count.js" ></script>
	 <!-- Google Analytics: change UA-XXXXX-X to be your site's ID 
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-XXXXX-X', 'auto');
      ga('send', 'pageview');
    </script>
    <!-- Built with love using Web Starter Kit -->
</body>
</html>