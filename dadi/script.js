let nGiocatore, rGiocatore, btnLanciaDadi, vGiocatore, vBanco,risultato;

LanciaDadi = document.getElementById("lanciadadi");


LanciaDadi.addEventListener("click", function () {

  nGiocatore = Math.round(Math.random() * (6 - 1) + 1);
  console.log(nGiocatore);
  
  nBanco = Math.round(Math.random() * (6 - 1) + 1);
  console.log(nBanco);
  
  if (nGiocatore > nBanco) {
  
    rGiocatore = "Complimenti hai Vinto!"
    console.log(rGiocatore);
  
  
  } else if (nGiocatore == nBanco) {
  
    rGiocatore = "Bella giocata, hai pareggiato ";
    console.log(rGiocatore);
  
    
  } else {
    rGiocatore = "Mi dispiace hai perso!!";
    console.log(rGiocatore);

  }

  vGiocatore = document.getElementById("Gvalore");
  vGiocatore.innerHTML = nGiocatore;
  
  Vbanco = document.getElementById("Vvalore");
  Vbanco.innerHTML = nBanco;
 
 risultato = document.getElementById("risultato");
 risultato.innerHTML = rGiocatore;
  

 

});
