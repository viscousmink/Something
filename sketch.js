
var num = 6;
var Cities = [];
var best = [];
var order = [];
var tracker;
var min = Infinity;

change = function() {
	for(var i = 0; i<num; i++) {
		var tmp = order[i];
		var tmp2 = floor(random(num));
		order[i] = order[tmp2];
		order[tmp2] = tmp;
	}
}

function setup() {
  // put setup code here
	createCanvas(500, 500);
	for(var i = 0; i<num; i++) {
		Cities[i] = createVector(floor(random(width)), floor(random(height)));
	}
	for(var i = 0; i<num; i++) {
		order[i] = i;
		best[i] = i;
	}
}

function draw() {
  // put drawing code here
	background(0);
	fill(255);
	for(var i = 0; i<num; i++) {
		ellipse(Cities[i].x, Cities[i].y, 10, 10);
	}
	for(var i = 0; i<num-1; i++) {
		stroke(255);
		line(Cities[best[i]].x, Cities[best[i]].y, Cities[best[i+1]].x, Cities[best[i+1]].y);
		stroke(50);
		line(Cities[order[i]].x, Cities[order[i]].y, Cities[order[i+1]].x, Cities[order[i+1]].y);
	}
	var distance;
	distance = dist(Cities[order[i]].x, Cities[order[i]].y, Cities[order[i+1]].x, Cities[order[i+1]].y);
	if(distance < min) {
		min = distance;
		best = order.slice();
	}
}
