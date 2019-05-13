	//Front-end logic

	// mouseOver display hidden div
	$(document).ready(function () {
		$('.description-wwd').mouseover(function () {
			$(this).children(".icon-wwd").hide();
			$(this).children(".textwwd").show();
		}).mouseout(function () {
			$(this).children(".icon-wwd").show();
			$(this).children(".textwwd").hide();
		});
	});


	