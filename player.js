class Player{

	constructor(x, y, brain){
	this.moveOutput = [];
	this.rotation = 0;
	this.size = 32;
	this.viewLength = 200;
	this.speed = 0;
	this.score = 0;
	this.fitness = 0;
	this.seeDistance = [];
	this.seeObject = [];
	this.position = createVector(x, y);
	

	if(brain){
		this.brain = brain.copy();
	}
	else{
		this.brain = new NeuralNetwork(11,11,15,11,2);
	}
}


	show(){
    	push();
    	translate(this.position.x, this.position.y);
    	strokeWeight(3);
    	stroke(0, 255, 0);


    	//0 Degrees
    	for(var j = 0; j < 5; j++){
    		var dx = this.viewLength * cos(this.rotation + j *-45);
    		var dy = this.viewLength * sin(this.rotation + j *-45);
    		line(0,0, dx, dy);
    	}

		stroke(255);
		fill(255, 40);
		ellipse(0,0, this.size*1, this.size*1);
		pop();
	}

	mutate(mutateRate){
		this.brain.mutate(mutateRate);
	}


	see(){
		this.seeDistance[0] = 1;
	}


	think(){

		var inputs = [];
		inputs[0] = this.rotation;
		for(var i = 1; i < 11; i++){
			inputs[i] = this.rotation;
		}

		this.moveOutput = [];
		this.moveOutput = this.brain.predict(inputs);
	}

	collision(){
		this.score ++;
	}

	move(){

		//update position
		var speedX = this.speed * cos(this.rotation + -90);
    	var speedY = this.speed * sin(this.rotation + -90);
		var velocity = createVector(speedX, speedY);
    	this.position.add(velocity);
    	console.log("Moving the player" + speedY);

		/*if(moveOutput[0]){
			this.w;
		}
		this.velocity = -14;*/
	}
}