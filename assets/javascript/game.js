
	var randomNumber = 100
	var gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	var wins = 0;
	var losses = 0;
	var numberToGuess = 0;
	var gemValue1 = 0;
	var gemValue2 = 0;
	var gemValue3 = 0;
	var gemValue4 = 0;	
	var totalScore = 0;

var updateNumberToGuess = function () {
		//numberToGuess = [Math.floor(Math.random() + randomNumber.length)] + 9;
		numberToGuess = 9 + Math.floor(Math.random() * 100);
		document.querySelector("#numberToGuess").innerHTML = "Your number to guess is: " + numberToGuess;
};
var updateGemValue1 = function () {
	gemValue1 = Math.floor(Math.random() * gemValues.length);
	$("#crystal1").attr("value", gemValue1);
};
var updateGemValue2 = function () {
	gemValue2 = Math.floor(Math.random() * gemValues.length);
	$("#crystal2").attr("value", gemValue2);
};
var updateGemValue3 = function () {
	gemValue3 = Math.floor(Math.random() * gemValues.length);
	$("#crystal3").attr("value", gemValue3);
};
var updateGemValue4 = function () {
	gemValue4 = Math.floor(Math.random() * gemValues.length);
	$("#crystal4").attr("value", gemValue4);
};
var updatetotalScore = function () {

}

var reset = function () {
	totalScore = 0;
	gemValue1 = 0;
	gemValue2 = 0;
	gemValue3 = 0;
	gemValue4 = 0;
	updateNumberToGuess();
};

// updateNumberToGuess();
// updateGemValue1();
// updateGemValue2();
// updateGemValue3();
// updateGemValue4();

updateNumberToGuess();
updateGemValue1();
updateGemValue2();
updateGemValue3();
updateGemValue4();

console.log(numberToGuess);

$(document).on("click", "button", function () { 

	console.log($(this).attr("value"));
	totalScore += parseInt($(this).attr("value"));
	document.querySelector("#totalScoreBox").innerHTML = "Your total score: " + totalScore;
	console.log(totalScore);
	if (totalScore == numberToGuess) {
		alert ("YOU WON! click ok to play again")
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
		document.querySelector("#totalScoreBox").innerHTML = "Your total score: " + totalScore;
	}	

	if (totalScore > numberToGuess) {
		losses++;
		alert ("You lost, sorry. Press ok to play again.")
		$("#losses").html("Losses: " + losses);
		reset();
		document.querySelector("#totalScoreBox").innerHTML = "Your total score: " + totalScore;
	}
});


	








