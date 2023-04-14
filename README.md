# Teste_JogoDaVelha
<meta charset="UTF-8">

<h2 style="text-align: center;" ><strong> <img src="./imgs/js.png" alt="js_icon">  Teste JavaScript - Jogo da Velha</strong></h2>
<br>
<div style="display:flex; justify-content: center">
<a href="https://gustarc.github.io/Teste_JogoDaVelha/"><img src="./imgs/JogoDaVelha.png" alt="jogoDaVelha" style="width:300px"></a>
</div>
<a href="https://gustarc.github.io/Teste_JogoDaVelha/">Link do Jogo!</a>


<br>
<h3><strong>Lógica do Jogo:</strong> Dois jogadores (Jogador X e O) selecionarão as casas disponíveis, quem fizer a combinação correta vencerá! &#128513</h3>
<hr>
<br>

<h3>&#127968<strong> HTML</h3></strong>
Inicia-se pelo header contendo toda a parte acima do bloco de jogo, como título, pontuação jogadores e pontuações.
<br>
Logo após, existe o bloco onde de fato ocorre o jogo. Sendo englobada por uma section, seguido de uma div que engloba os botões que funcionam como as casas do jogo, cada botão tem um id próprio.

E por fim, há um footer contendo os créditos do criador.
<br>
<hr>
<br>
<h3>&#127912<strong> CSS</h3></strong>
A parte necessária do CSS se resume a todas as alterações e mudanças realizadas quando algum jogador vence, o conteudo dos botões ao serem pressionados e as animações anunciando ao vencedor!
<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
    .X::before {<br>
    color: rgb(19, 98, 122);<br>
    content: "X";<br>
}<br>
<br>
.O::before {<br>
    content: "O";<br>
    color: rgb(165, 40, 40);<br>
}<br>
<br>
.txtJogX {<br>
    text-decoration:underline;<br>
}<br>
<br>
.txtJogO {<br>
    text-decoration:underline;<br>
}<br>
<br>
@keyframes baixoPraCima{<br>
    from {height: 0; font-size: 0;}<br>
    to {height: 30px; font-size: 15}<br>
}<br>
<br>
#ganhador.subir {<br>
    font-family: 'Nunito', sans-serif;<br>
    animation-name: baixoPraCima;<br>
    animation-duration: 0.25s;<br>
    width: 100%;<br>
    height: 30px;<br>
    display: flex;<br>
    align-items: center;<br>
    justify-content: center;<br>
    position: absolute;<br>
    top: 0;<br>
    font-size: 18px;<br>
    background-color: rgb(70, 255, 70);<br>
    color: rgb(4, 92, 51);<br>
}<br>
<br>
@keyframes CimaPraBaixo{<br>
    from {height: 30px; font-size: 15}<br>
    to {height: 0; font-size: 0}<br>
}<br>
<br>
#ganhador.descer {<br>
    font-family: 'Nunito', sans-serif;<br>
    animation-name: CimaPraBaixo;<br>
    animation-duration: 0.25s;<br>
    animation-timing-function: ease-out;<br>
    width: 100%;<br>
    height: 0px;<br>
    display: flex;<br>
    align-items: center;<br>
    justify-content: center;<br>
    position: absolute;<br>
    top: 0;<br>
    font-size: 0px;<br>
    background-color: rgb(70, 255, 70);<br>
    color: rgb(4, 92, 51);<br>
}  <br>
<br>
#ganhador.velhaSubir {<br>
    font-family: 'Nunito', sans-serif;<br>
    animation-name: baixoPraCima;<br>
    animation-duration: 0.25s;<br>
    width: 100%;<br>
    height: 30px;<br>
    display: flex;<br>
    align-items: center;<br>
    justify-content: center;<br>
    position: absolute;<br>
    top: 0;<br>
    font-size: 18px;<br>
    background-color: rgb(243, 255, 70);<br>
    color: rgb(92, 91, 4);<br>
}<br>
<br>
#ganhador.velhaDescer {<br>
    font-family: 'Nunito', sans-serif;<br>
    animation-name: CimaPraBaixo;<br>
    animation-duration: 0.25s;<br>
    animation-timing-function: ease-out;<br>
    width: 100%;<br>
    height: 0px;<br>
    display: flex;<br>
    align-items: center;<br>
    justify-content: center;<br>
    position: absolute;<br>
    top: 0;<br>
    font-size: 0px;<br>
    background-color: rgb(243, 255, 70);<br>
    color: rgb(92, 91, 4);
}<br>
</div>

