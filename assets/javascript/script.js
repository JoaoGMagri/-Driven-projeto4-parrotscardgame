// const cards = ['cardParaCima1', 'cardParaCima2', 'cardParaCima3', 'cardParaCima4',
//                'cardParaCima5', 'cardParaCima6', 'cardParaCima7'
// ]

// function iniciarGame() {

//     const quantidadeDeCartas = Number(prompt('Com quantas cartas quer jogar de 4 a 14??'));

//     if (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas%2 !== 0) {
//         alert("Escolha a quantidade de cartas entre 4 e 14 e que seja par");
//         iniciarGame();
//     }

//     iniciarCartas(quantidadeDeCartas);

// }
// // iniciarGame();

// function iniciarCartas(qtdeCartas) {

//     const div = document.querySelector('.game');

//     for (let i = 0; i < qtdeCartas; i++) {
        
//         div.innerHTML += `
//             <div class="cardParaBaixo" onclick="virarCarta(this)">

//             </div>
//         `;
        
//     }

// }

const game = document.querySelector('.game');

const listaDeCartas = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
]

let primeiraCarta = '';
let segundaCarta = '';


function criarElemento(tag, Name) {
    const elemento = document.createElement(tag);
    elemento.className= Name;
    return elemento;
}

function revelaCarta({target}) {

    if (target.parentNode.className.includes('revelaCarta')){
        return;
    }

    target.parentNode.classList.add('revelaCarta')

}

function criarCartas(cartas) {

    const carta = criarElemento('div', 'carta');
    const frente = criarElemento('div', 'faces frente');
    const atras = criarElemento('div', 'faces atras');

    frente.style.backgroundImage = `url('assets/image/${cartas}')`;

    carta.appendChild(frente);
    carta.appendChild(atras);

    carta.addEventListener('click', revelaCarta);

    return carta;

}

function carregarJoga() {

    const duplicaListaDeCartas = [ ...listaDeCartas, ...listaDeCartas ];

    const arrayEmbaralhado = duplicaListaDeCartas.sort( () => Math.random() - 0.5 );


    arrayEmbaralhado.forEach((cartas) => {
        console.log(cartas);
        const carta = criarCartas(cartas);
        game.appendChild(carta);

    }); 

}
carregarJoga();


