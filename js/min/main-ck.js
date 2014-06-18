var $container = $('#container');
var color = 'black';
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
	$('select[name="colorpicker"]').simplecolorpicker({
	  picker: false,
	  theme: 'regularfont'
	}).on('change', function() {
	  color = $('select[name="colorpicker"]').val();
	});
	
	//Draw
	$('#container').delegate('div','click', function(){
		var that = $(this);
		that.css('background',color);
	});

	//Clear
	var clearAll = function() {
		$container.children().removeClass('pixel');
	};

	$('#clear').on('click',function() {
		clearAll();
		newGrid();
	});

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