<br>
<hr>
<br>
<h3>&#128187<strong> Script</h3></strong>

É chamado a função “jogoVelha”  como ponto de partida do código! Que recebe como parâmetro o elemento - juntamente a seu id - que foi pressionado, neste caso as casas do jogo.

<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
    document.addEventListener("click", (el) => {
    jogoVelha(el.target.id);
    });
</div>
<br>
<br>

Variáveis criadas de ínicio:
<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
let pontosX = document.querySelector(".pontosX");<br>
let pX = 1;<br>
let pontosO = document.querySelector(".pontosO");<br>
let pO = 1;<br>
<br>
let txtJogX = document.querySelector(".jogadorX h3");<br>
let txtJogO = document.querySelector(".jogadorO h3");<br>
<br>
let checaTurno = true;
<br>
const jogadorX = "X";<br>
const jogadorO = "O";
<br>
let jogX = [];<br>
let jogO = [];
<br>
let emp = 0;

let infoVencedor = document.getElementById("ganhador");
</div>

<ul>
<li><em>pontosX:</em> Será utilizado para alterar o placar. Referente ao Jogador X;</li>
<li><em>pX:</em> Contagem de pontos do jogador X;</li>
<li><em>pontosO:</em> Será utilizado para alterar o placar. Referente ao Jogador O;</li>
<li><em>pO:</em> Contagem de pontos do jogador O;</li>
<li><em>checaTurno:</em> Utilizado para alternar a vez dos jogadores;</li>
<li><em>jogadorX:</em> Utilizado para formatar a casa em prol do Jogador X;</li>
<li><em>jogadorO:</em> Utilizado para formatar a casa em prol do Jogador O;</li>
<li><em>jogX:</em> Será armazenado as casas pressionadas pelo jogador X;</li>
<li><em>jogO:</em> Será armazenado as casas pressionadas pelo jogador O;</li>
<li><em>emp:</em> Utilizado para definir empate;</li>
<li><em>infoVencedor:</em> Utilizado para informar o ganhador;</li>
</ul>


<br>
Função “jogoVelha” engloba como o jogo funcionará. De instante, armazenaremos todos os ids na variável “casa”. <br>
A variável “turno” que se define em uma condição que se “checaTurno” for true, “jogadorX” será armazenado, se não “jogadorO”.<br>
Em seguida, adicionaremos a classe que o turno indicará (jogador X ou O) nas casas pressionadas, assim armazenaremos posteriormente para cada jogador em formato de array separadamente.<br>
Prosseguindo, com o setAttribute desabilita-se o botão pressionado.
Por fim, o valor boolean de “checaTurno” será alterado, se estiver como true alterna para false e vice-versa.<br>

