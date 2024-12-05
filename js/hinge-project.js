let data;
let likeIndex = 0;
let roseIndex = 0;
let chatIndex = 0;
let commentIndex = 0;
let messages = {
  like: { text: "", alpha: 0, timer: 0 },
  rose: { text: "", alpha: 0, timer: 0 },
  chat: { text: "", alpha: 0, timer: 0 },
  comment: { text: "", alpha: 0, timer: 0 }
};

let timer = 0
let timePassed = 1000 

let roseTimer = 0
let rosesTimepassed = 800


let likesTimer = 0
let likesTimepassed = 500

let chatsTimer = 0
let chatsTimepassed = 850

let commentsTimer = 0
let commentsTimepassed = 750

let startBool = false

let popaudio

let rosesArray = []
let randRosesArray
let rosesName
let roseDist 
let roseRandX
let roseRandY
let rosesTextArrayX =[]
let rosesTextArrayY = []
let rosesTextNameArray = []


let randLikesArray
let likesArray =[]
let likesDist
let likesName
let likesRandX
let likesRandY
let likesTextArrayX =[]
let likesTextArrayY =[]
let likesTextNameArray =[]

let randChatsArray
let chatsArray =[]
let chatsName
let chatsDist
let chatsTextArrayX =[]
let chatsTextArrayY = []
let chatsTextNameArray = []
let chatsRandX
let chatsRandY


let commentsArray =[]
let commentsName
let commentsDist
let randCommentsArray
let commentsTextArrayX =[]
let commentsTextArrayY =[]
let commentsTextNameArray =[]
let commentsRandX
let commentsRandY



function preload() {
  //  my  data
  data = loadTable("js/personalData2.csv", "csv", "header");
  //  images
  heartImg = loadImage("images/hearticon.png");
  roseImg = loadImage("images/roseicon.png");
  chatImg = loadImage("images/chaticon.png");
  commentImg = loadImage("images/comment.png");
  profilePic = loadImage("images/photofinal.png");
  font = loadFont('js/fontM/LTMuseum-Bold.ttf');
  popaudio = loadSound('js/sound.mp3')

}


