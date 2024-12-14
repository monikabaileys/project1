let data;
let rosesArray = [];
let likesArray = [];
let chatsArray = [];
let commentsArray = [];

let rosesTextArrayX = [], rosesTextArrayY = [], rosesTextNameArray = [];
let likesTextArrayX = [], likesTextArrayY = [], likesTextNameArray = [];
let chatsTextArrayX = [], chatsTextArrayY = [], chatsTextNameArray = [];
let commentsTextArrayX = [], commentsTextArrayY = [], commentsTextNameArray = [];

let roseTimer = 0, rosesTimepassed = 800;
let likesTimer = 0, likesTimepassed = 500;
let chatsTimer = 0, chatsTimepassed = 850;
let commentsTimer = 0, commentsTimepassed = 750;

let hingeIcon, profilePic, heartImg, roseImg, chatImg, commentImg, font, popaudio;
let state = "start"; 

function preload() {
  
  data = loadTable("js/personalData2.csv", "csv", "header");

  
  heartImg = loadImage("images/hearticon.png");
  roseImg = loadImage("images/roseicon.png");
  chatImg = loadImage("images/chaticon.png");
  commentImg = loadImage("images/comment.png");
  hingeIcon = loadImage("images/hingeapp.png");
  profilePic = loadImage("images/photofinal.png");

  
  font = loadFont("js/fontM/LTMuseum-Bold.ttf");
  popaudio = loadSound("js/sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont(font);
  imageMode(CENTER);
  rectMode(CENTER);

  
  for (let i = 0; i < data.getRowCount(); i++) {
    if (data.getString(i, "ROSES") !== "null") rosesArray.push(data.getString(i, "ROSES"));
    if (data.getString(i, "LIKES") !== "null") likesArray.push(data.getString(i, "LIKES"));
    if (data.getString(i, "CHATS") !== "null") chatsArray.push(data.getString(i, "CHATS"));
    if (data.getString(i, "COMMENTS") !== "null") commentsArray.push(data.getString(i, "COMMENTS"));
  }
}

function draw() {
  if (state === "start") {
    drawStartScreen();
  } else if (state === "main") {
    drawMainScreen();
    handleTimedMessages();
  }
}

function drawStartScreen() {
  background("#f8f9fa");
  textSize(50);
  textStyle(BOLD);
  fill(0);
  text("Welcome to Hinge", width / 2, height / 4);
  image(hingeIcon, width / 2, height / 2, 200, 200);
  textSize(20);
  text("Click the icon to start", width / 2, height / 2 + 150);
}

function drawMainScreen() {
  background("#f8f9fa");

  let centerX = width / 2;
  let centerY = height / 2;

  
  stroke("#adb5bd");
  strokeWeight(4);
  noFill();
  rect(centerX, centerY, 900, 740, 20);

  
  textSize(40);
  textStyle(BOLD);
  fill(0);
  text("A day of a Hinge user", centerX, centerY - 300);

  
  textSize(28);
  textStyle(NORMAL);
  text("Monika Beileys", centerX, centerY - 250);


  stroke("#6c757d");
  strokeWeight(5);
  rect(centerX, centerY, 650, 440, 15);
  noStroke();
  image(profilePic, centerX, centerY, 650, 440);

  
  textSize(24);
  fill(0);
  text("19 years old\nJewish\nFrom Russia\nInterested in monogamy", centerX, centerY + 280);

  // icons
  drawIcons(centerX, centerY);

  
  displayTimedMessages();
}

function drawIcons(centerX, centerY) {
  
  stroke(0); // black outline
  strokeWeight(2);
  fill(255); // white background
  ellipse(centerX + 440, centerY - 60, 100, 100); 
  image(heartImg, centerX + 440, centerY - 60, 60, 60); 

  
  ellipse(centerX + 440, centerY + 60, 100, 100); 
  image(roseImg, centerX + 440, centerY + 60, 60, 60); 

  
  ellipse(centerX - 440, centerY - 60, 100, 100); // circular background
  image(chatImg, centerX - 440, centerY - 60, 60, 60); // icon image

  
  ellipse(centerX - 440, centerY + 60, 100, 100); // circular background
  image(commentImg, centerX - 440, centerY + 60, 60, 60); // icon image
}

function handleTimedMessages() {
  if (millis() >= roseTimer + rosesTimepassed) {
    addMessage(rosesArray, rosesTextArrayX, rosesTextArrayY, rosesTextNameArray, 150, 40);
    roseTimer = millis();
  }
  if (millis() >= likesTimer + likesTimepassed) {
    addMessage(likesArray, likesTextArrayX, likesTextArrayY, likesTextNameArray, 150, 40);
    likesTimer = millis();
  }
  if (millis() >= chatsTimer + chatsTimepassed) {
    addMessage(chatsArray, chatsTextArrayX, chatsTextArrayY, chatsTextNameArray, 150, 40);
    chatsTimer = millis();
  }
  if (millis() >= commentsTimer + commentsTimepassed) {
    addMessage(commentsArray, commentsTextArrayX, commentsTextArrayY, commentsTextNameArray, 150, 40);
    commentsTimer = millis();
  }
}

function addMessage(sourceArray, xArray, yArray, nameArray, xOffset, yOffset) {
  let randX = random(xOffset, windowWidth - xOffset);
  let randY = random(yOffset, windowHeight - yOffset);
  xArray.push(randX);
  yArray.push(randY);
  let randIndex = int(random(0, sourceArray.length));
  nameArray.push(sourceArray[randIndex]);
  popaudio.play();
}

function displayTimedMessages() {
  // likes
  fill(255, 0, 0);
  for (let i = 0; i < likesTextArrayX.length; i++) {
    text(likesTextNameArray[i] + " liked your profile", likesTextArrayX[i], likesTextArrayY[i]);
  }

  // roses
  fill(60, 0, 0);
  for (let i = 0; i < rosesTextArrayX.length; i++) {
    text(rosesTextNameArray[i] + " sent you a rose", rosesTextArrayX[i], rosesTextArrayY[i]);
  }

  // chats
  fill(158, 0, 0);
  for (let i = 0; i < chatsTextArrayX.length; i++) {
    text(chatsTextNameArray[i] + " sent you a chat", chatsTextArrayX[i], chatsTextArrayY[i]);
  }

  // comments
  fill(95, 158, 70);
  for (let i = 0; i < commentsTextArrayX.length; i++) {
    text(commentsTextNameArray[i] + " left a comment", commentsTextArrayX[i], commentsTextArrayY[i]);
  }
}

function mousePressed() {
  if (state === "start") {
    if (dist(mouseX, mouseY, width / 2, height / 2) < 100) {
      state = "main";
    }
  } else if (state === "main") {
    let centerX = width / 2;
    let centerY = height / 2;

    
    if (dist(mouseX, mouseY, centerX + 440, centerY - 60) < 50) {
      likesTextArrayX = [];
      likesTextArrayY = [];
      likesTextNameArray = [];
    }

    
    if (dist(mouseX, mouseY, centerX + 440, centerY + 60) < 50) {
      rosesTextArrayX = [];
      rosesTextArrayY = [];
      rosesTextNameArray = [];
    }

    
    if (dist(mouseX, mouseY, centerX - 440, centerY - 60) < 50) {
      chatsTextArrayX = [];
      chatsTextArrayY = [];
      chatsTextNameArray = [];
    }

    
    if (dist(mouseX, mouseY, centerX - 440, centerY + 60) < 50) {
      commentsTextArrayX = [];
      commentsTextArrayY = [];
      commentsTextNameArray = [];
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}