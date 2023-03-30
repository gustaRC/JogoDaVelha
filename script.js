let jogador = null

function jogadorAtual(j) {
    jogador = j
}

var elementos = document.querySelectorAll("button")

/* 
vai dar certo com fé em god!!!
console.log(elementos[0].textContent = "O")
console.log(elementos[5].innerHTML = "X")
*/

function inicio() {
    elementos.innerHTML = ""
    
    
    
}
inicio()

function alteraConteudo(i) {
    elementos[i].textContent = valor()
}

function valor() {
    if (jogador == "X") {
        jogador = "O"
        return "O"
    } else {
        jogador = "X"
        return "X"
    }
}

