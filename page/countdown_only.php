<div class="countdown countdown-container container" title="Countdown to fest.">
	<div class="clock row">
		<div class="clock-item clock-days countdown-time-value col-sm-6 col-md-3">
			<div class="wrap">
				<div class="inner">
					<div id="canvas-days" class="clock-canvas"></div>

					<div class="text">
						<p class="val">0</p>
						<p class="type-days type-time">DAYS</p>
					</div><!-- /.text -->
				</div><!-- /.inner -->
			</div><!-- /.wrap -->
		</div><!-- /.clock-item -->

		<div class="clock-item clock-hours countdown-time-value col-sm-6 col-md-3">
			<div class="wrap">
				<div class="inner">
					<div id="canvas-hours" class="clock-canvas"></div>

					<div class="text">
						<p class="val">0</p>
						<p class="type-hours type-time">HOURS</p>
					</div><!-- /.text -->
				</div><!-- /.inner -->
			</div><!-- /.wrap -->
		</div><!-- /.clock-item -->

		<div class="clock-item clock-minutes countdown-time-value col-sm-6 col-md-3">
			<div class="wrap">
				<div class="inner">
					<div id="canvas-minutes" class="clock-canvas"></div>

					<div class="text">
						<p class="val">0</p>
						<p class="type-minutes type-time">MINUTES</p>
					</div><!-- /.text -->
				</div><!-- /.inner -->
			</div><!-- /.wrap -->
		</div><!-- /.clock-item -->

		<div class="clock-item clock-seconds countdown-time-value col-sm-6 col-md-3">
			<div class="wrap">
				<div class="inner">
					<div id="canvas-seconds" class="clock-canvas"></div>

					<div class="text">
						<p class="val">0</p>
						<p class="type-seconds type-time">SECONDS</p>
					</div><!-- /.text -->
				</div><!-- /.inner -->
			</div><!-- /.wrap -->
		</div><!-- /.clock-item -->
	</div><!-- /.clock -->
</div><!-- /.countdown-wrapper -->
<script type="text/javascript" src="js/jquery.final-countdown.min.js"></script>
<script type="text/javascript">
	$('.countdown').final_countdown({
		'start': 1422352800,
		'end': 1425031200,
		'now': Date.now()/1000        
	});
</script>