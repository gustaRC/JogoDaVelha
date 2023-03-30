let jogador = null;

function jogadorAtual(j) {
  jogador = j;
}

var elementos = document.querySelectorAll("button");

/* 
vai dar certo com fé em god!!!
console.log(elementos[0].textContent = "O")
console.log(elementos[5].innerHTML = "X")
*/

function inicio() {
  elementos.innerHTML = "";
}
inicio();

function alteraConteudo(i) {
  elementos[i].textContent = valor();
}

function valor() {
  if (jogador == "X") {
    jogador = "O";
    return "O";
  } else {
    jogador = "X";
    return "X";
  }
}

/*
parte de pressionar o botao:
ao apertar muda o conteudo, puxa o indice q foi apertado
armazena em outro array, caso contenha a combinação certa: parabens
apos apertado o botao tambem remover o indice com as funções de array



Procurar o índice de um item na Array
array.indexOf("i")

Remover um item pela posição do índice
array.splice(i)

pra designar empate:
if (array.lenght >= 9)
*/
