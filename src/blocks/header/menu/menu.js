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