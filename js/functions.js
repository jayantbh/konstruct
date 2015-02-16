$("#showlist").click(function(){
	$(".list").slideToggle();
});
$(document).ready(function(){
	$(".cover").delay(1000).fadeOut(1000);
	$(".welcome").css("background-image","url('css/img/bgs/"+Math.floor((new Date).getHours()/2)+".jpg')");
	
	if(window.innerWidth<=800){
	  //var vid=$("#video").attr("src");
	  //alert(vid);
		$("video").remove();
		$(".countdown").remove();
		$(".coms2").parent().remove();
	}
	else if(window.innerWidth<=1400){
		$("#video").attr("src","css/LoopVid/LoopVid_sd.mp4");
	}
	else{
	  $("#video").attr("src","css/LoopVid/LoopVid.mp4");
	}
	if(window.innerHeight<500){
		$(".hideonextra").remove();
	}
	var i=0,j=0;
	setInterval(function(){
	  if(window.innerWidth<=800){
		 $(".days .coms1").attr("src","css/img/coms_sd/"+(i++%10)+".png");
	  }
	  else if(window.innerWidth<=1400){
		 $(".days .coms1").attr("src","css/img/coms_sd/"+(i++%5)+".png");
		 $(".days .coms2").attr("src","css/img/coms_sd/"+(5+(j++%5))+".png");
	  }
	  else{
		 $(".days .coms1").attr("src","css/img/coms/"+(i++%5)+".png");
		 $(".days .coms2").attr("src","css/img/coms/"+(5+(j++%5))+".png");
	  }
	},500);
	$("#entry").click(function(){
	  $(this).fadeOut(500);
	  //$(".welcomeInfo > img").delay(3000).css("-webkit-animation","bubbles 7s infinite ease-in-out,spin 5s infinite linear");
	});
});

$("#sap").submit(function(e){
	e.preventDefault();
	var name=$(this).find("#name").val().trim();
	var mail=$(this).find("#mail").val().trim();
	var num=$(this).find("#num").val().trim();
	var insti=$(this).find("#insti").val().trim();
	var app=$(this).find("#app").val().trim();
	var rate=$(this).find("#rate").val().trim();
	var why=$(this).find("#why").val().trim();
	//alert("Under dev.\nYou entered:\nName: "+name+"\nMail: "+mail+"\nNumber: "+num+"\nInsti: "+insti+"\nFav OSS: "+app+"\nRating: "+rate+"\nWhy Kons.: "+why);
	$(".submitter").text("Please wait.");
	$.post("page/mailambassadorform.php",{name:name,mail:mail,num:num,insti:insti,app:app,rate:rate,why:why},function(data){
		if(data=="sent")
			alert("Request Sent. Please wait while we mail a response on the given Email ID.");
		else
			document.write("Something went wrong... Please try again later.\nError data: \n"+data);
	}).done(function(){
		$(".submitter").text("Success! Click to send another request.");
	}).fail(function(){
		$(".submitter").text("Failed. Try again?");
		alert("Something went wrong... Please try again later.");
	});
});
$("#inviform").submit(function(e){
	e.preventDefault();
	var name=$(this).find("#name").val().trim();
	var mail=$(this).find("#mail").val().trim();
	var num=$(this).find("#num").val().trim();
	var insti=$(this).find("#insti").val().trim();
	var twit=$(this).find("#twit").val().trim();
	var fburl=$(this).find("#fburl").val().trim();
	var urblog=$(this).find("#urblog").val().trim();
	var com=$(this).find("#com").val().trim();
	//alert("Under dev.\nYou entered:\nName: "+name+"\nMail: "+mail+"\nNumber: "+num+"\nInsti: "+insti+"\nCommunity: "+com);
	$(".submitter").text("Please wait.");
	$.post("page/mailrequest.php",{name:name,mail:mail,num:num,insti:insti,fburl:fburl,twit:twit,urblog:urblog,com:com},function(data){
		if(data=="sent")
			alert("Request Sent. Please wait while we mail a response on the given Email ID.");
		else
			document.write("Something went wrong... Please try again later.\nError data: \n"+data);
	}).done(function(){
		$(".submitter").text("Success! Click to send another request.");
	}).fail(function(){
		$(".submitter").text("Failed. Try again?");
		alert("Something went wrong... Please try again later.");
	});
});
$(".body").onepage_scroll({
	sectionContainer: ".section",	  // sectionContainer accepts any kind of selector in case you don't want to use section
	easing: "ease",						// Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
									// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	animationTime: 500,				 // AnimationTime let you define how long each section takes to animate
	pagination: false,					 // You can either show or hide the pagination. Toggle true for show, false for hide.
	updateURL: false,					 // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	afterMove: function(index) {},	// This option accepts a callback function. The function will be called after the page moves.
	loop: false,							// You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	keyboard: true,						// You can activate the keyboard controls
	responsiveFallback: false,		  // You can fallback to normal page scroll by defining the width of the browser in which
									// you want the responsive fallback to be triggered. For example, set this to 600 and whenever
									// the browser's width is less than 600, the fallback will kick in.
	direction: "vertical"				// You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});