$(document).ready(function($) {
	console.log("Just a change");
	$('.topright-elements-box').hide();

	$('.settings-trigger').click(function (e) {
		e.preventDefault();
		$('.topright-elements-box').show();
	});
});