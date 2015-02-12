<div class="welcome">
	<?php //if(time()<1425031200 && $DEV_MODE){require_once 'shutter.php';}?>
	<div class="welcomeInfo">
	 	<?php if(time()>1425031200 || !$DEV_MODE){require_once 'welcomeInfo.php';}?>
	</div>	
</div>