$(document).ready(function () {
	sal();

	$(document).on('click', '#mob', function () {
		$('#mob').toggleClass('rotate');
		$('.mob_nav_menu').toggleClass('shownav');
		$('#nav').toggleClass('fixed');
	});
});