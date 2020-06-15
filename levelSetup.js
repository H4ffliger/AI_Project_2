function LevelSetup(){
	var squares = [];
	var fruitsAmont = 10;
	var fruits = [];
	var playerScored = [];



	this.createSquares = function(){
		squares.push(new Square(0, 0, 1000, 50));
		squares.push(new Square(0, 0, 50, 1000));
		squares.push(new Square(950, 0, 50, 1000));
		squares.push(new Square(50, 200, 300, 50));
		squares.push(new Square(650, 200, 300, 50));
		squares.push(new Square(50, 400, 600, 50));
		squares.push(new Square(550, 700, 400, 50));
		squares.push(new Square(0, 950, 1000, 50));
	}

	this.createFruits = function(){;
		fruits = [];
		for(var s = fruitsAmont -1; s >= 0; s--){
			var fx = random(50, 950);
			var fy = random(50, 950);
			if(levelManager.squareHitCheck(createVector(fx, fy)) == false){
				fruits.push(new Square(fx, fy, 50, 50, true));
			}
			else{
				s --;
			}
		}
	}

	this.showSquares = function(){
		for(var s = squares.length -1; s >= 0; s--){
			squares[s].show();
		}
	}

	this.showFruits = function(){
		for(var s = fruits.length -1; s >= 0; s--){
			fruits[s].show();
		}
	}

	this.squareHitCheck = function(playerPos){
		for(var s = squares.length -1; s >= 0; s--){
			if(squares[s].hits(playerPos)){
				return true;
			}
		}
		return false;
	}


	this.fruitsHitCheck = function(playerPos, player){
		for(var s = fruits.length -1; s >= 0; s--){
			if(fruits[s].hits(playerPos)){
				if(player){
					fruits.splice(s,1);
				}
				return true;
			}		
			
		}
		return false;
	}
}