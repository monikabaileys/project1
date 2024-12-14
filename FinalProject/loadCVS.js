let table;
let submitButton
let canvas
let companyMenu

let imageArray = []


function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/personalData.csv', 'csv', 'header', loadImageArray);

}

function loadImageArray(){
  for (let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'image'))
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")

  background(0);
  fill(255)

  submitButton = createButton('Submit')
  submitButton.position(150, 50)
  companyMenu = createSelect()
  companyMenu.option('Select Company')
  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){

    //grab each of the dates
    let date = table.getString(i, 'date');
    let location = table.getString(i, 'location')
    let company = table.getString(i, 'company')

    companyMenu.option(company)
    submitButton.mousePressed(changeData)
  }

}

function changeData(){
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)
  for (let i = 0; i < table.getRowCount(); i++){
      if(companyMenu.value() == table.getString(i, 'company')){
        text(table.getString(i, 'likes'), windowWidth/2, 50)
        text(table.getString(i, 'roses'), windowWidth/2, 90)
        text(table.getString(i, 'chats'), windowWidth/2, 130)
        text(table.getString(i, 'audios'), windowWidth/2, 170)
        text(table.getString(i, 'views'), windowWidth/2, 200)
        text(table.getString(i, 'comments'), windowWidth/2, 230)
        for(let j = 0; j < table.getString(i, 'frequency'); j++){
          image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30)
        }
      }
  }

}

function draw(){
//submitButton = createButton('Submit')
}