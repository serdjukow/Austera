function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
	}
	ibg();


//===================== Menu Burger====================================
	$(document).ready(function() {
		$('.header__burger').click(function(event) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
	});(jQuery);
//===================== Menu Burger====================================