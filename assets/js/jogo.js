const centroJogo = document.getElementById('centro-Jogo');
const telaFinal = document.getElementById('Telafinal');
const divJogador = document.querySelector('.jogadorAtualh2');

const opcoes = ['pedra', 'papel', 'tesoura'];
let jogadas = '';

function iniciaJogo() {
    geraGridEscolha();
}

function geraGridEscolha() {
    const divEscolha = document.querySelector('.escolhaum');
    

    function criarBotao(opcaoNome, classe) {
        const botao = document.createElement('button');
        botao.className = classe;
        const img = document.createElement('img');
        img.src = `./assets/src/${opcaoNome}.png`;
        img.width = '150';
        botao.onclick = () => verificaClique(classe.replace("escolha",""));
        botao.appendChild(img);
        divEscolha.appendChild(botao);
    }
    for (let i = 0; i < opcoes.length; i++) {
        const opcaoNome = opcoes[i];
        const classeBotao = `escolha${i + 1}`;
        criarBotao(opcaoNome, classeBotao);
    }
}

function verificaClique(posicao) {
    jogadas += posicao;
    if (jogadas.length == 2){
        verificaVencedor(jogadas);
    }
    divJogador.innerHTML = "jogador 2";
}

function verificaVencedor(jogadas) {
    if (jogadas == 13 || jogadas == 21 || jogadas == 32) {
        endGame("JOGADOR 1 VENCEU!");
        return;
    }
    if (jogadas == 12 || jogadas == 23 || jogadas == 31) {
        endGame("JOGADOR 2 VENCEU!");
        return;
    }
    endGame("EMPATE!");
}

function identificaEscolha() {
    const separaJogadas = jogadas.split("");
    return `jogador 1 escolheu ${opcoes[separaJogadas[0]-1]} e jogador 2 escolheu ${opcoes[separaJogadas[1]-1]}`;
}

function endGame(resultado) {
    document.getElementById('popupMessage').innerText = resultado;
    document.getElementById('popupMessage2').innerText = identificaEscolha();
    openPopup();
    contador = 0;
  }

function openPopup() {document.getElementById('overlay').style.display = 'block';}
function closePopup() {document.getElementById('overlay').style.display = 'none';}


iniciaJogo();

