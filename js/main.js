let play = (qtd = 0);
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");

const choice = (el, pos) => {
  const chObj = {
    ch1: choice1.innerHTML,
    ch2: choice2.innerHTML,
    ch3: choice3.innerHTML,
  };

  if (play !== -1) {
    const random = house(chObj);
    compare(pos, random);

    choice1.innerHTML = `${el}`;
    choice3.remove();
  } else {
    window.location.reload();
  }
};

const getVal = () => {
  choice1.addEventListener("click", function () {
    choice(choice1.innerHTML, 0);
  });

  choice2.addEventListener("click", function () {
    choice(choice2.innerHTML, 1);
  });

  choice3.addEventListener("click", function () {
    choice(choice3.innerHTML, 2);
  });
};

getVal();

function house(chObj) {
  const { ch1, ch2, ch3 } = chObj;
  let valorAleatorio = parseInt(Math.random() * 3);
  choice2.innerHTML = "";

  if (valorAleatorio == 0) {
    choice2.insertAdjacentHTML("afterbegin", ch1);
  } else if (valorAleatorio == 1) {
    choice2.insertAdjacentHTML("afterbegin", ch2);
  } else {
    choice2.insertAdjacentHTML("afterbegin", ch3);
  }

  return valorAleatorio;
}

function compare(casa, valor) {
  const value = document.getElementById("value");
  const text = document.getElementById("res");
  text.style.visibility = "visible";
  //   const text = document.createElement("h1");

  if (casa === valor) {
    text.innerHTML = "Empate";
    value.innerHTML = `${qtd}`;
  } else if (casa == 0 && valor == 1) {
    qtd = 0;
    value.innerHTML = `${qtd}`;
    text.innerHTML = "Você Perdeu";
  } else if (casa == 0 && valor == 2) {
    qtd++;
    value.innerHTML = `${qtd}`;
    text.innerHTML = "Você ganhou";
  } else if (casa == 1 && valor == 2) {
    qtd = 0;
    value.innerHTML = `${qtd}`;
    text.innerHTML = "Você Perdeu";
  } else if (casa == 1 && valor == 0) {
    text.innerHTML = "Você ganhou";
    qtd++;
    value.innerHTML = `${qtd}`;
  } else if (casa == 2 && valor == 0) {
    qtd = 0;
    value.innerHTML = `${qtd}`;
    text.innerHTML = "Você Perdeu";
  } else if (casa == 2 && valor == 1) {
    qtd++;
    value.innerHTML = `${qtd}`;
    text.innerHTML = "Você ganhou";
  }

  play = -1;
}
