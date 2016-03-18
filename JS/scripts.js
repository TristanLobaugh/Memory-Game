$(document).ready(function(){
	var moves = 0;
	var wins = 0;
	var games = 0;
	var cards = [
		"<img src='img/monsters-01.png'>",
		"<img src='img/monsters-02.png'>",
		"<img src='img/monsters-03.png'>",
		"<img src='img/monsters-04.png'>",
		"<img src='img/monsters-05.png'>",
		"<img src='img/monsters-06.png'>",
		"<img src='img/monsters-07.png'>",
		"<img src='img/monsters-08.png'>",
		"<img src='img/monsters-09.png'>",
		"<img src='img/monsters-11.png'>",
		"<img src='img/monsters-13.png'>",
		"<img src='img/monsters-14.png'>",
		"<img src='img/monsters-15.png'>",
	];
	console.log(cards[0]);
	var gridSize;
	var gameTiles;
	var gridArray;
	var rowSize;

	$("input").click(function(){
		var dif = $(this).val();
		if(dif == "easy"){
			rowSize = 5;
			gridSize = rowSize * 2;
		}else if(dif == "med"){
			rowSize = 5;
			gridSize = rowSize * 4;
		}else if(dif == "hard"){
			rowSize = 7;
			gridSize = rowSize * 4;
		}
		$("#button-bucket").toggle();
		gameTiles = cards.slice(0,(gridSize/2));
		gridArray = $.merge(gameTiles, gameTiles);

		//shuffle here

		//place here
		for(var i = 0; i < gridArray.length; i++){
			var html = '<div class="mg-tile">';
					html += '<div class="mg-tile-inner unmatched flipped">';
						html += '<div class="mg-tile-outside"></div>';
						html += '<div class="mg-tile-inside">' + gridArray[i] + '</div>';
					html += '</div>';
				html += '</div>';
				$("#mg-contents").append(html);	
		}

	});














});












