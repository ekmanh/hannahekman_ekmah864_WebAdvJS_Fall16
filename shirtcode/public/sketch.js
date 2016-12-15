var blue;
var green;
var mustard;
var blush;
var black;
var white;
var orange;
var pencilColor;
var selectedColor = {r:0,g:0,b:0};

var pencilSize;
var w;
var x;

var y;
var rr;
var gg;
var bb;
var socket;
var cnv;


function centerCanvas() {
  //canvas position
  w = 20;
  var x = (windowWidth - width) / 1.96;
  var y = (windowHeight - height)/ .288;
  cnv.position(x, y);
}



function setup() {
 w = 20;
  //canvas size 
  cnv = createCanvas(windowWidth/2.10, windowHeight/1.39);
  centerCanvas();

  socket = io.connect('http://localhost:4000');
  socket.on('mouse', newDrawing);

  black = color(9, 52, 96);
  mustard = color(249, 224, 61);
  green = color(101, 214, 181);
  blush = color(221, 65, 50);
  blue = color(0,0,0);
  white = color(255,255,255);
  orange = color(247, 119, 106);

  pencilColor = color(0);
  pencilSize = 25;
  w= 20;

  y = 20;

  bSlider = createSlider(0, 255, 255);
  bSlider.position(30, 30);

  rSlider = createSlider(0, 255, 255);
  rSlider.position(30, 60);
  
  gSlider = createSlider(0, 255, 255);
  gSlider.position(30, 90);

  background(0, 0);

}



function newDrawing(data) {

  // stroke(pencilColor);
  stroke(color(data.stroke.r,data.stroke.g,data.stroke.b));
  strokeWeight(data.strokeWeight);
  line(data.px, data.py, data.x, data.y);
  


  //colors 
  noStroke();
  fill(blue);
  rect(20, 30, pencilSize, pencilSize);
  fill(blush);
  rect(20, 90, pencilSize, pencilSize);
  fill(mustard);
  rect(20, 150, pencilSize, pencilSize);
  fill(green);
  rect(20, 210, pencilSize, pencilSize);
  fill(orange);
  rect(20, 180, pencilSize, pencilSize);
  strokeWeight(0.5);
  stroke(1);
  fill(255);
  fill(white);
  rect(20, 60, pencilSize, pencilSize);
  fill(black);
  rect(20, 120, pencilSize, pencilSize);
 


  
  
  //Erase button 
  strokeWeight(0.5);
  stroke(1);
  fill(255);
  strokeWeight(2)
  rect(20, 554, pencilSize* 2, pencilSize);
  strokeWeight(0)
  fill(1);
  textSize(22);
  text("Erase", 30, 580);

  

  //Brush size
  fill(255);
  noStroke();
  rect(20, 270, pencilSize, pencilSize);
  fill(0);
  textSize(33);
  text("+", 30, 300);
  fill(255);
  noStroke();
  rect(20, 330, pencilSize, pencilSize);
  fill(0);
  textSize(26);
  text("—", 28, 357);



}

function mouseDragged() {
  console.log('Sending:' + ',' + mouseY);

  var data = {
    x: mouseX, 
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
    stroke: selectedColor,
    strokeWeight: w,

  }
  socket.emit('mouse', data);

  stroke(color(pencilColor));
  strokeWeight(w);
  line(pmouseX, pmouseY, mouseX, mouseY);

}


function draw() {




  rr = rSlider.value();
  gg = gSlider.value();
  bb = bSlider.value();


  cnv.style('background-color', 'rgb(' + rr + ',' + gg + ',' + bb + ')');

  //colors 
  noStroke();
  fill(blue);
  rect(20, 30, pencilSize, pencilSize);
  fill(blush);
  rect(20, 90, pencilSize, pencilSize);
  fill(mustard);
  rect(20, 150, pencilSize, pencilSize);
  fill(green);
  rect(20, 210, pencilSize, pencilSize);
  fill(black);
  rect(20, 120, pencilSize, pencilSize);
  fill(orange);
  rect(20, 180, pencilSize, pencilSize);
  strokeWeight(0.3);
  stroke(1);
  fill(255);
  fill(white);
  rect(20, 60, pencilSize, pencilSize);


  
  
  //Erase button 
  strokeWeight(0.3);
  stroke(1);
  fill(255);
  rect(20, 430, pencilSize* 2, pencilSize);
  strokeWeight(0)
  fill(1);
  textSize(12);
  text("Erase", 29, 447);

  

  //pencil size

  fill(255);
  strokeWeight(0.3);
  stroke(1);
  fill(255);
  rect(20, 270, pencilSize, pencilSize);
  fill(0);
  textSize(22);
  text("+", 26, 289);
  fill(255);
  strokeWeight(0.3);
  stroke(1);
  fill(255);
  rect(20, 300, pencilSize, pencilSize);
  fill(0);
  textSize(20);
  text("—", 22.5, 318);




}




//every mouse press




function mousePressed() {




  //and set it to a random frame
  // newSprite.animation.stop();




  if (mouseX >= 20 && mouseX <= 70 &&
    mouseY >= 30 && mouseY <= 70) {
    pencilColor = blue;
  selectedColor = {
    r:9, 
    g:52, 
    b:96};

} else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 90 && mouseY <= 90 + 30) {
  pencilColor = blush;
  selectedColor.r = 221; 
  selectedColor.g = 65; 
  selectedColor.b = 50;

} else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 150 && mouseY <= 150 + 30) {
  pencilColor = mustard;
  selectedColor.r = 249; 
  selectedColor.g = 224; 
  selectedColor.b = 61;

} else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 210 && mouseY <= 210 + 30) {
  pencilColor = green;
  selectedColor.r = 101; 
  selectedColor.g = 214; 
  selectedColor.b = 181;

  } else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 60 && mouseY <= 60 + 30) {
  pencilColor = white;
  selectedColor.r = 255; 
  selectedColor.g = 255; 
  selectedColor.b = 255;

  } else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 120 && mouseY <= 120 + 30) {
  pencilColor = black;
  selectedColor.r = 0; 
  selectedColor.g = 0; 
  selectedColor.b = 0;

  } else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 180 && mouseY <= 180 + 30) {
  pencilColor = orange;
  selectedColor.r = 247; 
  selectedColor.g = 119; 
  selectedColor.b = 106;


} else if (mouseX >= 20 && mouseX <= 120 &&
  mouseY >= 430  && mouseY <= 430 + 30) {

 cnv = createCanvas(windowWidth/2.10, windowHeight/1.39);
  centerCanvas();
}    
else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 270 && mouseY <= 270 + 30) {
  w = w+5;
} else if (mouseX >= 20 && mouseX <= 70 &&
  mouseY >= 300 && mouseY <= 300 + 30) {
  w = w-5;
} 

}



function windowResized() {
  centerCanvas();
}
