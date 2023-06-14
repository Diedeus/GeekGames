const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = "flappy-bird-set.png";

// general settings
let gamePlaying = false;
const gravity = .21;
const speed = 3.0;
const size = [85, 36];
const jump = -5.5;
const cTenth = (canvas.width / 10);

let index = 0,
    bestScore = 0,
    flight,
    flyHeight, 
    currentScore, 
    pipe;

// pipe settings
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;

const setup = () => {
  currentScore = 0;
  flight = jump;

  // set initial flyHeight (middle of screen - size of the bird)
  flyHeight = (canvas.height / 2) - (size[1] / 2);

  // setup first 3 pipes
  pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
}

const render = () => {
  // make the pipe and bird moving 
  index++;

  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background first part 
  ctx.drawImage(img, 0, 0);
  // background second part
  // pipe display
  if (gamePlaying){
    pipes.map(pipe => {
      // pipe moving
      pipe[0] -= speed;

      // top pipe
      ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);
      // bottom pipe
      ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);

      // give 1 point & create new pipe
      if(pipe[0] <= -pipeWidth){
        currentScore++;
        // check if it's the best score
        bestScore = Math.max(bestScore, currentScore);
        
        // remove & create new pipe
        pipes = [...pipes.slice(1), [pipes[pipes.length-1][0] + pipeGap + pipeWidth, pipeLoc()]];
        console.log(pipes);
      }
    
      // if hit the pipe, end
      if ([
        pipe[0] <= cTenth + size[0], 
        pipe[0] + pipeWidth >= cTenth, 
        pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]
      ].every(elem => elem)) {
        gamePlaying = false;
        setup();
      }
    })
  }
  // draw bird
  if (gamePlaying) {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
  } else {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);
    flyHeight = (canvas.height / 2) - (size[1] / 2);
      // text accueil
      var text = "Votre score :";
var textWidth = ctx.measureText(text).width;
var centerX = canvas.width / 2 - textWidth / 2;
ctx.fillText(text, centerX, 560);
    ctx.font = "bold 15px 'Press Start 2P'";
    ctx.save(); // Enregistrez l'état du contexte actuel

ctx.font = "bold 25px 'Press Start 2P'"; // Augmentez la taille de la police à 20px pour bestScore
var scoreText = ctx.measureText(bestScore);
var scoreX = canvas.width / 2 - scoreText.width / 2; // Calcul de la position horizontale centrée

ctx.fillText(bestScore, scoreX, 600);

ctx.restore();
    // ctx.fillStyle = "white";

        // Récupérez la référence à l'élément de l'image
        var imgLogo = document.getElementById('myImage');
        var btnPlay = document.getElementById('myImage2');
        
        var canvasWidth = canvas.width;
        
        var imgLogoWidth = imgLogo.width;
        var imgLogoX = (canvasWidth - imgLogoWidth) / 2; // Position horizontale centrée pour l'image du logo
        
        var btnPlayWidth = btnPlay.width;
        var btnPlayX = (canvasWidth - btnPlayWidth) / 2; // Position horizontale centrée pour le bouton de lecture
        
        ctx.drawImage(imgLogo, imgLogoX, 280);
        ctx.drawImage(btnPlay, btnPlayX, 400);

    let inputCache = document.querySelector('#inpCache')
    inputCache.value = bestScore

 
  }

  
  // document.getElementById('bestScore').innerHTML = `Le Best : ${bestScore}`;
  document.getElementById('currentScore').innerHTML = `Actuel: ${currentScore}`;

  // tell the browser to perform anim
  window.requestAnimationFrame(render);
}

// launch setup
setup();
img.onload = render;

// start game
canvas.addEventListener('click', () => gamePlaying = true);
canvas.onclick = () => flight = jump;

