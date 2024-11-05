window.setInterval(function(){
	var myDate = new Date(),
			hour = ("0" + myDate.getHours()).slice(-2),
			minute = ("0" + myDate.getMinutes()).slice(-2),
			second = ("0" + myDate.getSeconds()).slice(-2),
			currentTime = "#" + hour + "" + minute + "" + second;
  
  	$("body").css({
		"background-color" : currentTime
	});
	
	$(".hex").empty();
	$(".hex").append(currentTime);
}, 1000);