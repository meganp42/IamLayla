// CLASS EXAMPLE

// let input, button, result, question, submit, answer;

// let c;

// // let Answer1;

// let colorInput = document.getElementById('color-input');

// function setup() {
//     // make the div called "mySketch" a p5.js canvas element
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.parent('mySketch');

//     result = createElement('p', 'type a color');
//     result.style('font-size', '30px');
//     result.style('margin', '0px');
//     result.style('text-align', 'center');
//     result.id('answer');
//     answer = document.getElementById('answer');
//     colorInput.appendChild(answer);

//     input = createInput('');
//     input.id('question');

//     question = document.getElementById('question');
//     colorInput.appendChild(question);

  
//     button = createButton('submit');
//     button.id('submit');
//     submit = document.getElementById('submit');
//     colorInput.appendChild(submit);
//     button.mousePressed(output);

//   }
  
//   function draw() {

//   }
  
//   function windowResized() {
//     // resize the canvas when the screen is resized.
//     resizeCanvas(windowWidth, windowHeight);
// }

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

// function output() {
//   const answers = input.value();
//   input.value('');

//   let answer1 = createP('');
//   answer1.id('answer-1')
//   answer1.style('font-size', '30px');
//   answer1.style('margin', '0px');

//   let Answer1 = document.getElementById('answer-1');
//   colorInput.appendChild(Answer1);
//   Answer1.innerHTML = answers;

//   let a = createA('next.html', 'next');

//   if (answers == "blue"){
//     background(0,0,255);
//     Answer1.innerHTML = answers;
//     a.id('next');
//     colorInput.appendChild(next);
//     circles();
//     c = color(255, 134, 52);
//   } else if (answers == "red"){
//     background(255,0,0);
//     Answer1.innerHTML = answers;
//   } else if (answers == "green"){
//     background(0,255,0);
//     Answer1.innerHTML = answers;
//   } else if (answers == "magenta"){
//     background(255, 0, 255);
//     Answer1.innerHTML = answers;
//     a.id('next');
//     colorInput.appendChild(next);
//     circles();
//     c = color(0,255,0);
//   }else {
//     Answer1.innerHTML = "i don't know that color";
//     a.id('next');
//     colorInput.appendChild(next);
//   }
// }

// function circles (){
//   fill(c);
//   ellipse(200, 200, 200, 200);
// }


let coins;
let player;
let score = 0;
let Group;

// page 3
let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let princess = document.getElementById('princess');

function setup() {
  createCanvas(400, 400);
  coins = new Group();
  for (let i = 0; i < 10; i++) {
    let c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);
}

function draw() {
  background(50);
  player.velocity.x = 
    (mouseX-player.position.x)*0.1;
  player.velocity.y = 
    (mouseY-player.position.y)*0.1;
  player.overlap(coins, getCoin);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}

function getCoin(player, coin) {
  coin.remove();
  score += 1;
}

// page 3
function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');


}

function draw() {

  if (mode=1){
    displayCharacter();
  }

  

  removeElements();
  // //lets manipulate the DOM and make our cat move with the arrow keys
  // //create an image element in html
  let character = createImg("img/character.png");
  // //select size of image
  character.size(200,200);
  //  // give it an id
   character.id('character');

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
      //make bear appear
      princess.style.display='block';
    }

    if ((xpos<400) && (ypos<400)){

      //hide bear again
      princess.style.display='none';

      //change scene to the next to the next one by adding 1
      mode = 2;

      console.log(mode)
    }

     //changing of scenes
     if (mode == 2){
       background(0);
       princess.style.display='none';
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
  let character = createImg("img/character.png");
  // //select size of image
  character.size(200,200);
  //  // give it an id
   character.id('character');
}
}