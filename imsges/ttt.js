$('document').ready(function(){

	$('body').append('<a href="http://google.com">Перейти в Google!</a>');

	var p_clon;
	p_clon = $('p').clone();

	$('body').append(p_clon);


});