const character = document.querySelector('.character');
const rock = document.querySelector('.rock');

//start game

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', function() {
        startGame();
        startButton.style.display = 'none';
    });


function startGame() {
    console.log("Game Started");
    }
});

const jump = () => {
    character.classList.add('jump');
    setTimeout(() => {
        character.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const rockPosition = rock.offsetLeft;
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px', '');

    if (rockPosition <= 160 && rockPosition > 0 && characterPosition < 200) {
        rock.style.animation = 'none';
        rock.style.left = `${rockPosition}px`

        character.style.animation = 'none';
        character.style.bottom = `${characterPosition}px`;

        gameOver = true;

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump)

//

const background = document.querySelector('.background');
let position = 0;
let speed = 15; // ajuste a velocidade do scroll
let gameOver = false;

function moveBackground() {
    if (!gameOver) {
        position -= speed;
        background.style.backgroundPositionX = position + "px";
        requestAnimationFrame(moveBackground); // deixa suave e infinito
    }
    
}

moveBackground();