<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
    function jogoVelha(id) { <br>
    const casa = document.getElementById(id);<br>
    turno = checaTurno ? jogadorX : jogadorO; <br>
    casa.classList.add(turno); <br>
    casa.setAttribute("disabled", true); <br>
    checaTurno = !checaTurno; <br>
    ...
</div>
<br>



Em um sistema de condições armazena-se o valor das casas de acordo com o jogador. Percorrerá pelo documento e se o elemento pertencer a classe X ou O será adicionado as variáveis “jogX” ou “jogO”.Será de valia para determinar o ganhador.<br>
<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
if (document.getElementById(id).className == "X") { <br>
    jogX.push(id);<br>
  } else if (document.getElementById(id).className == "O") {<br>
    jogO.push(id); }
</div>
<br>


Possiveis formas de ganhar:
<div style="display:flex; justify-content: center">
<img src="./imgs/combGanhar_1.png" alt="combGanhar_1" style="width:150px; height: 150px; margin: 10px">
<img src="./imgs/combGanhar_3.png" alt="combGanhar_3" style="width:150px; height: 150px; margin: 10px">
<img src="./imgs/combGanhar_2.png" alt="combGanhar_2" style="width:150px; height: 150px; margin: 10px">
</div>
<br>
<br>

As seguintes condições definirão o vencedor baseado nas imagens acima.
<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
const jogadores = [jogO, jogX]<br>
<br>
  jogadores.forEach(element => {<br>
    if (<br>
        element.includes("n1") && <br>
        element.includes("n2") &&<br>
        element.includes("n3")<br>
    ) {<br>
        venceu();<br>
    } else if (<br>
        element.includes("n4") &&<br>
        element.includes("n5") &&<br>
        element.includes("n6")<br>
    ) {<br>
        venceu()<br>
    } else if (<br>
        element.includes("n7") &&<br>
        element.includes("n8") &&<br>
        element.includes("n9")<br>
    ) {<br>
        venceu()<br>
    } else if (<br>
        element.includes("n1") &&<br>
        element.includes("n4") &&<br>
        element.includes("n7")<br>
    ) {<br>
        venceu()<br>
    } else if (<br>
        element.includes("n2") &&<br>
        element.includes("n5") &&<br>
        element.includes("n8")<br>
    ) {<br>
        venceu()<br>
    } else if (<br>
        element.includes("n3") &&<br>
        element.includes("n6") &&<br>
        element.includes("n9")<br>
    ) {<br>
        venceu()<br>
    } else if (<br>
        element.includes("n1") &&<br>
        element.includes("n5") &&<br>
        element.includes("n9")<br>
    ) {<br>
        venceu()<br>
    } else if (<br>
        element.includes("n3") &&<br>
        element.includes("n5") &&<br>
        element.includes("n7")<br>
    ) {<br>
        venceu()<br>
    } else {<br>
        //empate<br>
        if(element.length > 2){<br>
            emp++;<br>
        }<br>
        if (emp == 9) {<br>
            infoVencedor.classList.add("velhaSubir")  <br> 
            infoVencedor.textContent = `Deu Velha!`<br>
            setTimeout(() => {<br>
                btn_resetar()<br>
                jogX = [];<br>
                jogO = [];<br>
                emp = 0<br>
                infoVencedor.classList.remove<br>("velhaSubir")  <br>
                infoVencedor.textContent = ``  <br>
                infoVencedor.classList.add("velhaDescer")<br>
                setTimeout(() => {<br>
                    infoVencedor.classList.remove<br>("velhaDescer")  <br>
                }, 300)<br>
            }, 500)
        }
    }
  });<br>
</div>

A variável "jogadores" armazena os arrays contendo as casas pressionadas pelos jogadores X e O.
Sendo que “jogadores” está junto ao forEach que tem como objetivo passar por cada index dos arrays aplicando alguma função. Neste caso, o forEach analisará a condição que se algum dos arrays tiver incluído as combinações necessárias para ganhar chamará a função “venceu()”, se não executará a parte de empate do código que abordaremos a frente.
<br>
<br>


A função "venceu()" tem como objetivo redefenir os campos e variaveis e contabilizar os pontos.
<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
function venceu() {<br>
    if (turno == jogadorX) {<br>
        txtJogX.classList.add("txtJogX")<br>
        setTimeout(() => {<br>
            txtJogX.removeAttribute("class")<br>
        }, 800)<br>
    } else {<br>
        txtJogO.classList.add("txtJogO")<br>
        setTimeout(() => {<br>
            txtJogO.removeAttribute("class")<br>
        }, 800) }<br>
    infoVencedor.classList.add("subir")  <br> 
    infoVencedor.textContent = `Jogador ${turno} Ganhou!!!`<br>
    ...
</div>

A primeira estrutura de condições é somente para fins estéticos com a função de aplicar e remover uma classe para o ganhador. Nota-se que retirar a classe ocorrerá após o determinado tempo, isso porque o setTimeout engloba esta parte. Ressalta-se, que logo após, o “infoVencedor” anunciará o ganhador com uma animation definida no CSS.
<br>
<br>

<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
setTimeout(() => { <br>
        let alterarPlacar = !checaTurno ? pontosX : pontosO;<br>
        let alterarPontos = !checaTurno ? pX++ : pO++;<br>
        alterarPlacar.textContent = `Pontos: $<br>{alterarPontos}`;<br>
        emp = 0<br>
        btn_resetar()<br>
        jogX = [];<br>
        jogO = [];<br>
        checaTurno = !checaTurno<br>
        infoVencedor.classList.remove("subir")  <br>
        infoVencedor.textContent = ``  <br>
        infoVencedor.classList.add("descer")<br>
        setTimeout(() => {<br>
            infoVencedor.classList.remove("descer")  <br>
        }, 300)<br>
    }, 500); }<br>
</div>

Prosseguindo, dentro do setTimeout acontecerá as principais virtudes da função. Com as variáveis “alterarPlacar” e “alterarPontos” altera-se os pontos dos jogadores, “alterarPlacar” tem o objetivo de sinalizar de quem os pontos mudarão e “alterarPontos” com função de contabilizar os mesmos, a sintaxe abaixo é onde as mudanças mencionadas ocorrerão.

Logo após, o contabilizador do empate ("emp") será redefinido para quando uma nova rodada se iniciar não haver conflito.
A função “btn_resetar” tem como objetivo redefinir os valores das casas.
Em seguida, reinicia os arrays “jogX” e “jogO”, troca o turno entre os jogadores e termina a animação do “infoVencedor”.
<br>
<br>

Função "btn_resetar()"
<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
  function btn_resetar() {<br>
    const childrens = document.getElementsByClassName("jogoVelha")[0].children;<br>
        for (let children of childrens) {<br>
            children.removeAttribute("class")<br>
            children.removeAttribute("disabled")<br>
        }
  }
}
</div>
Percorre pelo bloco definido pela classe "jogoVelha" no HTML. Com o intuito de ir eliminando as tags class e disabled de cada elemento filho.
<br>
<br>

