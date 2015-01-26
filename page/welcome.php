<div id="container">
	<video autoplay loop muted poster="css/LoopVid/frame.jpg" id="bgvid" loop>
		<source src="css/LoopVid/LoopVid.mp4" type="video/mp4">
	</video>
	<div id="content">
		<div class="welcome">
			<div class="welcomeInfo">
				<h1>WBUT Konstruct</h1>
				<img src="css/img/KbinaryCircle.png">
				<h2>Welcome to Konstruct 2015</h2>
				<h3>Bengal's largest Open Source Fest.</h3>
				<button id="scroll">See what's happening!</button>
			</div>
		</div>
	</div>
</div>
<style>
video { 
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	background: url('css/LoopVid/frame.jpg') no-repeat;
	background-size: cover;
	transition: 1s opacity;
}
#content	 {
	background: rgba(0,0,0,0.3);
}
@media screen and (max-width: 500px) { 
	div{width:70%;} 
}
@media screen and (max-device-width: 800px) {
	html { background: url('css/LoopVid/frame.jpg') #000 no-repeat center center cover; }
	#bgvid { display: none; }
}
</style>