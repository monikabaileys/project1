let foodImages = [];
let boardImage;
let foodNames = ['Sloppy Joes', 'Cheese Quesadilla', 'Chicken Curry'];
let recipes = [
  "Sloppy Joes Recipe:\n- 1 lb ground beef\n- 1 onion, chopped\n- 1/2 cup ketchup\n- 2 tbsp mustard\n- Serve on buns",
  "Cheese Quesadilla Recipe:\n- 2 tortillas\n- 1 cup shredded cheese\n- 1/2 cup chicken (optional)\n- Cook in skillet until golden",
  "Chicken Curry Recipe:\n- 1 lb chicken\n- 1 tbsp curry powder\n- 1 onion, chopped\n- 1 can coconut milk\n- Simmer until cooked"
];
let currentRecipe = '';  // holds the current recipe displayed

function preload() {
  foodImages[0] = loadImage('sleepyj.png');
  foodImages[1] = loadImage('cheeseq.png');
  foodImages[2] = loadImage('curry.png');

  boardImage = loadImage('board.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 244, 213);  // yellow backgroundz

  // shows the board and knife image on the left
  image(boardImage, 50, 50, 300, 300);  

  // shows the food images on the right side in a vertical column
  for (let i = 0; i < foodImages.length; i++) {
    image(foodImages[i], width - 250, 100 + i * 150, 200, 100); 
  }
}

function draw() {
  //background and board 
  background(255, 244, 213);  
  image(boardImage, 50, 50, 300, 300);  

  
  for (let i = 0; i < foodImages.length; i++) {
    image(foodImages[i], width - 250, 100 + i * 150, 200, 100);  
  }

  
  if (currentRecipe !== '') {
    fill(0); 
    textStyle(BOLD);  
    textSize(16);  
    text(currentRecipe, 50, 370, 300, 200);  //shows the recipe below the board
  }
}

function mousePressed() {
	
  foodImages.forEach((img, i) => {
    if (mouseX > width - 250 && mouseX < width - 50 && mouseY > 100 + i * 150 && mouseY < 200 + i * 150) {
      currentRecipe = recipes[i];  
    }
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

