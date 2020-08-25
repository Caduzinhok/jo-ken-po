const choose1 = document.getElementById('choose1');
const choose2 = document.getElementById('choose2');
const gamechoice = document.getElementById('gamechoices');
const gameplay = document.getElementById('gameplay');
const paper = document.getElementById('paper').cloneNode();
const youwin = document.getElementById("youwin");
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
document.getElementById('paper').addEventListener('click',forChoice1);
function forChoice1() {
    choose1.innerHTML = `${paper3}`;
    choose2.innerHTML = ``;
    const random = house();
    compare(0,random);
    gamechoice.style.left = "-80%";
    gameplay.style.left = "25%";
    setTimeout(back,2500);
}
document.getElementById('scissor').addEventListener('click', forChoice2);
function forChoice2() {
    choose1.innerHTML = `${scissor3}`;
    choose2.innerHTML = ``;
    const random = house();
    compare(1,random);
    gamechoice.style.left = "-80%";
    gameplay.style.left = "25%";
    setTimeout(back,2500);
}
document.getElementById('rock').addEventListener('click',forChoice3);
function forChoice3() {
    choose1.innerHTML = `${rock3}`;
    choose2.innerHTML = ``;
    const random = house();
    compare(2,random);
    gamechoice.style.left = "-80%";
    gameplay.style.left = "25%";
    setTimeout(back,2500);
}
function house(){
    var valorAleatorio = Math.random() * 3;
    var valorRandom = parseInt(valorAleatorio);
    if(valorRandom == 0){
        choose2.appendChild(paper);
    }
    else if(valorRandom == 1){
        choose2.appendChild(scissor);
    }
    else {
        choose2.appendChild(rock);
    }
    return valorRandom;
}
function compare(casa,valor) {
    if(casa === valor ){
        value.innerHTML = `${qtd}`
        youwin.innerHTML = `<h1>Empate</h1>`;
    }
    else if(casa == 0 && valor == 1){
        qtd = 0;
        value.innerHTML = `${qtd}`
        youwin.innerHTML = `<h1>Você Perdeu</h1>`;
        
    }
    else if(casa == 0 && valor == 2){
        qtd++;
        value.innerHTML = `${qtd}`
        youwin.innerHTML = `<h1>Você Ganhou</h1>`;
    }
    else if(casa == 1 && valor == 2){
        qtd = 0;
        value.innerHTML = `${qtd}`
        youwin.innerHTML = `<h1>Você Perdeu</h1>`;

    }
    else if(casa == 1 && valor == 0){
        qtd++;
        value.innerHTML = `${qtd}`
        youwin.innerHTML = `<h1>Você Ganhou</h1>`;
    }
    else if(casa == 2 && valor == 0){
        qtd = 0;
        value.innerHTML = `${qtd}`
        youwin.innerHTML = `<h1>Você Perdeu</h1>`;
        
    }
    else if(casa == 2 && valor == 1){
        qtd++;
        value.innerHTML = `${qtd}`
        youwin.innerHTML = `<h1>Você Ganhou</h1>`;
    }
}

function back() {
    gamechoice.style.left = "35%";
    gameplay.style.left = "100%";
}