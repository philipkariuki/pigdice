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



$(document).ready(function () {
    $('#begin').click(function () {
        var ply1 = $("#cheza1").val(); //gets value of first text input field
        $("#player1").text("P1: " + ply1); // fixes the received input on h2 after 1P

        var ply2 = $("#cheza2").val(); //gets value of second text input field
        $("#player2").text("P2: " + ply2); // fixes the received input on h2 after 2P
        //hides ROLL AND HOLD BEFORE CLICKING BEGIN
        $("#turn1").show();
        $("#hold1").show();
    });
});

//Back-end logic

// Sets default values before roll
var round1Total = 0
var totalScore1 = 0


// Front-end logic 	
$(document).ready(function () {
    $("#turn1").click(function () { //on clicking button ROLL of id=turn1
        var random1 = Math.floor((Math.random() * 6) + 1); //generates random int btw 2-6
        $("#result1").text("You rolled: " + random1); //concats random1 to span id result1

        if (random1 === 1) { //random1 equals to 1
            totalScore1 = totalScore1 - round1Total;
            round1Total = 0;
            alert("YOU ROLLED 1! END OF TURN")
            $("#round1").text("Round total: " + round1Total);
            $("#turn1").hide(); //disables P1 ROLL and HOLD buttons
            $("#hold1").hide();
            $("#turn2").show(); //displays P2 ROLL and HOLD buttons
            $("#hold2").show();
        } else { // if random1 equals 2 to 6

            round1Total = random1 + round1Total; //keeps adding generated random1 to previously generated random1 if not 1
            totalScore1 = random1 + totalScore1; //keeps adding new random1 to previously saved totalScore1 if not 1
            $("#round1").text("Round total: " + round1Total); //concats value of round1Total to span id round1

        }
        $("#total1").text("Total score: " + totalScore1); //if totalScore1 equals to or is greater than 100, alerts win
        if (totalScore1 >= 100) {
            $("#turn2").hide();
            $("#hold2").hide();
            $("#turn1").hide();
            $("#hold1").hide();
            alert("YOU WON!")
        }
    });
});

$(document).ready(function () {
    $("#hold1").click(function () {
        round1Total = 0;
        $("#turn1").hide();
        $("#hold1").hide();
        $("#turn2").show();
        $("#hold2").show();
    });
});

//Back-end logic

// Sets default values before roll
var round2Total = 0
var totalScore2 = 0


//Front-end
$(document).ready(function () {
    $("#turn2").click(function () {
        var random1 = Math.floor((Math.random() * 6) + 1);
        $("#result2").text("You rolled: " + random1);

        if (random1 === 1) {
            totalScore2 = totalScore2 - round2Total;
            round2Total = 0;
            alert("YOU ROLLED 1! END OF TURN")
            $("#round2").text("Round total: " + round2Total);
            $("#turn1").show();
            $("#hold1").show();
            $("#turn2").hide();
            $("#hold2").hide();
        } else {

            round2Total = random1 + round2Total;
            totalScore2 = random1 + totalScore2;
            $("#round2").text("Round total: " + round2Total);

        }
        $("#total2").text("Total score: " + totalScore2);
        if (totalScore2 >= 100) {
            $("#turn2").hide();
            $("#hold2").hide();
            $("#turn1").hide();
            $("#hold1").hide();
            alert("YOU WON!")
        }
    });
});

$(document).ready(function () {
    $("#hold2").click(function () {
        round2Total = 0;
        $("#turn1").show();
        $("#hold1").show();
        $("#turn2").hide();
        $("#hold2").hide();
    });
});