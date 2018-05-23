let headerPaddingTop = parseInt($('#header').css('padding-top')),
	headerMenu = $('#headerMenu'),
	closeIcon = $('.menu-sm__close__icon'),
	classSticky = 'sticky';

$(window).scroll(function () {
	if($(this).scrollTop() > headerPaddingTop) {
		headerMenu.addClass(classSticky);
		closeIcon.addClass(classSticky);
	} else  {
		headerMenu.removeClass(classSticky);
		closeIcon.removeClass(classSticky);
	}
});