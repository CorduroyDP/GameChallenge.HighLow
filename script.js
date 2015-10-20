var Cell = function(e) {
	this.element = e;
}

var markerX = "X";
var markerO = "O";
var marker = markerX;
var plays = 0;

var changeTurn = function() {
	plays ++;
	if(marker == markerX) {
		marker = markerO;
	} else {
		marker = markerX;
	}
};

Cell.prototype.takeTurn = function() {
	this.element.addClass(marker);
	this.element.text(marker);
	checkForWin();
	changeTurn();
};

var checkForWin = function() {
	var wins = [
	[0,1,2], [3,4,5], [6,7,8],
	[0,3,6], [1,4,7], [2,5,8],
	[0,4,8], [2,4,6]
	]
	for (var i = 0; i < wins.length; i++) {
		if( $('#' + wins[i][0]).text() === marker &&
		$('#' + wins[i][1]).text() === marker &&
		$('#' + wins[i][2]).text() === marker ) {
			alert(marker + " wins");
			resetGame();
		}
		if (plays === 8) {
			alert("draw");
			resetGame();
			break;
		};
	};
};

var resetGame = function() {
	location.reload();
};

Cell.prototype.listen = function() {
	var that = this;
	this.element.on('click', function(){
		that.takeTurn();
		$(this).off('click');
	});
};

$(document).ready(function() {
	$('.cell').each( function() {
		var cell = new Cell($(this));
		cell.listen();
	})
});
