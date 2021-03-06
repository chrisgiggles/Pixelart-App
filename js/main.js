var $container = $('#container');
var color = '#ff0900';
var grid = 24;
var clickdown = false;

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

//Draw
$('#container').mousedown(function() {
	clickdown = true;
});
$('#container').mouseup(function() {
	clickdown = false;
});

$('#container').delegate('div','mousemove', function(){
	var that = $(this);

	if(clickdown === true) {
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

//Disable Dragging
$(document).bind("dragstart", function(event) {
  event.preventDefault();
});

createGrid(grid);

//Colorpicker
$('.minicolorpicker').minicolors({
	inline: true,
	control: 'brightness',
	changeDelay: 50,
	change: function(hex) {
		color = hex;
	}
});