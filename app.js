$('#login').on('click', function() {
	var loginGreet = G$('Branden', 'Builds');
	$('#logindiv').hide();
	loginGreet.setLang($('#lang').val()).dynamicGreeting('#greeting', true).log()
});