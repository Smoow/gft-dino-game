const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.code === 'Space') {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            // Going down with dino
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
        // Going up with dino
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20)
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1400;
    let randomTime = Math.random() * 6000;
    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1400 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
    
}

createCactus();
document.addEventListener('keyup', handleKeyUp);