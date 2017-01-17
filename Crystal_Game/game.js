//Variable for random number, total crystal amount, wins, and losses
var randomNumber;
var crystalTotal;
var win=0;
var loss=0;

//Display zero on HTML for wins, losses, and total score
$("#addWin").html(0);
$("#addLoss").html(0);
$("#yourTotalScore").html(0);

//Function 1: Starting the game
function crystalGame(){
	randomNumber = Math.floor(Math.random() * 120) + 19;
	$("#computerNumber").html(randomNumber);

//Random numbers for the four crystals
	crystalOne = Math.floor(Math.random() * 12) + 1;
	crystalTwo = Math.floor(Math.random() * 12) + 1;
	crystalThree = Math.floor(Math.random() * 12) + 1;
	crystalFour = Math.floor(Math.random() * 12) + 1;

//Setting the total to a number 0
	crystalTotal = 0;

//Crystal 01 on click function
	$("#crystal01").on("click", function(){
		crystalTotal = Number(crystalTotal) + Number(crystalOne);
		$("#yourTotalScore").html(crystalTotal);
		roundFinished()
	});

//Crystal 02 on click function
	$("#crystal02").on("click", function(){
		crystalTotal = Number(crystalTotal) + Number(crystalTwo);
		$("#yourTotalScore").html(crystalTotal);
		roundFinished()
	});

//Crystal 03 on click function
	$("#crystal03").on("click", function(){
		crystalTotal = Number(crystalTotal) + Number(crystalThree);
		$("#yourTotalScore").html(crystalTotal);
		roundFinished()
	});

//Crystal 04 on click function
	$("#crystal04").on("click", function(){
		crystalTotal = Number(crystalTotal) + Number(crystalFour);
		$("#yourTotalScore").html(crystalTotal);
		roundFinished()
	});
}
//Function: Results if you win or loss
//If you win, you get +1 for wins, round ends, and new round begins
function roundFinished(){
	if (crystalTotal == randomNumber){
		win++
		$("#addWin").html(win);
		alert("Congrats! You won! Continue playing.")
		//New round begins
		crystalTotal=0;
		$("#yourTotalScore").html(crystalTotal);
		Math.floor(Math.random() * 120) + 19;
		$("#computerNumber").html(randomNumber);
		crystalGame();
	};
//If you lose, you get +1 for losses, round ends, and new round begins
	if(crystalTotal > randomNumber){
		loss++
		$("#addLoss").html(loss);
		alert("Sorry! You lost. Try again.")
		//New round begins
		crystalTotal=0;
		$("#yourTotalScore").html(crystalTotal);
		Math.floor(Math.random() * 120) + 19;
		$("#computerNumber").html(randomNumber);
		crystalGame();
	};
}
crystalGame();