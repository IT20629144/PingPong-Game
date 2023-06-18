const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const restartButton = document.querySelector("#restartButton");
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

// window.addEventListener("keydown", changeDirection);
// restartButton.addEventListener("click", restartGame);

gameStart();

function gameStart(){
    // createBall();
    nextTick();
    console.log("hello");

}

function nextTick(){
    intervalID = setTimeout(() =>{
        clearBoard();
        drawPaddles();
        // moveBall();
        // drawBall();
        // checkCollision();
        nextTick();
    },10);
}

function clearBoard(){
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0,0,gameWidth,gameHeight);
}

function drawPaddles(){
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);
    ctx.strokeRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);

    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height);
    ctx.strokeRect(paddle2.x,paddle2.y,paddle2.width,paddle2.height);
};
// function moveBall(){};
// function drawBall(){};
// function checkCollision(){};
// function nextTick(){};

// function createBall(){};
// function changeDirection(){};
// function restartGame(){};