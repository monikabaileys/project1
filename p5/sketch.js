let sunColor = [255, 223, 0]; // initial sun color
let showTree = true; // tree visibility


function preload() {
 
  cloudImg = loadImage('cloud.png');
}

function setup() {
  createCanvas(800, 400);
  imageMode(CENTER)
}

function draw() {
  background(135, 206, 235); // sky
  
  image(cloudImg, mouseX, mouseY, 150, 100 )

  //  mountain
  fill(169, 169, 169); 
  triangle(100, 300, 300, 100, 500, 300);
  
  fill(sunColor);
  ellipse(700, 100, 80, 80); 
  

  fill(34, 139, 34); 
  rect(0, 300, width, 100);
  
  // draw the tree only if showTree is true
  if (showTree) {
    fill(139, 69, 19); 
    rect(150, 250, 20, 50); 

    fill(34, 139, 34);
    ellipse(160, 230, 60, 60); 
  }
}

 function mousePressed ()
{
  sunColor = [random(255), random(255), random(255)];
}


function keyPressed() {
  showTree = !showTree;
}