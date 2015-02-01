$("#showlist").click(function(){
	$(".list").slideToggle();
});
$(document).ready(function(){
	$(".welcome").css("background-image","url('css/img/bgs/"+Math.floor((new Date).getHours()/2)+".jpg')");	
	/*$(".page1 .sidebarData .leftTab").on("click",function(){
		var leftPx;
		var panel=$(this).parent(".sidebarData");
		if(panel.css("left")!="0"){
			leftPx=panel.css("left");
			panel.animate({"left":"0"},400);
		}
		else
			//pal.animate({"left":leftPx},400);
			alert(panel.css("left"));
	});*/
   var i=0,j=0;
   setInterval(function(){
      $(".days .coms1").attr("src","css/img/coms/"+(i++%6)+".png");
      $(".days .coms2").attr("src","css/img/coms/"+(6+(j++%5))+".png");
   },500);
});
$(".body").onepage_scroll({
   sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 500,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});
$("#sap").submit(function(e){
   e.preventDefault();
   var name=$(this).find("#name").val();
   var mail=$(this).find("#mail").val();
   var num=$(this).find("#num").val();
   var insti=$(this).find("#insti").val();
   var app=$(this).find("#app").val();
   var rate=$(this).find("#rate").val();
   var why=$(this).find("#why").val();
   alert("Under dev.\nYou entered:\nName: "+name+"\nMail: "+mail+"\nNumber: "+num+"\nInsti: "+insti+"\nFav OSS: "+app+"\nRating: "+rate+"\nWhy Kons.: "+why);
});