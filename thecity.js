let x = 0;
let y = 0;
let xpos;
let ypos;

let character;

let mode = 1;

let princess = document.getElementById('princess');

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');


}

function draw() {

  if (mode=1){
    displayCharacter();
  }

  

  //removeElements();
  // //lets manipulate the DOM and make our cat move with the arrow keys
  // //create an image element in html


  // //set the position
  // //create arithmetic for x and y position. this lets us read out the position
  xpos = width/2-100+x;
  ypos = height/2-100+y;


  // //position the cat based on the arrow keys
  character.position(xpos, ypos);



//controls using arrow keys
  if (keyIsPressed){
    if(keyCode == UP_ARROW){

      //minus 5 in the y direction means up
      y-=5;
      
    } 
    
    if(keyCode == RIGHT_ARROW) {

      //plus 5 in the x direction means right
      x+=5;
    }

    if(keyCode == DOWN_ARROW) {

      //plus 5 in the y direction means down
      y+=5;
    }

    if(keyCode == LEFT_ARROW) {

      //minus 5 in the x direction means left
      x-=5;
    }

    if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){

      //hide bear again
      // princess.style.display='none';

      //change scene to the next to the next one by adding 1
      mode = 2;

      console.log(mode)
    }

     //changing of scenes
     if (mode == 2){
       window.location.replace(href = "theforest.html")
    }
  }
   console.log("character is at: " + xpos + ", " + ypos);


function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function displayCharacter(){
removeElements();
  // //lets manipulate the DOM and make our cat move with the arrow keys
  // //create an image element in html
  character = createImg("img/Layla.png");
  // //select size of image
  character.size(200,200);
  //  // give it an id
   character.id('character');
}
}