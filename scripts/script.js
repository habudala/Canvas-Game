
//create canvas with JS
var canvas = document.createElement("canvas");
//create a contextvar so we can target it
var context = canvas.getContext("2d");
//set hard width and height
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// put background image on canvas
var bgImage = new Image();
bgImage.src = "images/background.png";

// create a hero image
var laz = new Image();
laz.src="images/hero.png";
var lazLoc = {x:100, y:100}

//create a monster image
var max = new Image();
max.src = "images/monster.png";
var maxLoc = {x: 350, y: 300}

//handler for our keypresses

var keysDown = [];
// we'll put in this object keys that are pressed
addEventListener("keydown", function(event){
	keysDown[event.keyCode] = true;
	// console.log(keysDown);
});

addEventListener("keyup", function(event){
	delete keysDown[event.keyCode];
});


var update = function(){


	

	// if 38 is in keysDown it means it's pressed
	if(38 in keysDown) {lazLoc.y -=1;}
	if(40 in keysDown) {lazLoc.y +=1;}
	if(37 in keysDown) {lazLoc.x -=1;}
	if(39 in keysDown) {lazLoc.x +=1;}
	// console.log(lazLoc);

	if (   lazLoc.x <= (maxLoc.x + 25 )
		&& lazLoc.x >= (maxLoc.x - 25)
		&& lazLoc.y <= (maxLoc.y + 25)
		&& lazLoc.y >= (maxLoc.y - 25))
		{ console.log("YOU FUCKED UP!!!");}
}

function draw (){
	//this is where we draw stuff
	context.drawImage(bgImage, 0, 0);
	context.drawImage(laz, lazLoc.x, lazLoc.y);
	context.drawImage(max, maxLoc.x, maxLoc.y);
	update();
	requestAnimationFrame(draw);

}
draw();

var value;
function enemy (){
	 value = Math.floor(Math.random()*2 + 1)

	if (value > 1){ value = "-"} else {value = "+"}

	maxLoc.x += Number(value + 20);
	maxLoc.y += Number(value + 20);
	console.log(maxLoc.x);
	

	}

 setInterval(enemy,100);


























