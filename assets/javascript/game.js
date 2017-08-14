
	var randomNumber = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
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
		numberToGuess = [Math.floor(Math.random() + randomNumber.length)];
		document.querySelector("#numberToGuess").html(numberToGuess);
};
var updateGemValue1 = function () {
	gemValue1[Math.floor(Math.random() * gemValues.length)];
}
var updateGemValue2 = function () {
	gemValue1[Math.floor(Math.random() * gemValues.length)];
}
var updateGemValue3 = function () {
	gemValue1[Math.floor(Math.random() * gemValues.length)];
}
var updateGemValue4 = function () {
	gemValue1[Math.floor(Math.random() * gemValues.length)];
}
var updatetotalScore = function () {

}
var reset = function () {
	numberToGuess = 0;
	totalScore = 0;
	gemValue1 = 0;
	gemValue2 = 0;
	gemValue3 = 0;
	gemValue4 = 0;
};

updateNumberToGuess ();
updateGemValue1 ();
updateGemValue2 ();
updateGemValue3 ();
updateGemValue4 ();

console.log (numberToGuess)

$(document).on("click", "button", function () { 

		if ($(this).hasId("#crystal1")) {
		
		totalScore += $(this).attr("value");
		};
		if ($(this).hasId("#crystal2")) {
		
		totalScore += $(this).attr("value");
		};
		if ($(this).hasId("#crystal3")) {
		
		totalScore += $(this).attr("value");
		};
		if ($(this).hasId("#crystal4")) {
			
		totalScore += $(this).attr("value");
		};
	});


	if (totalScore = numberToGuess) {
		wins++;
		document.querySelector("#wins").html(wins);
		reset ();
	}	

	if (totalScore > numberToGuess) {
		losses++;
		document.querySelector("#losses").html(losses);
		reset ();
	}








