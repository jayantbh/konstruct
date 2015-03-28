<?php require_once 'page/init.php';?>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
	<title>WBUT Konstruct 2015</title>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/less" href="css/fonts.less">
	<link rel="stylesheet" type="text/less" href="css/card.less">
	<link rel="stylesheet" media="(min-width: 600px) and (max-width: 800px) and (orientation: landscape)" type="text/less" href="css/style_small.less">
	<link rel="stylesheet" media="(min-width: 400px) and (max-width: 480px) and (orientation: portrait)" type="text/less" href="css/style_small_portrait.less">
	<link rel="stylesheet" media="(min-width: 901px) and (max-width: 1400px) and (orientation: landscape)" type="text/less" href="css/style.less">
	<link rel="stylesheet" media="(min-width: 481px) and (max-width: 720px) and (orientation: portrait)" type="text/less" href="css/style_HDPI_portrait.less">
	<link rel="stylesheet" media="(min-width: 1401px) and (orientation: landscape)" type="text/less" href="css/style_HD.less">

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/less.min.js"></script>
</head>
<body>
	<div class="invitationForm">
		<h2>Konstruct Fest: Registration Form</h2>
		<h3>Konstruct - by WBUT. Submit a request to register for the event.</h3>
		<form id="inviform" class="invite">
			<table>
				<tr>
					<td>Your Full Name*:</td>
					<td><input id="name" name="name" required></td>
				</tr>
				<tr>
					<td>Your Email ID*:</td>
					<td><input id="mail" name="mail" required></td>
				</tr>
				<tr>
					<td>Your Phone Number:</td>
					<td><input id="num" name="num"></td>
				</tr>
				<tr>
					<td>Instituition (School/College):</td>
					<td><input id="insti" name="insti"></td>
				</tr>
				<tr>
					<td>Twitter handle:</td>
					<td><input id="twit" name="twit"></td>
				</tr>
				<tr>
					<td>Facebook URL:</td>
					<td><input id="fburl" name="fburl"></td>
				</tr>
				<tr>
					<td>Your personal blog(Own/Wordpress/Blogger/etc.):</td>
					<td><input id="urblog" name="urblog"></td>
				</tr>
				<tr>
					<td>Do you belong to any community?:</td>
					<td><input id="com" name="com" placeholder="Mozilla/Linux etc."></td>
				</tr>
			</table><br><br>
			<button class="submitter">Count me in!</button>
			<br>
			<a href="./" style="color: white; display: inline-block; margin-top: 20px;">Back to home.</a>
		</form>
	</div>
	<script type="text/javascript" src="js/functions.js"></script>
</body>
</html>

	