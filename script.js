//converter objeto em array
const elementos = document.querySelectorAll("button")
const casas = Array.from(elementos)

const combGanhar = [
    ["n1", "n2", "n3"],
    ["n4", "n5", "n6"],
    ["n7", "n8", "n9"],
    ["n1", "n4", "n7"],
    ["n2", "n5", "n8"],
    ["n3", "n6", "n9"],
    ["n1", "n5", "n9"],
    ["n3", "n5", "n7"]
]


document.addEventListener("click", (el) => {
    jogoVelha(el.target.id) //target = retorna o elemento onde ocorreu o evento(w3schools)
})

let checarTurno = true;

const jogadorX = "X";
const jogadorO = "O";

let jogX = [];
let jogO = [];

let emp = 0

function jogoVelha(id) {
    const casa = document.getElementById(id)
    turno = checarTurno ? jogadorX : jogadorO //se checarTurno for true jogadorX se nn jogadorO
    casa.textContent = turno
    casa.classList.add(turno)
    casa.setAttribute("disabled", true)
    checarTurno = !checarTurno //alterar ao final o checarTurno para haver a mudança entre X e O

    //armazenar botões pressionados
    if (document.getElementById(id).className == "X"){
        jogX.push(id)
        console.log("Jogador X: ", jogX)
    } else {
        jogO.push(id)
        console.log("Jogador O: ", jogO)
    }

    //definir vencedor
    if (jogX.findIndex((i) => combGanhar[i])) {
        console.log("teste")
        emp = 0
    }
    //empate
    emp++
    if(emp == 9) {
        alert("Deu Velha!!!")
    }
}
