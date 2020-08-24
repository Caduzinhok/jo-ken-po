const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const paper = document.getElementById('paper').cloneNode();
const paper4 = document.getElementById('paper');

const paper2 = document.getElementById('paper2').cloneNode();
const scissor = document.getElementById('scissor').cloneNode();
const scissor2 = document.getElementById('scissor2').cloneNode();
const rock = document.getElementById('rock').cloneNode();
const rock2 = document.getElementById('rock2').cloneNode();
const value = document.getElementById('value');
var qtd = 0;
paper.appendChild(paper2);
scissor.appendChild(scissor2);
rock.appendChild(rock2);
var paper3 = `<div class="paper distance"id = 'paper'>
<img src="images/icon-paper.svg" alt="" id = 'paper2'>
</div>`
var scissor3 = `<div class="scissors distance" id= 'scissor'>
<img src="images/icon-scissors.svg" alt="" id = "scissor2">
</div>`;
var rock3 = `<div class="rock distance bottom" id = 'rock'>
<img src="images/icon-rock.svg" alt="" id ="rock2">
</div>`;
choice1.addEventListener('click',forChoice1);
function forChoice1() {
    choice1.innerHTML = `${paper3}`
    choice2.innerHTML = '';
    choice3.innerHTML = '';
    const random = house();
    compare(0,random);
}
choice2.addEventListener('click', forChoice2);
function forChoice2() {
    choice2.innerHTML = '';
    choice1.innerHTML = `${scissor3}`;
    choice3.innerHTML = '';
    const random = house();
    compare(1,random);

}
choice3.addEventListener('click',forChoice3);
function forChoice3() {
    choice1.innerHTML = `${rock3}`;
    choice2.innerHTML = '';
    choice3.innerHTML = '';
    const random = house();
    compare(2,random);

}
function house(){
    var valorAleatorio = Math.random() * 3;
    var valorRandom = parseInt(valorAleatorio);
    if(valorRandom == 0){
        choice2.appendChild(paper);
    }
    else if(valorRandom == 1){
        choice2.appendChild(scissor);
    }
    else {
        choice2.appendChild(rock);
    }
    return valorRandom;
}

function back() {
    choice1.innerHTML = '';
    choice2.innerHTML = '';
    choice3.innerHTML = '';
    choice1.innerHTML = `${paper3}`;
    choice2.innerHTML = `${scissor3}`;
    choice3.innerHTML = `${rock3}`;
}
function compare(casa,valor) {
    back();
    const text = document.createElement('h1');
    const playAgain = document.createElement('h1');
    playAgain.innerHTML = "Play Again";
    const button = document.createElement('button');
    button.appendChild(playAgain);
    if(casa === valor ){
        text.innerHTML = 'Empate'
        value.innerHTML = `${qtd}`
        choice3.appendChild(text);
    }
    else if(casa == 0 && valor == 1){
        qtd = 0;
        value.innerHTML = `${qtd}`
        text.innerHTML = 'Você Perdeu'
        choice3.appendChild(text);
    }
    else if(casa == 0 && valor == 2){
        qtd++;
        value.innerHTML = `${qtd}`
        text.innerHTML = 'Você ganhou'
        choice3.appendChild(text);
    }
    else if(casa == 1 && valor == 2){
        qtd = 0;
        value.innerHTML = `${qtd}`
        text.innerHTML = 'Você Perdeu'
        choice3.appendChild(text);
    }
    else if(casa == 1 && valor == 0){
        text.innerHTML = 'Você ganhou'
        qtd++;
        value.innerHTML = `${qtd}`
        choice3.appendChild(text);
    }
    else if(casa == 2 && valor == 0){
        qtd = 0;
        value.innerHTML = `${qtd}`
        text.innerHTML = 'Você Perdeu'
        choice3.appendChild(text);
    }
    else if(casa == 2 && valor == 1){
        qtd++;
        value.innerHTML = `${qtd}`
        text.innerHTML = 'Você ganhou'
        choice3.appendChild(text);
    }
}