Parte de Empate:
<div style="background-color: rgb(70, 70, 70); border-radius: 5px; padding:10px">
            infoVencedor.classList.add("velhaSubir") <br>
            infoVencedor.textContent = `Deu Velha!` <br>
            setTimeout(() => {<br>
                btn_resetar()<br>
                jogX = [];<br>
                jogO = [];<br>
                emp = 0<br>
                infoVencedor.classList.remove<br>("velhaSubir")  <br>
                infoVencedor.textContent = ``  <br>
                infoVencedor.classList.add("velhaDescer")<br>
                setTimeout(() => {<br>
                    infoVencedor.classList.remove<br>("velhaDescer")  <br>
                }, 300)
            }, 500)<br>
</div>
Lembra-se que esta estruturá está presente no else das condições para definir um vencedor.

Assim, ocorre o início  da animação para anunciar o empate. Logo após dentro do setTimeout chamaremos a função “btn_resetar”, reinicia os arrays “jogX”, “jogO” e “emp” e por fim termina a animação.
<hr>
<br>

<h3>&#128214<strong> Conteúdos utilizados vistos no curso <em>COD3R - Fundamentos de JavaScript Funcional</em></h3></strong>
<ul>
<br>
<li><strong>Callbacks</strong></li>
<ul>
<li>Se trata de chamar uma função dentro de outra função;</li>
<li>De extrema valia, pois agiliza muitas situações e facilita para alterações futuras já que torna o código mais fácil de compreender, além de proporcionar novas possibilidades.
</li>
</ul>
<br>
<li><strong>forEach</strong></li>
<ul>
<li>Tem o intuito de percorrer cada item do array aplicando uma função;</li>
<li>Se torna muito prático em situações de grande escala.</li>
</ul>
</ul>
