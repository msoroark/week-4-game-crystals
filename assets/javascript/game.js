//Variables
var game = {
	wins: 0,
	loss: 0,
	goalNum: pickedNum(19, 120),
	blueVal: pickedNum(1, 12),
	greenVal: pickedNum(1, 12),
	purpleVal: pickedNum(1, 12),
	orangeVal: pickedNum(1, 12),
	score: 0,
	resetScore: function() {
			game = {
		goalNum: pickedNum(19, 120),
		blueVal: pickedNum(1, 12),
		greenVal: pickedNum(1, 12),
		purpleVal: pickedNum(1, 12),
		orangeVal: pickedNum(1, 12),
		score: 0,
	}

	$('#number_to_guess').html(game.goalNum);
	$('#total_score').html(game.score);
	}
}


$('#number_to_guess').html(game.goalNum);

function pickedNum(min, max) {
  return [Math.floor(Math.random() * (max - min) + min)];
}
//assign crystals Value.

// function resetScore(){
// 	game = {
// 		goalNum: pickedNum(19, 120),
// 		blueVal: pickedNum(1, 12),
// 		greenVal: pickedNum(1, 12),
// 		purpleVal: pickedNum(1, 12),
// 		orangeVal: pickedNum(1, 12),
// 		score: 0,
// 	}

// 	$('#number_to_guess').html(game.goalNum);
// 	$('#total_score').html(game.score);

// }

function checkStatus()	{ 

	if (game.score == parseInt(game.goalNum)) {
	game.wins += 1;
	$('#wins').html(game.wins);
	console.log(game.wins);
	game.resetScore()
	}

	if (parseInt(game.score) > parseInt(game.goalNum)) {
	game.loss += 1;
	$('#losses').html(game.loss);
	console.log(game.loss);
	game.resetScore()
	}
}

function onClick(id, value) {

	$(id).on('click', function() {
	game.score += parseInt(value);
	$('#total_score').html(game.score);
	console.log(value);
	checkStatus();
	});
}
//assign crystals Value. 

onClick('#blue', game.blueVal);
onClick('#purple', game.purpleVal);
onClick('#green', game.greenVal);
onClick('#orange', game.orangeVal);
	


// $("#blue").on('click', function() {
// 	game.score += parseInt(game.blueVal);
// 	$('#total_score').html(game.score);
// 	console.log(game.blueVal);
// 	});

// $("#purple").on('click', function() {
// 	game.score += parseInt(game.purpleVal);
// 	$('#total_score').html(game.score);
// 	console.log(game.purpleVal);
// 	});

// $("#green").on('click', function() {
// 	game.score += parseInt(game.greenVal);
// 	$('#total_score').html(game.score);
// 	console.log(game.greenVal);
// 	});

// $("#orange").on('click', function() {
// 	game.score += parseInt(game.orangeVal);
// 	$('#total_score').html(game.score);
// 	console.log(game.orangeVal);

// 	});


//when crystals are clicked, add value to score. between 1-12
//add values of crystals(score) until >goal. 


//if greater than goal, add one to loss, gems get new values, goal gets new number.
//if equal add one to win, gems get new values, goal gets new number.
