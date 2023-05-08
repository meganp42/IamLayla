// CLASS EXAMPLE

let input, button, result, question, submit, answer;

let c;

// let Answer1;

let fs = document.getElementById('fs');
let popup = document.getElementById('fs2');

let run = document.getElementById('run');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(350, 350);
    cnv.parent('mySketch');

    result = createElement('p', 'choose your direction');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'right');
    result.id('answer');
    answer = document.getElementById('answer');
    fs.appendChild(answer);

    input = createInput('');
    input.id('question');

    question = document.getElementById('question');
    fs.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    submit = document.getElementById('submit');
    fs.appendChild(submit);
    button.mousePressed(output);

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  popup.appendChild(Answer1);
  // Answer1.innerHTML = answers;

  let a = createA('heart.html', 'RUN');

  if (answers == "SOUTH"){
    popup.style.display='block';
    run.style.display='none';
    // Answer1.innerHTML = answers;
    a.id('next');
    next = document.getElementById('next');
    popup.appendChild(next);
    document.getElementById("footsteps").play();
  } else if (answers == "NORTH"){
    // Answer1.innerHTML = answers;
    window.location.replace(href = "gameover.html")
  } else if (answers == "EAST"){
    // Answer1.innerHTML = answers;
    window.location.replace(href = "gameover.html")
  } else if (answers == "WEST"){
    // Answer1.innerHTML = answers;
    a.id('next');
    popup.appendChild(next);
    window.location.replace(href = "gameover.html")
  }else {
    Answer1.innerHTML = "i don't know that direction";
    a.id('next');
    popup.appendChild(next);
  }
}
