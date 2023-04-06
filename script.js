// - SCRIPT JOGO DA VELHA - 

document.addEventListener("click", (el) => {
    jogoVelha(el.target.id); //target = retorna o elemento onde ocorreu o evento(w3schools)
  });
  
  let pontosX = document.querySelector(".pontosX");
  let pX = 1;
  let pontosO = document.querySelector(".pontosO");
  let pO = 1;
  
  let txtJogX = document.querySelector(".jogadorX h3")
  let txtJogO = document.querySelector(".jogadorO h3")
  
  let checaTurno = true;
  
  const jogadorX = "X";
  const jogadorO = "O";
  
  let jogX = [];
  let jogO = [];
  
  let emp = 0;
  
  let infoVencedor = document.getElementById("ganhador")
  
  function jogoVelha(id) {
    const casa = document.getElementById(id);
    turno = checaTurno ? jogadorX : jogadorO; //se checarTurno for true jogadorX se nn jogadorO
    casa.classList.add(turno);
    casa.setAttribute("disabled", true);
    checaTurno = !checaTurno; //alterar o boolean do checaTurno para haver a mudança entre X e O    
      
    //armazenar botões pressionados
    if (document.getElementById(id).className == "X") {
      jogX.push(id);
    } else if (document.getElementById(id).className == "O") {
      jogO.push(id);
    }
  
    //definir vencedor
    const jogadores = [jogO, jogX]
  
    jogadores.forEach(element => {
      if (
          element.includes("n1") && 
          element.includes("n2") &&
          element.includes("n3")
      ) {
          venceu();
      } else if (
          element.includes("n4") &&
          element.includes("n5") &&
          element.includes("n6")
      ) {
          venceu()
      } else if (
          element.includes("n7") &&
          element.includes("n8") &&
          element.includes("n9")
      ) {
          venceu()
      } else if (
          element.includes("n1") &&
          element.includes("n4") &&
          element.includes("n7")
      ) {
          venceu()
      } else if (
          element.includes("n2") &&
          element.includes("n5") &&
          element.includes("n8")
      ) {
          venceu()
      } else if (
          element.includes("n3") &&
          element.includes("n6") &&
          element.includes("n9")
      ) {
          venceu()
      } else if (
          element.includes("n1") &&
          element.includes("n5") &&
          element.includes("n9")
      ) {
          venceu()
      } else if (
          element.includes("n3") &&
          element.includes("n5") &&
          element.includes("n7")
      ) {
          venceu()
      } else {
          //empate
          if(element.length > 2){
              emp++;
          }
          if (emp == 9) {
              infoVencedor.classList.add("velhaSubir")   
              infoVencedor.textContent = `Deu Velha!`
              setTimeout(() => {
                  
                  btn_resetar()
  
                  jogX = [];
                  jogO = [];
                  
                  emp = 0
  
                  infoVencedor.classList.remove("velhaSubir")  
                  infoVencedor.textContent = ``  
                  infoVencedor.classList.add("velhaDescer")
                  setTimeout(() => {
                      infoVencedor.classList.remove("velhaDescer")  
                  }, 300)
              }, 800)
          }
      }
    });
    
  
    //O que acontecerá caso haja vencedor
    function venceu() {
  
      if (turno == jogadorX) {
          txtJogX.classList.add("txtJogX")
          setTimeout(() => {
              txtJogX.removeAttribute("class")
          }, 800)
      } else {
          txtJogO.classList.add("txtJogO")
          setTimeout(() => {
              txtJogO.removeAttribute("class")
          }, 800)
      }
  
      infoVencedor.classList.add("subir")   
      infoVencedor.textContent = `Jogador ${turno} Ganhou!!!`
  
      setTimeout(() => {
          
          
          let alterarPlacar = !checaTurno ? pontosX : pontosO;
          let alterarPontos = !checaTurno ? pX++ : pO++;
  
          alterarPlacar.textContent = `Pontos: ${alterarPontos}`;
          
          emp = 0
  
          btn_resetar()
  
          jogX = [];
          jogO = [];
  
          checaTurno = !checaTurno
  
          infoVencedor.classList.remove("subir")  
          infoVencedor.textContent = ``  
          infoVencedor.classList.add("descer")
          setTimeout(() => {
              infoVencedor.classList.remove("descer")  
          }, 300)
  
      }, 500);
      
    }
  
    //resetar botoes
    function btn_resetar() {
      const childrens = document.getElementsByClassName("jogoVelha")[0].children;
          for (let children of childrens) {
              children.removeAttribute("class")
              children.removeAttribute("disabled")
          }
    }
  }