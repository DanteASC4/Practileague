// Global variable definition space
const wid = screen.width
const log = console.log; // Makes console.log()  --> log()
let winc = wid/100 - (wid%100 /100)


// Grid function to better visualize positions
const grid = () =>{
  for(let i = 1; i < winc; i++){
    const incr = 0 + i*100

    fill('white')
    noStroke()
    rect(incr, -1, 1, 601)
    text(incr.toString(), incr + 10, 15)
  }
  for(let j = 1; j < 6;j++){
    const incr = 0 + j*100

    fill('white')
    noStroke()
    rect(-1, incr, wid, 1)
    text(incr.toString(), 1, incr + 15)
  }
}


// Creating the canvas
function setup(){
  createCanvas(wid, 600)
  background(0)



}



// Draw function, aka nucleus of the cell
function draw(){
  background(0) // Preventing the mouse coordinates from being stamped
  const mX = "X: " + mouseX.toString()
  const mY = "Y: " + mouseY.toString()
  mPos = mX + "\n " + mY
  fill('white')
  text(mPos, mouseX + 10, mouseY + 50) //Getting the positon of the cursor to place things wherever I put my cursor
  grid()
}
