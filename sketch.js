
var num = 6;
var Cities = [];

function setup() {
  // put setup code here
	createCanvas(500, 500);
	for(var i = 0; i<num; i++) {
		Cities[i] = createVector(floor(random(width)), floor(random(height)));
	}
}

function draw() {
  // put drawing code here
	background(0);
	fill(255);
	for(var i = 0; i<num; i++) {
		ellipse(Cities[i].x, Cities[i].y, 10, 10);
	}
}
