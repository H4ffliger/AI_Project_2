function LevelSetup(){
	var squares = [];
	var fruitsAmont = TOTAL_POP;
	var fruits = [];
	var playerScored = [];



	this.createSquares = function(){
		squares.push(new Square(0, 0, 1000, 50));
		squares.push(new Square(0, 0, 50, 1000));
		squares.push(new Square(950, 0, 50, 1000));
		squares.push(new Square(0, 950, 1000, 50));
	}

	this.createFruits = function(){;
		fruits = [];
		for(var s = fruitsAmont -1; s >= 0; s--){
			var fx = random(50, 950);
			var fy = random(50, 400);
			if(levelManager.squareHitCheck(createVector(fx, fy)) == false){
				fruits.push(new Square(fx, fy, 50, 50, true, s));
			}
			else{
				s ++;
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


	this.fruitsHitCheck = function(playerPos, player, sID){
		for(var s = fruits.length -1; s >= 0; s--){
			if(fruits[s].hits(playerPos, sID)){
				if(player){
					fruits.splice(s,1);
				}
				return true;
			}		
			
		}
		return false;
	}
}