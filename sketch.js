const TOTAL_POP = 10;
var players = [];
var savedPlayers = [];
var score = 0;
var generation = 0;
var total_fitness = 0;
var slider;
var levelManager;
var timerMax = 500;
var timer = timerMax;


function setup (){
	angleMode(DEGREES);
	createCanvas(1000, 1000);
	slider = createSlider(1, 500, 1);
	for(var i = 0; i < TOTAL_POP; i++){
		players[i] = new Player(300, 720);
	}

	levelManager = new LevelSetup();
	levelManager.createSquares();
	levelManager.createFruits();
}



function draw(){


	for(var c = 0; c < slider.value(); c ++){
	for(var j = players.length -1; j >= 0; j--){
		if(players[j].collision()){
			savedPlayers.push(players.splice(j, 1)[0]);
			}
	}
	

	for(var i = players.length -1; i >= 0; i--){
		players[i].see();
		players[i].think();
		players[i].move();
		//players[i].collision();

	}
	if(timer == 0){
		for(var j = players.length -1; j >= 0; j--){
			savedPlayers.push(players.splice(j, 1)[0]);
		}
	}

	if(players.length == 0){
		score = 0;
		nextGeneration();
		levelManager.createFruits();
		timer = timerMax;
		break;
	}
	timer --;
	}

	//Drawing
	background(51);
	levelManager.showSquares();
	levelManager.showFruits();
	for(var i = players.length -1; i >= 0; i--){
		players[i].show();
	}

	fill(255, 150)
	textSize(25);
	text("Score: " + score, 100, 20);
	text("Generation: " + generation, 100, 60);	
	text("Fitness: " + total_fitness, 100, 100);
	text("Timer: " + timer, 100, 140)
	text("Speed: " + int(slider.value()), 100, 180);	
}
