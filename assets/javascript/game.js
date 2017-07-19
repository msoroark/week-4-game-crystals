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
		this.goalNum = pickedNum(19, 120);
		this.blueVal = pickedNum(1, 12),
		this.greenVal = pickedNum(1, 12),
		this.purpleVal = pickedNum(1, 12),
		this.orangeVal = pickedNum(1, 12),
		this.score = 0;


		$('#wins').html(game.wins);
		$('#losses').html(game.loss);
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
	game.wins++;
	$('#wins').html(game.wins);
	console.log(game.wins);
	game.resetScore();
	console.log(game);
	}

	if (parseInt(game.score) > parseInt(game.goalNum)) {
	game.loss++;
	$('#losses').html(game.loss);
	console.log(game.loss);
	game.resetScore()
	console.log(game);
	}
}

function onClick(id) {
	var value = 0;
	if(id === "#blue") {
		value = game.blueVal;
	} else if (id === "#purple") {
		value = game.purpleVal;
	} else if (id === "#green") {
		value = game.greenVal;
	} else if (id === "#orange") {
		value = game.orangeVal
	}

	$(id).on('click', function() {
	game.score += parseInt(value);
	$('#total_score').html(game.score);
	console.log(value);
	checkStatus();
	});
}
//assign crystals Value. 

onClick('#blue');
onClick('#purple');
onClick('#green');
onClick('#orange');
	


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
