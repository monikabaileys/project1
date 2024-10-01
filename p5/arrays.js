


let squareNum =[25,36,49,64,81,100]

fucntion setup () {
	
createCanvas (windowWidth, windowHeight)
 
print (squareNums,length)

for(let i= 0; i< squareNums,length; i++) {
	
 let posX= random(100,windowWidth)
 let posY= random(100,windowHeight)

fill (244,66,200)
ellipse(posX, posY, squareNums [i], squareNums[i])
fill(0)
text(squareNums[i], posx, posY)



}



}