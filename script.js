//Placar player1
let pontos1 = document.getElementById("pontos1")
//Placar player2
let pontos2 = document.getElementById("pontos2")

// primeira fileira
let ci_esq = document.getElementById("ci_esq");
let ci_ce = document.getElementById("ci_ce");
let ci_dir = document.getElementById("ci_dir");

// segunda fileira
let ce_esq = document.getElementById("ce_esq");
let ce_ce = document.getElementById("ce_ce");
let ce_dir = document.getElementById("ce_dir");

// terceira fileira
let ba_esq = document.getElementById("ba_esq");
let ba_ce = document.getElementById("ba_ce");
let ba_dir = document.getElementById("ba_dir");

//player1
function player1Click() {
    ci_esq.addEventListener("click", () => (ci_esq.textContent = "X"));
    ci_ce.addEventListener("click", () => (ci_ce.textContent = "X"));
    ci_dir.addEventListener("click", () => (ci_dir.textContent = "X"));
    ce_esq.addEventListener("click", () => (ce_esq.textContent = "X"));
    ce_ce.addEventListener("click", () => (ce_ce.textContent = "X"));
    ce_dir.addEventListener("click", () => (ce_dir.textContent = "X"));
    ba_esq.addEventListener("click", () => (ba_esq.textContent = "X"));
    ba_ce.addEventListener("click", () => (ba_ce.textContent = "X"));
    ba_dir.addEventListener("click", () => (ba_dir.textContent = "X"));
}
let a1 = 0
//player2

var a2 = 0
function player2Click() {
        function ci_esqF(x, y) {
            if(y <= 1) {
                x.addEventListener("click", () => {
                    x.textContent = "O"
                    return console.log(y++)
                });
            } else{
                console.log("opa, ja foi")
            }
        }
        ci_esqF(ci_esq, a1)
        console.log(a1)
    
    ci_ce.addEventListener("click", () => (ci_ce.textContent = "O"));
    ci_dir.addEventListener("click", () => (ci_dir.textContent = "O"));
    ce_esq.addEventListener("click", () => (ce_esq.textContent = "O"));
    ce_ce.addEventListener("click", () => (ce_ce.textContent = "O"));
    ce_dir.addEventListener("click", () => (ce_dir.textContent = "O"));
    ba_esq.addEventListener("click", () => (ba_esq.textContent = "O"));
    ba_ce.addEventListener("click", () => (ba_ce.textContent = "O"));
    ba_dir.addEventListener("click", () => (ba_dir.textContent = "O"));
}
player2Click()




//tentativas maximas = 4, se não resultado = velha
/* 
vezP1 = 0
vezP2 = 0
*/
for(tentativas = 0; tentativas <= 4; tentativas++) {
    function P1() {

    }
}
