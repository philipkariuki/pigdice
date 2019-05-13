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


	function player(name) {
		this.playerz = name;
	}
	var name1 = new player("")
	var name2 = new player("")



	$(document).ready(function () {
		$("#start").click(() => {
			var name1 = $("input:text#cheza1").val();
			$("#player1").text("P1: " + name1);

			var name2 = $("input:text#cheza2").val();
			$("#player2").text("P2: " + name2);

			$("#turn2").hide();
			$("#holdTwo").hide();
		});
    });
    
    