const game = document.querySelector('.game');

const todasAsCartas = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
];
const listaDeCartas = [];

let primeiraCarta = '';
let segundaCarta = '';
let quantidadeDeCartas = 0;
let tentativas = 0;

function criarElemento(tag, Name) {
    const elemento = document.createElement(tag);
    elemento.className= Name;
    return elemento;
}

function iniciarGame() {

    quantidadeDeCartas = Number(prompt('Com quantas cartas quer jogar de 4 a 14??'));

    if (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas%2 !== 0) {
        
        alert("Escolha a quantidade de cartas entre 4 e 14 e que seja par");
        iniciarGame();
    
    }else {

        for (let i = 0; i < (quantidadeDeCartas/2); i++) {

            listaDeCartas[i] = todasAsCartas[i];
        
        }
    
    }

}
iniciarGame();

function fimDeJogo() {

    const cartasViradas = document.querySelectorAll('.revelaCarta');

    if (cartasViradas.length === quantidadeDeCartas) {
        
        setTimeout(() => {
            alert(`Você ganhou em ${tentativas} jogadas!`);

        }, 1000);
    }

}

function checarCartas() {

    tentativas++;

    const primeiroAtributo = primeiraCarta.getAttribute('data-carta');
    const segundoAtributo = segundaCarta.getAttribute('data-carta');

    if (primeiroAtributo === segundoAtributo) {

        primeiraCarta = '';
        segundaCarta = '';

        fimDeJogo();

    } else {

        setTimeout(() => {

            primeiraCarta.classList.remove('revelaCarta');
            segundaCarta.classList.remove('revelaCarta');
            
            primeiraCarta = '';
            segundaCarta = '';
        }, 1000);


    }

}

function revelaCarta({target}) {

    if (target.parentNode.className.includes('revelaCarta')){
        return;
    }

    if (primeiraCarta === '') {
        
        target.parentNode.classList.add('revelaCarta');
        primeiraCarta = target.parentNode;

    } else if (segundaCarta === '') {

        target.parentNode.classList.add('revelaCarta');
        segundaCarta = target.parentNode;        


        checarCartas();
    }

}

function criarCartas(cartas) {

    const quantasCartas = document.querySelector('.game');

    quantasCartas.style.gridTemplateColumns = `repeat(${quantidadeDeCartas/2} , 117px)`;

    const carta = criarElemento('div', 'carta');
    const frente = criarElemento('div', 'faces frente');
    const atras = criarElemento('div', 'faces atras');

    frente.style.backgroundImage = `url('assets/image/${cartas}')`;

    carta.appendChild(frente);
    carta.appendChild(atras);

    carta.addEventListener('click', revelaCarta);
    carta.setAttribute('data-carta', cartas);

    return carta;

}

function carregarJoga() {

    const duplicaListaDeCartas = [ ...listaDeCartas, ...listaDeCartas ];

    const arrayEmbaralhado = duplicaListaDeCartas.sort( () => Math.random() - 0.5 );


    arrayEmbaralhado.forEach((cartas) => {

        const carta = criarCartas(cartas);
        game.appendChild(carta);

    }); 

}
carregarJoga();


