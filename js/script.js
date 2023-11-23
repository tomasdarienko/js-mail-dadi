let email = prompt('inserisci la tua email')
let risultato = console.log("")

let database = ["ba@gmail", "ma@gmail", "ta@gmail", "fa@gmail"];

for (let i = 0; i < database.length; i++) {
     
          if (database[i] == email) {
               risultato = console.log("ti sei loggato")
          }
          else if (database[i] !== email) {
               risultato = console.log("non ti sei loggato")
          }
      
     }




