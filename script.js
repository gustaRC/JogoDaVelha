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
ci_esq.addEventListener("click", () => (ci_esq.textContent = "X"));

//player2
ci_esq.addEventListener("click", () => (ci_esq.textContent = "O"));
