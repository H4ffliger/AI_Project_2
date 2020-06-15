class Player{

	constructor(x, y, brain){
	this.moveOutput = [];
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
		this.brain = new NeuralNetwork(10,6,8,6,2);
	}
}


	show(){
    	push();
    	translate(this.position.x, this.position.y);
    	rotate(this.rotation);
    	stroke(0, 255, 0);
    	line(-100, 0, 0, 0);
    	line(-75, -75, 0, 0);
    	line(0, -100, 0, 0);
    	line(75, -75, 0, 0);
    	line(100, 0, 0, 0);

		stroke(255);
		fill(255, 40);
		ellipse(0,0, this.size*1, this.size*1.2);
		pop();
	}

	mutate(mutateRate){
		this.brain.mutate(mutateRate);
	}


	see(){
		this.seeDistance[0] = 1;
	}


	think(){

		var inputs = [1,1,1,1,1, 1,1,1,1,1];
		this.moveOutput = [];
		this.moveOutput = this.brain.predict(inputs);
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
		/*if(moveOutput[0]){
			this.w;
		}
		this.velocity = -14;*/
	}
}