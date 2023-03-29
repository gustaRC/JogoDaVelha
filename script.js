//Placar player1
let pontos1 = document.getElementById("pontos1")
//Placar player2
let pontos2 = document.getElementById("pontos2")

// primeira fileira
let ci_esq = document.getElementById("n1");
let Nci_esq = 0
let ci_ce = document.getElementById("n2")
let Nci_ce = 0
let ci_dir = document.getElementById("n3");
let Nci_dir = 0

// segunda fileira
let ce_esq = document.getElementById("n4");
let Nce_esq = 0
let ce_ce = document.getElementById("n5");
let Nce_ce = 0
let ce_dir = document.getElementById("n6");
let Nce_dir = 0

// terceira fileira
let ba_esq = document.getElementById("n7");
let Nba_esq = 0
let ba_ce = document.getElementById("n8");
let Nba_ce = 0
let ba_dir = document.getElementById("n9");
let Nba_dir = 0

//player 1
function player1() {
    // primeira linha
    function Fci_esq() {
        if (Nci_esq == 0) {
            ci_esq.textContent = "X"
            Nci_esq++
        } else {
            alert("Botão já precionado")
        }
    }
    ci_esq.addEventListener("click", Fci_esq)
    
    function Fci_ce() {
        if (Nci_ce == 0) {
            ci_ce.textContent = "X"
            Nci_ce++
        } else {
            alert("Botão já precionado")
        }
    }
    ci_ce.addEventListener("click", Fci_ce)
    
    function Fci_dir() {
        if (Nci_dir == 0) {
            ci_dir.textContent = "X"
            Nci_dir++
        } else {
            alert("Botão já precionado")
        }
    }
    ci_dir.addEventListener("click", Fci_dir)
    
    //segunda linha
    function Fce_esq() {
        if (Nce_esq == 0) {
            ce_esq.textContent = "X"
            Nce_esq++
        } else {
            alert("Botão já precionado")
        }
    }
    ce_esq.addEventListener("click", Fce_esq)
    
    function Fce_ce() {
        if (Nce_ce == 0) {
            ce_ce.textContent = "X"
            Nce_ce++
        } else {
            alert("Botão já precionado")
        }
    }
    ce_ce.addEventListener("click", Fce_ce)
    
    function Fce_dir() {
        if (Nce_dir == 0) {
            ce_dir.textContent = "X"
            Nce_dir++
        } else {
            alert("Botão já precionado")
        }
    }
    ce_dir.addEventListener("click", Fce_dir)
    
    //terceira linha
    function Fba_esq() {
        if (Nba_esq == 0) {
            ba_esq.textContent = "X"
            Nba_esq++
        } else {
            alert("Botão já precionado")
        }
    }
    ba_esq.addEventListener("click", Fba_esq)
    
    function Fba_ce() {
        if (Nba_ce == 0) {
            ba_ce.textContent = "X"
            Nba_ce++
        } else {
            alert("Botão já precionado")
        }
    }
    ba_ce.addEventListener("click", Fba_ce)
    
    function Fba_dir() {
        if (Nba_dir == 0) {
            ba_dir.textContent = "X"
            Nba_dir++
        } else {
            alert("Botão já precionado")
        }
    }
    ba_dir.addEventListener("click", Fba_dir)
}

//player 2
function player2() {
    // primeira linha
    function Fci_esq() {
        if (Nci_esq == 0) {
            ci_esq.textContent = "O"
            Nci_esq++
        } else {
            alert("Botão já precionado")
        }
    }
    ci_esq.addEventListener("click", Fci_esq)
    
    function Fci_ce() {
        if (Nci_ce == 0) {
            ci_ce.textContent = "O"
            Nci_ce++
        } else {
            alert("Botão já precionado")
        }
    }
    ci_ce.addEventListener("click", Fci_ce)
    
    function Fci_dir() {
        if (Nci_dir == 0) {
            ci_dir.textContent = "O"
            Nci_dir++
        } else {
            alert("Botão já precionado")
        }
    }
    ci_dir.addEventListener("click", Fci_dir)
    
    //segunda linha
    function Fce_esq() {
        if (Nce_esq == 0) {
            ce_esq.textContent = "O"
            Nce_esq++
        } else {
            alert("Botão já precionado")
        }
    }
    ce_esq.addEventListener("click", Fce_esq)
    
    function Fce_ce() {
        if (Nce_ce == 0) {
            ce_ce.textContent = "O"
            Nce_ce++
        } else {
            alert("Botão já precionado")
        }
    }
    ce_ce.addEventListener("click", Fce_ce)
    
    function Fce_dir() {
        if (Nce_dir == 0) {
            ce_dir.textContent = "O"
            Nce_dir++
        } else {
            alert("Botão já precionado")
        }
    }
    ce_dir.addEventListener("click", Fce_dir)
    
    //terceira linha
    function Fba_esq() {
        if (Nba_esq == 0) {
            ba_esq.textContent = "O"
            Nba_esq++
        } else {
            alert("Botão já precionado")
        }
    }
    ba_esq.addEventListener("click", Fba_esq)
    
    function Fba_ce() {
        if (Nba_ce == 0) {
            ba_ce.textContent = "O"
            Nba_ce++
        } else {
            alert("Botão já precionado")
        }
    }
    ba_ce.addEventListener("click", Fba_ce)
    
    function Fba_dir() {
        if (Nba_dir == 0) {
            ba_dir.textContent = "O"
            Nba_dir++
        } else {
            alert("Botão já precionado")
        }
    }
    ba_dir.addEventListener("click", Fba_dir)
    
}
player2()

//tentativas maximas = 4, se não resultado = velha
/* 
vezP1 = 0
vezP2 = 0
*/
/*
function ganhador() {
    // x x x
    if(Nci_esq > 0 && Nci_ce > 0 && Nci_dir > 0) {
        console.log("Jogador Ganhou!")
    } else if (Nce_esq > 0 && Nce_ce > 0 && Nce_dir > 0) {
        console.log("Jogador Ganhou!")
    } else if (Nba_esq > 0 && Nba_ce > 0 && Nba_dir > 0) {
        console.log("Jogador Ganhou!")
    } else {
        // x
        // x
        // x
        if(Nci_esq > 0 && Nce_esq > 0 && Nba_esq > 0) {
            console.log("Jogador Ganhou!")
        } else if (Nci_ce > 0 && Nci_ce > 0 && Nba_ce > 0) {
            console.log("Jogador Ganhou!")
        } else if (Nci_dir > 0 && Nce_dir > 0 && Nba_dir > 0) {
            console.log("Jogador Ganhou!")
        } else {
            // x
            //  x
            //   x
            if (Nci_esq > 0 && Nce_ce > 0 && Nba_dir > 0) {
                console.log("Jogador Ganhou!")
            } else if (Nci_dir > 0 && Nce_ce > 0 && Nba_esq > 0) {
                console.log("Jogador Ganhou!")
            } 
        }
    }
}
 */

