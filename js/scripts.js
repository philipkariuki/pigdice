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
    
    //Back-end logic
	var round1Total = 0
	var round2Total = 0
	var totalScore1 = 0
	var totalScore2 = 0
	var hold1 = 0
    var hold2 = 0
    
    // Front-end logic 	
	$(document).ready(function () {
		$("#turn1").click(() => {
			var random1 = Math.floor((Math.random() * 6) + 1);
			//var ts1 = round1Total + totalScore1 + hold1;
			$("#outputOne").text("You rolled: " + random1);

			if (random1 === 1) {
				//round1Total = 0;
				alert("YOU ROLLED 1! END OF TURN")
				//$("#roundOne").text("Round total: " + round1Total);
				$("#turn1").hide();
				$("#holdOne").hide();
				$("#turn2").show();
				$("#holdTwo").show();
			} else {

				round1Total = random1 + round1Total;
				totalScore1 += random1;
				$("#roundOne").text("Round total: " + round1Total);

			}
			$("#total1Score").text("Total score: " + totalScore1);
			if (totalScore1 >= 100) {
				$("#turn2").hide();
				$("#holdTwo").hide();
				$("#turn1").hide();
				$("#holdOne").hide();
				alert("YOU WON!")
			}
		});
	});

	$(document).ready(function () {
		$("#holdOne").click(() => {
			hold1 = round1Total + totalScore1 + hold1;
			round1Total = 0;
			$("#total1Score").text("Total score: " + totalScore1);
			$("#turn1").hide();
			$("#holdOne").hide();
			$("#turn2").show();
			$("#holdTwo").show();
			if (totalScore1 >= 100) {
				alert("YOU WON!")
			}
		});
	});


	$(document).ready(function () {
		$("#turn2").click(() => {
			var random2 = Math.floor((Math.random() * 6) + 1);
			var ts = round2Total + totalScore2 + hold2;
			$("#outputTwo").text("You rolled: " + random2);

			if (random2 === 1) {
				//round2Total = 0;
				alert("YOU ROLLED 1! END OF TURN")
				$("#roundTwo").text("Round total: " + round2Total);
				$("#turn2").hide();
				$("#holdTwo").hide();
				$("#turn1").show();
				$("#holdOne").show();
			} else {
				round2Total = random2 + round2Total;
				totalScore2 += random2;
				$("#roundTwo").text("Round total: " + round2Total);
			}
			$("#total2Score").text("Total score: " + totalScore2);
			if (totalScore2 >= 100) {
				$("#turn2").hide();
				$("#holdTwo").hide();
				$("#turn1").hide();
				$("#holdOne").hide();
				alert("YOU WON!")
			}
		});
	});

	$(document).ready(function () {
		$("#holdTwo").click(() => {
			hold2 = round2Total + totalScore2 + hold2;
			round2Total = 0;
			$("#total2Score").text("Total score: " + totalScore2);
			$("#turn2").hide();
			$("#holdTwo").hide();
			$("#turn1").show();
			$("#holdOne").show();
			if (totalScore2 >= 100) {
				alert("YOU WON!")
			}
		});
	});