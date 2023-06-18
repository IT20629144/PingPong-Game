const gameBoard = document.querySelector("gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("scoreText");
const restartButton = document.querySelector("restartButton");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const backgroundColor = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "white";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let ballSpeed = 1;
let intervalID;
let ballXDirection = 0;
let ballYDirection = 0;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width:25,
    height:100,
    x:0,
    y:0
};
let paddle2 = {
    width:25,
    height:100,
    x:gameWidth - 25,
    y:gameHeight - 100
};

window.addEventListener("keydown", changeDirection);
restartButton.addEventListener("click", restartGame);

gameStart();

function gameStart(){
    createBall();
    nextTick();
}