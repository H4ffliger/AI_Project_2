function LevelSetup(){
	var squares = [];


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

	this.showSquares = function(){
		for(var s = squares.length -1; s >= 0; s--){
			squares[s].show();
		}
	}
}