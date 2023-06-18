const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const restartButton = document.querySelector("#restartButton");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const backgroundColor = "forestgreen";
const paddle1Color = "yellow";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "white";
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
    createBall();
    nextTick();
    console.log("hello");

}

function nextTick(){
    intervalID = setTimeout(() =>{
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX,ballY);
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

function drawBall(){
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = ballBorderColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(ballX,ballY,ballRadius,0,2* Math.PI);
    ctx.fill();
    ctx.stroke();
};
// function checkCollision(){};
// function nextTick(){};

function createBall(){
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){
        ballXDirection = 1;
    }
    else{
        ballXDirection = -1;
    }
    if(Math.round(Math.random()) == 1){
        ballYDirection = 1;
    }
    else{
        ballYDirection = -1;
    }

    ballX = gameWidth / 2;
    ballY = gameWidth / 2;
};
function moveBall(){
    ballX += ballSpeed * ballXDirection;
    ballY += ballSpeed * ballYDirection;
};
// function changeDirection(){};
// function restartGame(){};