function Firework(velocity, position) {
	this.vel = velocity;
	this.pos = position;
}

function move(firework) {
	firework.pos.y += firework.velocity;
	firework.velocity += 1;
}

var num = 0;
var fireworks = [];

function setup() {
	createCanvas(500, 500);
}

function mousePressed() {
	fireworks.push(new Firework(-random(20), createVector(random(width), height)));
	num++;
	console.log('launched');
}

function draw() {
	background(0);
	fill(255);
	for(var i =0; i<num; i++)  {
		move(fireworks[i]);
		ellipse(fireworks[i].pos.x, fireworks[i].pos.y, 10, 10);
	}
}
