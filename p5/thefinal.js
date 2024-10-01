



let currentCategory = '';
let breakfastRecipes = ['Pancakes', 'Omelette', 'Waffles'];
let lunchRecipes = ['Sloppy Joes', 'Quesadilla', 'Chicken Curry'];
let dinnerRecipes = ['Dumplings', 'Mac and Cheese', 'Ramen'];
let recipes = {
  'Pancakes': 'Pancakes Recipe:\n- 1 cup flour\n- 2 tbsp sugar\n- 1 cup milk\n- 1 egg\n- Cook on skillet until golden',
  'Omelette': 'Omelette Recipe:\n- 3 eggs\n- 1/4 cup milk\n- Salt and pepper\n- Cook with veggies or cheese',
  'Waffles': 'Waffles Recipe:\n- 1 cup flour\n- 1 egg\n- 1 cup milk\n- Cook in a waffle iron',
  'Sloppy Joes': 'Sloppy Joes Recipe:\n- 1 lb ground beef\n- 1 onion\n- Ketchup, mustard\n- Serve on buns',
  'Quesadilla': 'Quesadilla Recipe:\n- 2 tortillas\n- Cheese\n- Optional: chicken\n- Cook until golden',
  'Chicken Curry': 'Chicken Curry Recipe:\n- 1 lb chicken\n- Curry powder\n- Onion, coconut milk\n- Simmer until done',
  'Dumplings': 'Dumplings Recipe:\n- Dumpling wrappers\n- Ground pork\n- Ginger, garlic\n- Steam until cooked',
  'Mac and Cheese': 'Mac and Cheese Recipe:\n- Elbow macaroni\n- Cheese sauce\n- Milk and butter\n- Bake until golden',
  'Ramen': 'Ramen Recipe:\n- Ramen noodles\n- Broth\n- Egg, veggies\n- Cook in broth and serve'
};
let currentRecipe = '';
let foodImages = {};
let boardImage;

function preload() {

  foodImages['Pancakes'] = loadImage('pancake.png');
  foodImages['Omelette'] = loadImage('omlette.png');
  foodImages['Waffles'] = loadImage('waffles.png');
  foodImages['Sloppy Joes'] = loadImage('sleepyj.png');
  foodImages['Quesadilla'] = loadImage('cheeseq.png');
  foodImages['Chicken Curry'] = loadImage('curry.png');
  foodImages['Dumplings'] = loadImage('dumplings.png');
  foodImages['Mac and Cheese'] = loadImage('mac.png');
  foodImages['Ramen'] = loadImage('ramen.png');
  boardImage = loadImage('board.png');  // Load the board and knife image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  background(255, 244, 213);  // milky yellow background
  drawBoard();
  drawCategories();
  textSize(32);
  text("Monika's Recipes", width / 2, 50);
}

function draw() {

  if (currentCategory !== '') {
    displayFoodImages(currentCategory);
  }

 
  if (currentRecipe !== '') {
    fill(0);
    textStyle(BOLD);
    textSize(24);
    text(currentRecipe, width / 2, height / 2, 400, 300);  
  }
}

function drawBoard() {

  image(boardImage, 50, 150, 300, 400);  

function drawCategories() {
  
  fill(200);
  for (let i = 0; i < categories.length; i++) {
    rect(width - 350, 150 + i * 150, 300, 100); 
    fill(0);
    textSize(24);
    text(categories[i], width - 200, 200 + i * 150);  
    fill(200);  // Reset fill for the next box
  }
}

function displayFoodImages(category) {
  let foodItems = [];
  if (category === 'Breakfast') foodItems = breakfastRecipes;
  else if (category === 'Lunch') foodItems = lunchRecipes;
  else if (category === 'Dinner') foodItems = dinnerRecipes;

  for (let i = 0; i < foodItems.length; i++) {
    image(foodImages[foodItems[i]], width / 2 - 100, 200 + i * 150, 200, 100);  
  }
}

function mousePressed() {
  
  if (mouseX > width - 350 && mouseX < width - 50) {
    if (mouseY > 150 && mouseY < 250) currentCategory = 'Breakfast';
    if (mouseY > 300 && mouseY < 400) currentCategory = 'Lunch';
    if (mouseY > 450 && mouseY < 550) currentCategory = 'Dinner';
    currentRecipe = '';  
  }

  let foodItems = [];
  if (currentCategory === 'Breakfast') foodItems = breakfastRecipes;
  if (currentCategory === 'Lunch') foodItems = lunchRecipes;
  if (currentCategory === 'Dinner') foodItems = dinnerRecipes;

  for (let i = 0; i < foodItems.length; i++) {
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 200 + i * 150 && mouseY < 300 + i * 150) {
      currentRecipe = recipes[foodItems[i]];  // Display the recipe for the clicked food item
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
