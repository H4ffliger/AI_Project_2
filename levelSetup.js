function LevelSetup(){
	var squares = [];


	this.createSquares = function(){
		console.log("Create the squares.");
		squares.push(new Square(0, 0, 50, 800));
		squares.push(new Square(900, 0, 50, 800));
		squares.push(new Square(50, 200, 300, 50));
		squares.push(new Square(600, 200, 300, 50));
		squares.push(new Square(50, 400, 600, 50));
		squares.push(new Square(500, 700, 400, 50));
	}

	this.showSquares = function(){
		for(var s = squares.length -1; s >= 0; s--){
			console.log("Draw the squares.");
			squares[s].show();
		}
	}
}