(function($) {
	var colorIcon = true;

	$(function() {
	   $('.vk').EmbedVkGallery();

		$("#glbl").click(function() {
								
				if(colorIcon){
					$("#glbl").css('color', 'green');
					colorIcon = false;
					$("#si").fadeToggle(1000);
				}else{
					$("#glbl").css('color', 'blue');
					colorIcon = true;
					$("#si").fadeToggle(300);
				}
		});

		// $( "#clickme" ).click(function() {
		//   $( "#book" ).fadeIn( "slow", function() {
		//     // Animation complete
		//   });
		// });

		// $("#si").mouseover(function() {
		//   $("#si").css('display', 'block')
		// });
	});
})(jQuery);