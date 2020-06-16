class Player{

	constructor(x, y, i, brain){
	this.moveOutput = [];
	this.rotation = 0;
	this.size = 32;
	this.viewLength = 250;
	this.speed = 1;
	this.score = 10;
	this.fitness = 0;
	this.seeDistance = [];
	this.seeObject = [];
	this.position = createVector(x, y);
	this.inputs = [];
	this.id = i;

	if(brain){
		this.brain = brain.copy();
	}
	else{
		this.brain = new NeuralNetwork(11,11,11,2);
	}
}


	show(){
    	push();
    	translate(this.position.x, this.position.y);
    	strokeWeight(3);
    	stroke(0, 255, 0, 125);


    	//0 Degrees
    	for(var j = 0; j < 5; j++){
    		var dx = this.viewLength * cos(this.rotation + j *-45);
    		var dy = this.viewLength * sin(this.rotation + j *-45);
    		line(0,0, dx, dy);
    	}

		stroke(255);
		stroke(255, 255);
		fill(255, 40);
		ellipse(0,0, this.size*1, this.size*1);
		

		//Show red line when player sees wall
		for(var j = 0; j < 5; j++){
			if(this.inputs[j] != this.viewLength){
    			var dx = this.inputs[j] * cos(this.rotation + j *-45);
    			var dy = this.inputs[j] * sin(this.rotation + j *-45);
    			if(this.inputs[j+5] == 0){
    				stroke(255, 0, 0, 125);
    			}
    			else{
    				stroke(0, 0, 255, 125);
    			}
    			line(0,0, dx, dy);
    		}
    	}
    	pop();
	}

	mutate(mutateRate){
		this.brain.mutate(mutateRate);
	}


	see(){
		this.inputs = [];
		for(var i = 0; i < 10; i++){
			this.inputs[i] = 0;
		}

		for(var i = 0; i < 5; i++){
			this.inputs[i] = this.viewLength;
		}

		for(var t = this.viewLength; t >= 0; t-=20){
			for(var j = 0; j < 5; j++){
    			var dx = t * cos(this.rotation + j *-45);
    			var dy = t * sin(this.rotation + j *-45);
    			var testVector = createVector(this.position.x +dx, this.position.y + dy);
    			if(levelManager.squareHitCheck(testVector)){
    				this.inputs[j] = t;
    				this.inputs[j+5] = 0;
    			}
    		}
    	}

    	for(var t = this.viewLength; t >= 0; t-=20){
			for(var j = 0; j < 5; j++){
    			var dx = t * cos(this.rotation + j *-45);
    			var dy = t * sin(this.rotation + j *-45);
    			var testVector = createVector(this.position.x +dx, this.position.y + dy);
    			if(levelManager.fruitsHitCheck(testVector, false, this.id)){
    				if(t < this.inputs[j]){
    				this.inputs[j] = t;
    				this.inputs[j+5] = 1;
    			}
    			}
    		}
    	}

	}

	think(){
		//Inputs 0-4 = distance
		//Inputs 5-9 = object // 0 = Wall // 1 = Fruit
		//inputs 10 = rotation
		//this.inputs[10] = this.rotation;
		
		this.inputs[10] = this.rotation;


		this.moveOutput = [];
		//Output 0 = rotation change
		//output 1 = speed
		this.moveOutput = this.brain.predict(this.inputs);
	}

	collision(playerSelf){
		if(levelManager.squareHitCheck(this.position)){
			score -= 10;
			return true;
		}
		if(levelManager.fruitsHitCheck(this.position, true, this.id)){
			this.score += 1000;
			return false;
		}
		//this.score ++;
		return false;
	}

	move(){

		//update position
		var speedX = this.moveOutput[1] * cos(this.rotation -90);
    	var speedY = this.moveOutput[1] * sin(this.rotation -90);
		var velocity = createVector(speedX, speedY);
    	this.position.add(velocity);


    	this.rotation += this.moveOutput[0]*4-2;
		
	}
}