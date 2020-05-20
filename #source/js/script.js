$(document).ready(function() {
	var start_pos=$('#menu').offset().top;
	$(window).scroll(function(){
		if ($(window).scrollTop()>=start_pos) {
			if ($('#menu').hasClass()==false) $('#menu').addClass('change');
		}
		else $('#menu').removeClass('change');
	});
	});
	
(function($) {
$('.js-nav-menu-toggle').on('click', function() {
	$(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
});

$('html').on('click', function(e) {
	if(!$(e.target).closest('.js-nav-menu').length &&
		($('.js-nav-menu').hasClass('navigation-menu--open'))) {
			$('.js-nav-menu').removeClass('navigation-menu--open');
	}
});
})(jQuery);


// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 2000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;
  
   // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
   // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  
  if (lastId !== id) {
      lastId = id;
       // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
  }                   
});


//chat-------------------------------------------------------------------

document.querySelector(".massege").onclick = function chat() {	
	swal({
		title: "Servus!",
		text: "Herzlich Willkommen auf meiner Webseite!",
		imageUrl: 'img/12.jpeg'
	});
}
//chat-------------------------------------------------------------------