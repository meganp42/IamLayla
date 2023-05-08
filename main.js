let coins;
let player;
let score = 0;

let Layla;

function preload(){
 Layla = loadImage( "img/Layla.png");
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('mySketch');
  background(83, 43, 136);
  coins = new Group();
  for (let i = 0; i < 10; i++) {
    let c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(200,177,228);
    coins.add(c);
  }
  player = createSprite(50, 50, 40, 40);
  // player = createImg("img/Layla.png");
  player.shapeColor = color(255);
  player.addImage('Layla', Layla);
  Layla.resize(120,120);
}

function draw() {
  background(155,114,207);
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
    window.location.replace(href = "thecity.html")
  }
  
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}

