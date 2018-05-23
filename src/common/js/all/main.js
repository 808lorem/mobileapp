;
$(document).ready(function() {
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
$('#slideSlick').slick({
	dots: true
});
let btnMenu = $('#menuBtn'),
	navMenu = $('#menuNav'),
	crossMenu = $('#menuClose');

btnMenu.click(function () {
	$(this).css('display', 'none');
	navMenu.toggleClass('active');
});

crossMenu.click(function () {
	btnMenu.css('display', '');
	navMenu.toggleClass('active');
});

let menuItems = $('.menu__item'),
	listMenu = $('#menuList > a'),
	listSmMenu = $('#menuSmList > a'),
	activeHref = '';

menuItems.click(function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	activeHref = $(this).attr('href');
	defineParent($(this));
});

function defineParent(e) {
	let parentName = e.parent().attr('id');
	switch(parentName) {
		case 'menuSmList':
			duplClass(listMenu);
			break;

		case 'menuList':
			duplClass(listSmMenu);
			break;
	}
}

function duplClass(e) {
	let items = e;

	for(let i = 0; i < items.length; i++) {
	    if(items.eq(i).attr('href') == activeHref) {
	        items.eq(i).siblings().removeClass('active');
	        items.eq(i).addClass('active');
	        return;
	    }
	}
}

let scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {

		// Function. Custom easing pattern
		// If this is set to anything other than null, will override the easing option above

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	},

	// Callback API
	before: function (anchor, toggle) {}, // Callback to run before scroll
	after: function (anchor, toggle) {} // Callback to run after scroll
});
let pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

let userName = $('#userName'),
	userEmail = $('#userEmail'),
	userMessage = $('#userMessage');


$('#submitForm').click(function () {
	let errorsForm = 0;

	if(userName.val() !== '') {
		userName.removeClass('contact-form__error');
	} else {
		userName.addClass('contact-form__error');
		errorsForm++;
	}

	if(pattern.test(userEmail.val())) {
		userEmail.removeClass('contact-form__error');
	} else {
		userEmail.addClass('contact-form__error');
		errorsForm++;
	}

	if(userMessage.val() !== '') {
		userMessage.removeClass('contact-form__error');
	} else {
		userMessage.addClass('contact-form__error');
		errorsForm++;
	}
	if(errorsForm > 0) {
		event.preventDefault();
	}

});

$('.contact-form__frame').focus(function () {
	$(this).removeClass('contact-form__error');
});




});