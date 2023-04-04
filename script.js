//converter objeto em array
const elementos = document.querySelectorAll("button")
const casas = Array.from(elementos)

let pontosX = document.getElementsByClassName("pontosX")
let pontosO = document.getElementsByClassName("pontosO")

const COMBINACOES = [
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

let checaTurno = true;

const jogadorX = "X";
const jogadorO = "O";

let jogX = [];
let jogO = [];

let emp = 0

function jogoVelha(id) {
    const casa = document.getElementById(id)
    turno = checaTurno ? jogadorX : jogadorO //se checarTurno for true jogadorX se nn jogadorO
    casa.textContent = turno
    casa.classList.add(turno)
    casa.setAttribute("disabled", true)
    checaTurno = !checaTurno //alterar ao final o checarTurno para haver a mudança entre X e O

    //armazenar botões pressionados
    if (document.getElementById(id).className == "X"){
        jogX.push(id)
        console.log("Jogador X: ", jogX)
    } else if (document.getElementById(id).className == "O") {
        jogO.push(id)
        console.log("Jogador O: ", jogO)
    }

    //definir vencedor - PLayer X
    if (jogX.includes("n1") && jogX.includes("n2") && jogX.includes("n3")) {
        venceu()
        
    } else if (jogX.includes("n4") && jogX.includes("n5") && jogX.includes("n6")) {
        console.log("vencedor")
    } else if (jogX.includes("n7") && jogX.includes("n8") && jogX.includes("n9")) {
        console.log("vencedor")
    } else if (jogX.includes("n1") && jogX.includes("n4") && jogX.includes("n7")) {
        console.log("vencedor")
    } else if (jogX.includes("n2") && jogX.includes("n5") && jogX.includes("n8")) {
        console.log("vencedor")
    } else if (jogX.includes("n3") && jogX.includes("n6") && jogX.includes("n9")) {
        console.log("vencedor")
    } else if (jogX.includes("n1") && jogX.includes("n5") && jogX.includes("n9")) {
        console.log("vencedor")
    } else if (jogX.includes("n3") && jogX.includes("n5") && jogX.includes("n7")) {
        console.log("vencedor")
    } else {
        //empate
        emp++
        if(emp == 9) {
            alert("Deu Velha!!!")
        }
    }

    function venceu() {
        alert("Jogador " + turno + " Venceu! Parábens :)")

        casa.innerHTML = " "
        casa.classList.remove(turno)
        jogX = []
        jogO = []

        casa.setAttribute("disabled", false)
        
        checaTurno = true
    }



}