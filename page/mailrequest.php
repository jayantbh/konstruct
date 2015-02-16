<?php
	// Swift Mailer Library
	require_once '../swiftmailer/lib/swift_required.php';

	// Mail Transport
	$transport = Swift_SmtpTransport::newInstance('ssl://smtp.gmail.com', 465)
	    ->setUsername('konstructwbut@gmail.com') // Your Gmail Username
	    ->setPassword('cyberom1'); // Your Gmail Password

	// Mailer
	$mailer = Swift_Mailer::newInstance($transport);

	// Create a message
	$message = Swift_Message::newInstance('Konstruct Invitation Request')
	    ->setFrom(array($_POST["mail"] => $_POST["name"])) // can be $_POST['email'] etc...
	    ->setTo(array('bhawal.jayant@gmail.com' => 'Konstruct Admin')) // your email / multiple supported.
	    ->setBody('Name: '.$_POST["name"].'<br>Email: '.$_POST["mail"].'<br>Number: '.$_POST["num"].'<br>Instituition: '.$_POST["insti"].'<br>Twitter Handle: '.$_POST["twit"].'<br>Facebook: '.$_POST["fburl"].'<br>Blog: '.$_POST["urblog"].'<br>Community: '.$_POST["com"], 'text/html');

	// Send the message
	if ($mailer->send($message)) {
	    echo 'sent';
	} else {
	    echo 'failed';
	}
?>