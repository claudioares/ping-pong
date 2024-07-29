let canvas, ctx;
let player1, player2;
let ball;
let player1Score = 0;
let player2Score = 0;
let player1Name, player2Name;
let player1Misses = 0;
let player2Misses = 0;
let gameInterval;

function startGame() {
    player1Name = document.getElementById('player1').value || 'Player 1';
    player2Name = document.getElementById('player2').value || 'Player 2';
    
    document.getElementById('nameInput').style.display = 'none';
    initGame();
}

function initGame() {
    canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 400;
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    
    player1 = { x: 30, y: canvas.height / 2 - 40, width: 10, height: 80, score: 0, dy: 0 };
    player2 = { x: canvas.width - 40, y: canvas.height / 2 - 40, width: 10, height: 80, score: 0, dy: 0 };
    ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 10, dx: 4, dy: 2 };

    document.addEventListener('keydown', controlPaddle);
    document.addEventListener('keyup', stopPaddle);

    if (gameInterval) {
        clearInterval(gameInterval);
    }
    gameInterval = setInterval(updateGame, 1000 / 60);
}

function controlPaddle(e) {
    switch(e.key) {
        case 'w':
            player1.dy = -5;
            break;
        case 'z':
            player1.dy = 5;
            break;
        case '8':
            player2.dy = -5;
            break;
        case '2':
            player2.dy = 5;
            break;
    }
}

function stopPaddle(e) {
    if (e.key === 'w' || e.key === 'z') {
        player1.dy = 0;
    }
    if (e.key === '8' || e.key === '2') {
        player2.dy = 0;
    }
}

function movePaddles() {
    player1.y += player1.dy;
    player2.y += player2.dy;

    // Constrain paddles within canvas bounds
    if (player1.y < 0) player1.y = 0;
    if (player1.y > canvas.height - player1.height) player1.y = canvas.height - player1.height;
    if (player2.y < 0) player2.y = 0;
    if (player2.y > canvas.height - player2.height) player2.y = canvas.height - player2.height;
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePaddles();
    drawPaddle(player1);
    drawPaddle(player2);
    drawBall();
    updateBallPosition();
    updateScore();
    checkCollision();
}

function drawPaddle(paddle) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText(paddle === player1 ? player1Name : player2Name, paddle.x + paddle.width + 10, paddle.y + paddle.height / 2);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) ball.dy = -ball.dy;

    if (ball.x - ball.radius < player1.x + player1.width &&
        ball.y > player1.y && ball.y < player1.y + player1.height) {
        ball.dx = -ball.dx;
        player1Misses = 0;
    }
    
    if (ball.x + ball.radius > player2.x &&
        ball.y > player2.y && ball.y < player2.y + player2.height) {
        ball.dx = -ball.dx;
        player2Misses = 0;
    }

    if (ball.x - ball.radius < 0) {
        player2Score++;
        player1Misses++;
        resetBall();
        checkGameOver();
    }

    if (ball.x + ball.radius > canvas.width) {
        player1Score++;
        player2Misses++;
        resetBall();
        checkGameOver();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = -ball.dx;
}

function updateScore() {
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Score: ${player1Score} - ${player2Score}`, canvas.width / 2, 20);
}

function checkCollision() {
    // Additional collision detection logic if needed
}

function checkGameOver() {
    if (player1Misses >= 5) {
        clearInterval(gameInterval);
        showModal(`${player2Name} Wins!`);
    } else if (player2Misses >= 5) {
        clearInterval(gameInterval);
        showModal(`${player1Name} Wins!`);
    }
}

function showModal(message) {
    document.getElementById('modalMessage').innerText = `O ${message} perdeu`;
    document.getElementById('modal').style.display = 'block';
}

function restartGame() {
    document.getElementById('modal').style.display = 'none';
    document.body.removeChild(canvas);
    player1Score = 0;
    player2Score = 0;
    player1Misses = 0;
    player2Misses = 0;
    initGame();
}

function goToStart() {
    document.getElementById('modal').style.display = 'none';
    document.body.removeChild(canvas);
    document.getElementById('nameInput').style.display = 'flex';
}
