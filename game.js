// Variáveis para elementos do jogo
var bird = document.getElementById('bird');
var gameContainer = document.getElementById('game-container');

// Posição inicial do pássaro
var birdX = 50;
var birdY = gameContainer.clientHeight - bird.clientHeight; // Posição na parte inferior do contêiner

// Velocidade do pássaro
var birdSpeedX = 5;

// Evento de lançamento do pássaro ao clicar no botão
function launchBird() {
    // Inicia o movimento do pássaro
    var interval = setInterval(function () {
        birdX += birdSpeedX;
        bird.style.left = birdX + 'px';

        // Condição de parada (exemplo): Quando o pássaro atingir a borda direita do contêiner
        if (birdX >= gameContainer.clientWidth) {
            clearInterval(interval); // Para o movimento
            resetBird(); // Reinicia o pássaro para a posição inicial
        }
    }, 10); // Intervalo de atualização do movimento (em milissegundos)
}

// Função para reiniciar o pássaro para a posição inicial
function resetBird() {
    birdX = 50; // Posição inicial
    bird.style.left = birdX + 'px';
}

// Evento de clique no botão para lançar o pássaro
document.getElementById('launch-button').addEventListener('click', launchBird);
