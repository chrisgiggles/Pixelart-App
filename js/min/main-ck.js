var $container = $('#container');
var color = '#ff0900';
var grid = 24;

//Create the pixel grid
var createGrid = function(n) {
	var canvasLimit = Math.pow((768 / n),2);

  for (var i = 0; i < canvasLimit; i++) {
  	var $newdiv = $('<div></div>');
		$container.append($newdiv);
	}

	$('#container div').height(grid - 2).width(grid - 2);
};

//Clear grid and reinitialize
var newGrid = function() {
	$container.children().remove();
	createGrid(grid);
};

$(document).ready(function() {

	createGrid(grid);

	//Colorpicker
	$('.minicolorpicker').minicolors({
		inline: true,
		control: 'brightness',
		changeDelay: 50,
		change: function(hex) {
			console.log(hex)
			color = hex;
		}
	});
	
	//Draw
	var clickdown = false;
	
	$('#container').mousedown(function() {
		clickdown = true;
		console.log(clickdown);
	});
	$('#container').mouseup(function() {
		clickdown = false;
		console.log(clickdown);
	});
	
	$('#container').delegate('div','mousemove', function(){
		var that = $(this);

		if(clickdown === true) {
			console.log("inside");
			that.css('background',color);
		}
		
	});

	//Clear
	var clearAll = function() {
		$container.children().removeClass('pixel');
	};

	$('#clear').on('click',function() {
		clearAll();
		newGrid();
	});

	//Pixel size
	$('#largeGrid').on('click',function() {
		grid = 32;
		newGrid();
	});

	$('#mediumGrid').on('click',function() {
		grid = 24;
		newGrid();
	});

	$('#smallGrid').on('click',function() {
		grid = 16;
		newGrid();
	});

});
