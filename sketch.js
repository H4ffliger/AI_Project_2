const TOTAL_POP = 1;
var players = [];
var savedPlayers = [];
var score = 0;
var generation = 0;
var total_fitness = 0;
var slider;

function setup (){
	angleMode(DEGREES);
	createCanvas(1000, 1000);
	slider = createSlider(1, 500, 1);
	for(var i = 0; i < TOTAL_POP; i++){
		players[i] = new Player(random(500), 800);
	}

}



function draw(){


	for(var c = 0; c < slider.value(); c ++){

	for(var j = players.length -1; j >= 0; j--){
		/*if(pipes[i].hits(players[j])){
			savedPlayers.push(players.splice(j, 1)[0]);
			}*/
	}
	

	for(var i = players.length -1; i >= 0; i--){
		players[i].see();
		players[i].think();
		players[i].move();
		players[i].collision();

	}


	if(players.length == 0){
		score = 0;
		nextGeneration();
		break;
	}
	}

	//Drawing
	background(51);
	for(var i = players.length -1; i >= 0; i--){
		players[i].show();
	}


	textSize(25);
	text("Score: " + score, 100, 20);
	text("Generation: " + generation, 100, 60);	
	text("Fitness: " + total_fitness, 100, 100);
	text("Speed: " + int(slider.value()), 100, 140);	


}
