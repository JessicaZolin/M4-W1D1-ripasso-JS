let section = document.getElementsByTagName("section")

// cicla tutte le section e crea i vari tag

for (let i = 0; i < section.length; i++) {
    // div contenitore
    let contenitore = document.createElement("div")
    contenitore.id = `contenitore-${i + 1}`
    contenitore.classList = "container d-flex flex-column gap-4"
    // domanda
    let consegna = document.createElement("h6")
    consegna.id = `consegna-${i + 1}`
    //contenitore input
    let contenitoreInput = document.createElement("div")
    contenitoreInput.id = `contenitore-input-${i + 1}`
    contenitoreInput.classList = "container d-flex flex-column gap-2"
    // primo input
    let input = document.createElement("input")
    input.id = `input-A${i + 1}`
    input.type = "text"
    // secondo input
    let input2 = document.createElement("input")
    input2.id = `input-B${i + 1}`
    input2.type = "text"
    // bottone
    let button = document.createElement("button")
    button.id = `button-${i + 1}`
    // risposta
    let risposta = document.createElement("p")
    risposta.id = `risposta-${i + 1}`
    //attacca tutti i tag al DOM
    section[i].appendChild(contenitore)
    contenitore.appendChild(consegna)
    contenitore.appendChild(contenitoreInput)
    contenitoreInput.appendChild(input)
    contenitoreInput.appendChild(input2)
    contenitoreInput.appendChild(button)
    contenitore.appendChild(risposta)
}




/* ESERCIZIO 1:
Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.*/

document.getElementById("consegna-1").innerText = "Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50."
document.getElementById("input-A1").placeholder = "Inserisci un numero"
document.getElementById("input-B1").placeholder = "Inserisci un numero"
document.getElementById("button-1").textContent = "controlla numeri"

// funzione generale

const uguale50 = (a, b) => {
    // controlla che i due valori siano numeri
    if (isNaN(a) || isNaN(b)) {
        return "Error: inserisci due numeri validi.";
    } else {
    if (a === 50) {
        return "True: uno dei due numeri inseriti è uguale a 50";
    } else if (a + b === 50) {
        return "True: la somma dei due numeri è uguale a 50.";
   } else {
        return "False: nessuno dei due numeri e nemmeno la loro somma è uguale a 50.";
    }}
}



// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-1").addEventListener("click", () => {
    // prende valori da input e converte in numeri
    inputA1 = parseInt(document.getElementById("input-A1").value);
    inputB1 = parseInt(document.getElementById("input-B1").value);
    // richiama funzione con valori e salva in variabile 
    let risultato = uguale50 (inputA1, inputB1);
    // svuota valori input
    document.getElementById("input-A1").value = "";
    document.getElementById("input-B1").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-1").innerText = risultato;
    })







/* ESERCIZIO 2:
Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata*/

document.getElementById("consegna-2").innerHTML = "Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. <br>Passa la stringa e la posizione come parametri e ritorna la stringa modificata"
document.getElementById("input-A2").placeholder = "Inserisci una parola o una frase"
document.getElementById("input-B2").placeholder = "Inserisci un numero"
document.getElementById("button-2").textContent = "togli carattere"

// funzione generale

const eliminaCarattere = (a, b) => {
    if (isNaN(b) || b < 0 || b >= a.length) {
        return "Error: inserisci un numero valido, diverso da 0 e inferiore al numero di valori contenuto nella parola/frase"
    } else {
    return `La parola/frase senza carattere è: ${a.slice(0, b) + a.slice(b+1)}`;
}
}


// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-2").addEventListener("click", () => {
    // prende valori da input e converte in numeri
    inputA2 = document.getElementById("input-A2").value;
    inputB2 = parseInt(document.getElementById("input-B2").value);
    // richiama funzione con valori e salva in variabile 
    let risultato = eliminaCarattere (inputA2, inputB2);
    // svuota valori input
    document.getElementById("input-A2").value = "";
    document.getElementById("input-B2").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-2").innerText = risultato;
    })







/* ESERCIZIO 3:
Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.*/

document.getElementById("consegna-3").innerText = "Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`."


/* ESERCIZIO 4:
Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con `Los` o `New`, altrimenti ritorna `false`.*/

document.getElementById("consegna-4").innerText = "Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con `Los` o `New`, altrimenti ritorna `false`."


/* ESERCIZIO 5:
Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.*/

document.getElementById("consegna-5").innerText = "Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro."


/* ESERCIZIO 6:
Crea una funzione che controlli che un array NON contenga i numeri 1 0 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.*/

document.getElementById("consegna-6").innerText = "Crea una funzione che controlli che un array NON contenga i numeri 1 0 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`."

/* ESERCIZIO 7:
Crea una funzione per trovare il tipo di una ngolo i cui gradi sono passati come parametri. Angolo acuto: meno di 90° => ritorna `acuto`. Angolo ottuso: tra i 90° e i 180° gradi => ritorna `ottuso`. Angolo retto: 90° => ritorna `retto`. Angolo piatto: 180° => ritorna `piatto`.*/

document.getElementById("consegna-7").innerText = "Crea una funzione per trovare il tipo di una ngolo i cui gradi sono passati come parametri. Angolo acuto: meno di 90° => ritorna `acuto`. Angolo ottuso: tra i 90° e i 180° gradi => ritorna `ottuso`. Angolo retto: 90° => ritorna `retto`. Angolo piatto: 180° => ritorna `piatto`."

/* ESERCIZIO 8:
Crea una funzione che crei un acronimo a partire da una frase. `Fabbrica Italiana Automobili Torino` deve ritornare `FIAT`.*/

document.getElementById("consegna-8").innerText = "Crea una funzione che crei un acronimo a partire da una frase. `Fabbrica Italiana Automobili Torino` deve ritornare `FIAT`."