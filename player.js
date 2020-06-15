class Player{

	constructor(x, y, brain){
	this.move = [];
	this.y = 200;
	this.x = 500;
	this.rotation = 0;
	this.velocityX = 0;
	this.velocityY = 0;
	this.size = 32;
	this.score = 0;
	this.fitness = 0;
	this.seeDistance = [];
	this.seeObject = [];
	this.position = createVector(x, y);
	

	if(brain){
		this.brain = brain.copy();
	}
	else{
		this.brain = new NeuralNetwork(10,6,8,6,1);
	}
}


	show(){
    	push();
    	translate(this.position.x, this.position.y);
		stroke(255);
		fill(255, 40);
		ellipse(this.x, this.y, this.size*2, this.size);
		pop();
	}

	mutate(mutateRate){
		this.brain.mutate(mutateRate);
	}


	see(){
		this.seeDistance[0] = 

	}


	think(){


		var inputs = [];

		inputs[0] = this.y / height;
		inputs[1] = closest.x / width;
		inputs[2] = closest.top / height;
		inputs[3] = this.velocity / 16;
		move = [];
		output = this.brain.predict(inputs);
		move = output;
	}

	collision(){
		this.y += this.velocity;

		this.velocity += 0.5;

		if(this.velocity > 16){
			this.velocity = 16;
		}

		if(this.y > height - this.size/2){
			this.y = height - this.size/2;
		}

		this.score ++;
	}

	move(){
		if(move[0]){
			this.
		}
		this.velocity = -14;
	}
}