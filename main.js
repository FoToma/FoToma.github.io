(function($) {
	var colorIcon = true;

	$(function() {
	   $('.vk').EmbedVkGallery();
	});

	$("#glbl").click(function() {					
		if(colorIcon){
			$("#glbl").css('color', 'green');
			colorIcon = false;
			$("#si").fadeToggle(1000);
		}else{
			$("#glbl").css('color', 'lightBlue');
			colorIcon = true;
			$("#si").fadeToggle(300);
		}

		// $("#si").mouseover(function() {
		//   $("#si").css('display', 'block')
		// });
	});

})(jQuery);