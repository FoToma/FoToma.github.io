$(document).ready(function(){
			var flags = ["lang-ch", "lang-cz", "lang-fr", "lang-ge", "lang-in", "lang-ind", "lang-it", "lang-is", "lang-jp", "lang-ko", "lang-po", "lang-pol", "lang-sa", "lang-sp", "lang-se", "lang-tu", "lang-th", "lang-ru"];

			var menuButtons = [
				{id: "ru", home: "Главная", portfolio: "Портфолио", about: "О себе"},
				{id: "en", home: "Home", portfolio: "Portfolio", about: "About"},
				{id: "fr", home: "Accueil", portfolio: "Portefeuille", about: "À propos"},
				{id: "cz", home: "Domů", portfolio: "Portfolio", about: "O mně"},
				{id: "ch", home: "家", portfolio: "投資組合", about: "關於我"},
				{id: "ge", home: "Home", portfolio: "Portfolio", about: "Über mich"},
				{id: "in", home: "होम", portfolio: "पोर्टफोलियो", about: "मेरे बारे में"},
				{id: "ind", home: "Ngarep", portfolio: "Portofolio", about: "About"},
				{id: "it", home: "Casa", portfolio: "Portfolio", about: "Su di me"},
				{id: "is", home: "דף הבית", portfolio: "תיק", about: "על עצמי"},
				{id: "jp", home: "「ホーム」", portfolio: "「ポートフォリオ」", about: "「私について」"},
				{id: "ko", home: "집", portfolio: "포트폴리오", about: "내 소개"},
				{id: "po", home: "Home", portfolio: "Portfolio", about: "Sobre mim"},
				{id: "pol", home: "Dom", portfolio: "Portfolio", about: "O mnie"},
				{id: "sa", home: "الوطن", portfolio: "محفظة", about: "عني"},
				{id: "sp", home: "Inicio", portfolio: "Portafolio", about: "Acerca de mí"},
				{id: "se", home: "Хоме", portfolio: "Портфолио", about: "О мени"},
				{id: "tu", home: "Ev", portfolio: "Portföy", about: "Hakkımda"},
				{id: "th", home: "บ้าน", portfolio: "ผลงาน", about: "เกี่ยวกับฉัน"}
			];

			function сhangeFlag(selectFlag, pageContent) {
						
				// var f = _.filter(menuButtons, function (item) {
				//   return item.id === findFlag;
				// });

				var index;
				for (index = 0; index < flags.length; ++index) {
					$(".language-dropdown").find(".lang-flag").removeClass(flags[index])
				};
				$(".language-dropdown").find(".lang-flag").addClass(selectFlag);
				$("#lang_selected").html(pageContent);

				var findFlag = selectFlag.substring(selectFlag.indexOf("-") + 1);
				var f = _.filter(menuButtons, {id: findFlag});

				// console.log(findFlag); console.log(f);

		        $("#home").html(f[0].home);
		        $("#portfolio").html(f[0].portfolio);
		        $("#about").html(f[0].about);

		    };

			$(".lang-flag").click(function(){
				$(".language-dropdown").toggleClass("open");
			});

			$("ul.lang-list li").click(function(){
			    $("ul.lang-list li").removeClass("selected");
			    $(this).addClass("selected");

				if($(this).hasClass('lang-en')){
				    	сhangeFlag("lang-en","<p>АНГЛИЯ</p>");
				    }else if($(this).hasClass('lang-ch')){
				      	сhangeFlag('lang-ch', "<p>КИТАЙ</p>");
				    }else if($(this).hasClass('lang-fr')){
				      	сhangeFlag('lang-fr', "<p>ФРАНЦИЯ</p>");
				    }else if($(this).hasClass('lang-ge')){
				      	сhangeFlag('lang-ge', "<p>ГЕРМАНИЯ</p>");
				    }else if($(this).hasClass('lang-jp')){
				      	сhangeFlag('lang-jp', "<p>ЯПОНИЯ</p>");
				    }else if($(this).hasClass('lang-sp')){
				     	сhangeFlag('lang-sp', "<p>Испания</p>");
				    }else if($(this).hasClass('lang-po')){
				      	сhangeFlag('lang-po', "<p>ПОРТУГАЛИЯ</p>");
				    }else if($(this).hasClass('lang-sa')){
				      	сhangeFlag('lang-sa', "<p>САУДОВСКАЯ АРАВИЯ</p>");
				    }else if($(this).hasClass('lang-tu')){
				      	сhangeFlag('lang-tu', "<p>ТУРЦИЯ</p>");
					}else if($(this).hasClass('lang-cz')){
				      	сhangeFlag('lang-cz', "<p>ЧЕХИЯ</p>");
				    }else if($(this).hasClass('lang-in')){
				      	сhangeFlag('lang-in', "<p>ИНДИЯ</p>");
				    }else if($(this).hasClass('lang-ind')){
				     	сhangeFlag('lang-ind', "<p>ИНДОНЕЗИЯ</p>");
				    }else if($(this).hasClass('lang-is')){
				      	сhangeFlag('lang-is', "<p>ИЗРАИЛЬ</p>");
				    }else if($(this).hasClass('lang-it')){
				      	сhangeFlag('lang-it', "<p>ИТАЛИЯ</p>");
				    }else if($(this).hasClass('lang-ko')){
				      	сhangeFlag('lang-ko', "<p>КОРЕЯ</p>");
				    }else if($(this).hasClass('lang-pol')){
				      	сhangeFlag('lang-pol', "<p>ПОЛЬША</p>");
				    }else if($(this).hasClass('lang-th')){
				      	сhangeFlag('lang-th', "<p>ТАЙЛАНД</p>");
				    }else if($(this).hasClass('lang-se')){
				      	сhangeFlag('lang-se', "<p>СЕРБИЯ</p>");
				    }else{сhangeFlag('lang-ru', "<p>РОССИЯ</p>");
				};

		    	$(".language-dropdown").removeClass("open");
		    });
	});