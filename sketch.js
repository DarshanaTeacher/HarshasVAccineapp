var canvas, backgroundImage;

var gameState = 0;

var distance = 0;
var database;

var form, player, game;


function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

if(gameState === 0){

    form = new Form();
    player = new Player();
    form.display();
  }
}


function draw(){
  background(0)
}
