$("#showlist").click(function(){
	$(".list").slideToggle();
});
$(document).scroll(function(){
	if($(document).scrollTop()>window.innerHeight){
		$(".header").addClass("stickToTop");
		$(".body").css("margin-top","0");
	}
	else{
		$(".header").removeClass("stickToTop");
		if(window.innerWidth<480)
			$(".body").css("margin-top","-70");
		else
			$(".body").css("margin-top","-80");
	}

});
$("#scroll").on("click", function () {
    $('body').animate({scrollTop:window.innerHeight}, 400);
});
$(document).ready(function(){
	$(".welcome").css("background-image","url('css/img/bgs/"+Math.floor((new Date).getHours()/2)+".jpg')");
});