function setup() {
  createCanvas( windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont(font);

  imageMode(CENTER)
  rectMode(CENTER)

  for (let i = 0; i < data.getRowCount(); i++){
    if(data.getString(i, 'ROSES') !== 'null'){
    rosesArray.push(data.getString(i, 'ROSES')) 
  }
}


  for (let i = 0; i < data.getRowCount(); i++){
    if(data.getString(i, 'LIKES') !== 'null'){
    likesArray.push(data.getString(i, 'LIKES')) 
}
}
    

for (let i = 0; i < data.getRowCount(); i++){
    if(data.getString(i, 'CHATS') !== 'null'){
    chatsArray.push(data.getString(i, 'CHATS')) 
  }
}

  for (let i = 0; i < data.getRowCount(); i++){
    if(data.getString(i, 'COMMENTS') !== 'null'){
    commentsArray.push(data.getString(i, 'COMMENTS')) 
  }
}





print(rosesArray)
print(likesArray)
print(chatsArray)
print(commentsArray)
}



function draw() {
  background('#f8f9fa'); 

  let centerX = width / 2;
  let centerY = height / 2;

  // big frame
  stroke('#adb5bd'); //grey border
  strokeWeight(4);
  noFill();
  rect(centerX , centerY, 900, 740, 20); //rounded corners

  // heading
  textSize(40);
  textStyle(BOLD);
  fill(0);
  text("A day of a Hinge user", centerX, centerY - 300);

  // name
  textSize(28);
  textStyle(NORMAL);
  text("Monika Beileys", centerX, centerY - 250);

  // pp
  stroke('#6c757d'); 
  strokeWeight(5);
  rect(centerX, centerY, 650, 440, 15); //border
  noStroke();
  image(profilePic, centerX , centerY , 650, 440); //pp

  // details
  textSize(24);
  fill(0);
  text("19 years old\nJewish\nFrom Russia\nInterested in monogamy", centerX, centerY + 280);

  // circular frames 
  stroke('#adb5bd'); 
  strokeWeight(3);
  fill(255); // White background
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';

  // heart icon
  ellipse(centerX + 440, centerY - 60, 100, 100);
  image(heartImg, centerX + 440, centerY - 60, 80, 80);

  // rose icon
  ellipse(centerX + 440, centerY + 60, 100, 100);
  image(roseImg, centerX + 440, centerY + 60, 80, 80);

  // chat icon
  ellipse(centerX - 440, centerY - 60, 100, 100);
  image(chatImg, centerX - 440, centerY - 60, 80, 80);

  // comment icon
  ellipse(centerX - 440, centerY + 60, 100, 100);
  image(commentImg, centerX - 440, centerY + 60, 80, 80);

  // no shadow
  drawingContext.shadowBlur = 0;

 fill(255, 0, 0)
  if(likesName !== undefined){
 for(let i = 0; i < likesTextArrayX.length; i++){
     text(likesTextNameArray[i] + '  liked your profile', likesTextArrayX[i], likesTextArrayY[i]);
  }
  }

 fill(60, 0, 0)
  if(rosesName !== undefined){
    for(let i = 0; i < rosesTextArrayX.length; i++){
     text(rosesTextNameArray[i] + ' sent you a rose', rosesTextArrayX[i], rosesTextArrayY[i]);
    }
  }

   fill(158, 0, 0)
  if(chatsName !== undefined){
     for(let i = 0; i < chatsTextArrayX.length; i++){
    text(chatsTextNameArray[i] + ' sent you a chat', chatsTextArrayX[i], chatsTextArrayY[i]);
  }
  }

   fill(95, 158, 70)
  if(commentsName !== undefined){
       for(let i = 0; i < commentsTextArrayX.length; i++){
       text(commentsTextNameArray[i] + ' left a comment', commentsTextArrayX[i], commentsTextArrayY[i]);
}
  }

  roseDist = dist(mouseX, mouseY, centerX + 440, centerY + 60)
 // print(roseDist)

  likesDist = dist(mouseX, mouseY, centerX + 440, centerY - 60)
  //print(likesDist)

  chatsDist = dist(mouseX, mouseY, centerX - 440, centerY - 60)

  commentsDist = dist(mouseX, mouseY, centerX - 440, centerY + 60)



if(millis() >= timer + timePassed){
    

  timer = millis()
  }

//if(startBool == true){

  if(millis() >= roseTimer + rosesTimepassed){

     roseRandX = random(150, windowWidth - 150)
      roseRandY = random(40, windowHeight - 60)
      rosesTextArrayX.push(roseRandX)
      rosesTextArrayY.push(roseRandY)
      randRosesArray = int(random(0, rosesArray.length))
      rosesName = rosesArray[randRosesArray]
      rosesTextNameArray.push(rosesName)

      roseTimer = millis()

      popaudio.play()
  }

 if(millis() >= likesTimer + likesTimepassed){
      likesRandY = random(40, windowHeight - 60)
      likesRandX = random(150, windowWidth - 150)
      likesTextArrayX.push(likesRandX)
      likesTextArrayY.push(likesRandY)
      randLikesArray = int(random(0, likesArray.length))
      likesName = likesArray[randLikesArray]
      likesTextNameArray.push(likesName)

      likesTimer = millis()
      popaudio.play()
}



if(millis() >= chatsTimer + chatsTimepassed){

      chatsRandX = random(150, windowWidth - 150)
      chatsRandY = random(40, windowHeight - 60)
      chatsTextArrayX.push(chatsRandX)
      chatsTextArrayY.push(chatsRandY)
      randChatsArray = int(random(0, chatsArray.length))
      chatsName = chatsArray[randChatsArray]
      chatsTextNameArray.push(chatsName)

    chatsTimer = millis()

    popaudio.play()

    }


    if(millis() >= commentsTimer + commentsTimepassed){
      commentsRandX = random(150, windowWidth - 150)
      commentsRandY = random(40, windowHeight - 60)
      commentsTextArrayX.push(commentsRandX)
      commentsTextArrayY.push(commentsRandY)
      randCommentsArray = int(random(0, commentsArray.length))
      commentsName = commentsArray[randCommentsArray]
      commentsTextNameArray.push(commentsName)

      commentsTimer = millis()

      popaudio.play()

      }

    //}


      if(commentsTextArrayX.length == 5){
        print("Too Many Messages")
        //show an ad here
      }
  }






function mousePressed() {


    if (likesDist < 50) { 
      startBool = true
      likesRandY = random(40, windowHeight - 60)
      likesRandX = random(150, windowWidth - 150)
      likesTextArrayX.push(likesRandX)
      likesTextArrayY.push(likesRandY)
      randLikesArray = int(random(0, likesArray.length))
      likesName = likesArray[randLikesArray]
      likesTextNameArray.push(likesName)
      
     
      
    }  

    if (roseDist < 50) {
      roseRandX = random(150, windowWidth - 150)
      roseRandY = random(40, windowHeight - 60)
      rosesTextArrayX.push(roseRandX)
      rosesTextArrayY.push(roseRandY)
      randRosesArray = int(random(0, rosesArray.length))
      rosesName = rosesArray[randRosesArray]
      rosesTextNameArray.push(rosesName)

     
      
    }
  
  
 
    if (chatsDist < 50) {
      chatsRandX = random(150, windowWidth - 150)
      chatsRandY = random(40, windowHeight - 60)
      chatsTextArrayX.push(chatsRandX)
      chatsTextArrayY.push(chatsRandY)
      randChatsArray = int(random(0, chatsArray.length))
      chatsName = chatsArray[randChatsArray]
      chatsTextNameArray.push(chatsName)
      


    } 
    if (commentsDist < 50) {
     commentsRandX = random(150, windowWidth - 150)
      commentsRandY = random(40, windowHeight - 60)
      commentsTextArrayX.push(commentsRandX)
      commentsTextArrayY.push(commentsRandY)
      randCommentsArray = int(random(0, commentsArray.length))
      commentsName = commentsArray[randCommentsArray]
      commentsTextNameArray.push(commentsName)
      //print(commentsName)
    }

  }

  function keyPressed() {
  if (keyCode === BACKSPACE || key === 'Backspace') { 
    //console.log("Backspace key pressed!");

    
    if (likesTextArrayX.length > 0) {
      let index = int(random(0, likesTextArrayX.length));
      likesTextArrayX.splice(index, 1);
      likesTextArrayY.splice(index, 1);
      likesTextNameArray.splice(index, 1);
    }

    if (rosesTextArrayX.length > 0) {
      let index = int(random(0, rosesTextArrayX.length));
      rosesTextArrayX.splice(index, 1);
      rosesTextArrayY.splice(index, 1);
      rosesTextNameArray.splice(index, 1);
    }

    if (chatsTextArrayX.length > 0) {
      let index = int(random(0, chatsTextArrayX.length));
      chatsTextArrayX.splice(index, 1);
      chatsTextArrayY.splice(index, 1);
      chatsTextNameArray.splice(index, 1);
    }

    if (commentsTextArrayX.length > 0) {
      let index = int(random(0, commentsTextArrayX.length));
      commentsTextArrayX.splice(index, 1);
      commentsTextArrayY.splice(index, 1);
      commentsTextNameArray.splice(index, 1);
    }
  }
}


function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);
}






