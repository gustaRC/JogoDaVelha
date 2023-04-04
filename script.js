//converter objeto em array
const elementos = document.querySelectorAll("button");
const casas = Array.from(elementos);

let pontosX = document.getElementsByClassName("pontosX");
let pX = 0;
let pontosO = document.getElementsByClassName("pontosO");
let pO = 0;

document.addEventListener("click", (el) => {
  jogoVelha(el.target.id); //target = retorna o elemento onde ocorreu o evento(w3schools)
});

let checaTurno = true;

const jogadorX = "X";
const jogadorO = "O";

let jogX = [];
let jogO = [];

let emp = 0;

function jogoVelha(id) {
  const casa = document.getElementById(id);
  turno = checaTurno ? jogadorX : jogadorO; //se checarTurno for true jogadorX se nn jogadorO
  casa.textContent = turno;
  casa.classList.add(turno);
  casa.setAttribute("disabled", true);
  checaTurno = !checaTurno; //alterar ao final o checarTurno para haver a mudança entre X e O

  //armazenar botões pressionados
  if (document.getElementById(id).className == "X") {
    jogX.push(id);
    console.log("Jogador X: ", jogX);
  } else if (document.getElementById(id).className == "O") {
    jogO.push(id);
    console.log("Jogador O: ", jogO);
  }

  //definir vencedor - PLayer X
  if (jogX.includes("n1") && jogX.includes("n2") && jogX.includes("n3")) {
    venceu();
  } else if (
    jogX.includes("n4") &&
    jogX.includes("n5") &&
    jogX.includes("n6")
  ) {
    console.log("vencedor");
  } else if (
    jogX.includes("n7") &&
    jogX.includes("n8") &&
    jogX.includes("n9")
  ) {
    console.log("vencedor");
  } else if (
    jogX.includes("n1") &&
    jogX.includes("n4") &&
    jogX.includes("n7")
  ) {
    console.log("vencedor");
  } else if (
    jogX.includes("n2") &&
    jogX.includes("n5") &&
    jogX.includes("n8")
  ) {
    console.log("vencedor");
  } else if (
    jogX.includes("n3") &&
    jogX.includes("n6") &&
    jogX.includes("n9")
  ) {
    console.log("vencedor");
  } else if (
    jogX.includes("n1") &&
    jogX.includes("n5") &&
    jogX.includes("n9")
  ) {
    console.log("vencedor");
  } else if (
    jogX.includes("n3") &&
    jogX.includes("n5") &&
    jogX.includes("n7")
  ) {
    console.log("vencedor");
  } else {
    //empate
    emp++;
    if (emp == 9) {
      alert("Deu Velha!!!");
    }
  }

  function venceu(pontosZ) {
    setTimeout(() => {
      alert("Jogador " + turno + " Venceu! Parábens :)");
    }, 250);

    pX++;
    pontosX.textContent = `Pontos: ${pX}`;

    // elementos.classList.remove("X");
    // elementos.classList.remove("O");
    jogX = [];
    jogO = [];

    // const resetCasa = document.querySelectorAll(id);
    // resetCasa.classList.remove("X");
    // resetCasa.classList.remove("O");
    // casa.setAttribute("disabled", false);
    // casa.innerHTML = "";
  }
}
