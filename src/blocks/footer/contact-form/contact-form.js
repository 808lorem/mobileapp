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


