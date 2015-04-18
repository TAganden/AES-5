$(document).ready(function($) {
	$('.topright-elements-box').hide();

	$('.settings-trigger').click(function (e) {
		e.preventDefault();
		$('.topright-elements-box').show();
	});
});