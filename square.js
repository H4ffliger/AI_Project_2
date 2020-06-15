

function Square(x,y,sizeX,sizeY){
	this.position = createVector(x, y);
	this.sizeX = sizeX;
	this.sizeY = sizeY;

	this.update = function(){

	}

	this.show = function(){
		fill(255, 50);
		rect(this.position.x, this.position.y, this.sizeX, this.sizeY);
	}

	this.hits = function(bird){
		if(bird.x > this.x && bird.x < this.x + this.size){
			if(bird.y < this.top || bird.y > this.top + this.gap){
				return true;
			}
		}
		return false;
	}

}