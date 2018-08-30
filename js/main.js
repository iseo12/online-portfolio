$(document).ready(function(){
	$('.projects').hover( function() {
        $(this).find('figcaption').fadeIn(300);
    }, function() {
        $(this).find('figcaption').fadeOut(100);
    });
		$('.menuContainer').on('click', function() {
			$('.icon_bar, .menuContainer, .modal, .navigation li').toggleClass('open');
		});
});

var navHeight = $('.top_bar').outerHeight();
console.log(navHeight);

$('ul li').click(function (e) {
	$(this).addClass('selected').siblings().removeClass('selected');
	var targetContent = $(this).data('navigation-item');
	var topPosition = $('.content-' + targetContent).offset().top;
	console.log(topPosition);
	console.log(targetContent);
	$('body,html').animate({
		scrollTop: topPosition
	});
	$('.icon_bar, .menuContainer, .modal, .navigation li').toggleClass('open')
});
