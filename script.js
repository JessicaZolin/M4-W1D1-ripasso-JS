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
    consegna.style.height = "120px"
    //contenitore input
    let contenitoreInput = document.createElement("div")
    contenitoreInput.id = `contenitore-input-${i + 1}`
    contenitoreInput.classList = "container d-flex flex-column gap-2 justify-content-between"
    contenitoreInput.style.height = "120px"
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
document.getElementById("button-1").textContent = "Controlla numeri"

// funzione generale

const uguale50 = (a, b) => {
    // controlla che i due valori siano numeri
    if (isNaN(a) || isNaN(b)) {
        return `<span class = "text-danger fw-bold">Error</span>: inserisci due numeri validi.`;
    } else {
        if (a === 50) {
            return `<span class = "text-success fw-bold">True</span>: uno dei due numeri inseriti è uguale a 50`;
        } else if (a + b === 50) {
            return `<span class = "text-success fw-bold">True</span>: la somma dei due numeri è uguale a 50.`;
        } else {
            return `<span class = "text-danger fw-bold">False</span>: nessuno dei due numeri e nemmeno la loro somma è uguale a 50.`;
        }
    }
}



// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-1").addEventListener("click", () => {
    // prende valori da input e converte in numeri
    inputA1 = parseInt(document.getElementById("input-A1").value);
    inputB1 = parseInt(document.getElementById("input-B1").value);
    // richiama funzione con valori e salva in variabile 
    let risultato = uguale50(inputA1, inputB1);
    // svuota valori input
    document.getElementById("input-A1").value = "";
    document.getElementById("input-B1").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-1").innerHTML = risultato;
})







/* ESERCIZIO 2:
Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata*/

document.getElementById("consegna-2").innerHTML = "Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. <br>Passa la stringa e la posizione come parametri e ritorna la stringa modificata"
document.getElementById("input-A2").placeholder = "Inserisci una parola o una frase"
document.getElementById("input-B2").placeholder = "Inserisci un numero"
document.getElementById("button-2").textContent = "Togli carattere"

// funzione generale

const eliminaCarattere = (a, b) => {
    // controlla che il secondo valore sia un numero, diverso maggiore di 0 e minore della lunghezza della parola
    if (isNaN(b) || b < 0 || b >= a.length+1) {
        return `<span class = "text-danger fw-bold">Error</span>: inserisci un numero valido, diverso da 0 e inferiore al numero di valori contenuto nella parola/frase`
    } else {
        return `La parola/frase senza carattere è: <span class = "fw-bold">${a.slice(0, b-1) + a.slice(b)}</span>`;
    }
}


// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-2").addEventListener("click", () => {
    // prende valori da input e converte in numeri
    inputA2 = document.getElementById("input-A2").value;
    inputB2 = parseInt(document.getElementById("input-B2").value);
    // richiama funzione con valori e salva in variabile 
    let risultato = eliminaCarattere(inputA2, inputB2);
    // svuota valori input
    document.getElementById("input-A2").value = "";
    document.getElementById("input-B2").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-2").innerHTML = risultato;
})







/* ESERCIZIO 3:
Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.*/

document.getElementById("consegna-3").innerHTML = "Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. <br>Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`."
document.getElementById("input-A3").placeholder = "Inserisci un numero"
document.getElementById("input-B3").placeholder = "Inserisci un numero"
document.getElementById("button-3").textContent = "Controlla numeri"

// funzione generale

const controllaNumeri = (a, b) => {
    // controlla che i valori siano numeri
    if (isNaN(a) || isNaN(b)) {
        return `<span class = "text-danger fw-bold">Error</span>: inserisci due numeri validi.`
    }

    if (a >= 40 && a <= 60 || b >= 40 && b <= 60) {
        return `<span class = "text-success fw-bold">True</span>: uno dei due numeri è compreso tra 40 e 60.`;
    } else if (a >= 70 && a <= 100 || b >= 70 && b <= 100) {
        return `<span class = "text-success fw-bold">True</span>: uno dei due numeri è compreso tra 70 e 100.`;
    } else {
        return `<span class = "text-danger fw-bold">False</span>: nessuno dei due numeri è compreso tra 40 e 60 o tra 70 e 100`;
    }
}


// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-3").addEventListener("click", () => {
    // prende valori da input e converte in numeri
    inputA3 = parseInt(document.getElementById("input-A3").value);
    inputB3 = parseInt(document.getElementById("input-B3").value);
    // richiama funzione con valori e salva in variabile 
    let risultato = controllaNumeri(inputA3, inputB3);
    // svuota valori input
    document.getElementById("input-A3").value = "";
    document.getElementById("input-B3").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-3").innerHTML = risultato;
})







/* ESERCIZIO 4:
Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con `Los` o `New`, altrimenti ritorna `false`.*/

document.getElementById("consegna-4").innerText = "Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con `Los` o `New`, altrimenti ritorna `false`."
document.getElementById("input-A4").placeholder = "Inserisci il nome di una città"
document.getElementById("input-B4").remove()
document.getElementById("button-4").textContent = "Controlla nome"

// funzione generale

const controllaCittà = (a) => {
    if (a.startsWith("los") || a.startsWith("new")) {
        return `<span class = "fw-bold">${a}</span>.`;
    } else {
        return `<span class = "text-danger fw-bold">False</span>: la città non inizia ne con "Los" ne con "New".`;
    }
}


// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-4").addEventListener("click", () => {
    // prende valori da input e converte tutto in minuscolo
    inputA4 = document.getElementById("input-A4").value.toLowerCase();
    // richiama funzione con valori e salva in variabile 
    let risultato = controllaCittà(inputA4);
    // svuota valori input
    document.getElementById("input-A4").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-4").innerHTML = risultato;
})







/* ESERCIZIO 5:
Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.*/

document.getElementById("consegna-5").innerHTML = "Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. <br>L'array deve essere passato come parametro."
document.getElementById("input-A5").placeholder = "Inserisci un numero"
document.getElementById("input-B5").type = "button"
document.getElementById("input-B5").value = "Aggiungi numero"
document.getElementById("button-5").textContent = "Somma numeri"

// funzione generale

let numeri = []

document.getElementById("input-B5").addEventListener("click", () => {
    // svuota il div contenente l'errore dal DOM
    document.getElementById("risposta-5").innerHTML = ""
    // prende valore da input
    const inputA5 = parseInt(document.getElementById("input-A5").value);
    // controlla se è un numero
    if (isNaN(inputA5)) {
        document.getElementById("input-A5").value = "";
        document.getElementById("risposta-5").innerHTML = `<span class = "text-danger fw-bold">Error</span>: inserisci un numero valido.`
    } else {
        // aggiunge numero ad array
        numeri.push(inputA5);
        document.getElementById("input-A5").value = "";
        console.log(numeri);
        return numeri
    }
})


const sommaNumeri = (a) => {
    let somma = 0
    for (i = 0; i < a.length; i++) {
        // controlla se array contiene solo numeri
        if (isNaN(a[i])) {
            return `<span class = "text-danger fw-bold">Error</span>: l'array non contiene solo numeri`
        }
        somma += a[i]
    }
    return `La loro <span class = "fw-bold">somma</span> è pari a ${somma}`
}



// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-5").addEventListener("click", () => {
    // richiama funzione con valori e salva in variabile 
    let risultato = sommaNumeri(numeri);
    // stampa risposta in HTML
    document.getElementById("risposta-5").innerHTML = `I numeri inseriti sono: ${numeri}<br>${risultato}.`;
})







/* ESERCIZIO 6:
Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.*/

document.getElementById("consegna-6").innerHTML = "Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. <br>Se NON li contiene, ritorna `true`, altrimenti ritorna `false`."
document.getElementById("input-A6").placeholder = "Inserisci un numero"
document.getElementById("input-B6").type = "button"
document.getElementById("input-B6").value = "Aggiungi numero"
document.getElementById("button-6").textContent = "Check numeri"

// funzione generale

let numbers = []

document.getElementById("input-B6").addEventListener("click", () => {
    // svuota il div contenente l'errore dal DOM
    document.getElementById("risposta-6").innerHTML = ""
    // prende valore da input
    const inputA6 = parseInt(document.getElementById("input-A6").value);
    // controlla se è un numero
    if (isNaN(inputA6)) {
        document.getElementById("input-A6").value = "";
        document.getElementById("risposta-6").innerHTML = `<span class = "text-danger fw-bold">Error</span>: inserisci un numero valido.`
    } else {
        // aggiunge numero ad array
        numbers.push(inputA6);
        document.getElementById("input-A6").value = "";
        console.log(numbers);
        return numbers
    }
})


const checkArray = (a) => {
    for (i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            return `<span class = "text-success fw-bold">True</span>: l'array contiene il numero 1.`;
        } else if (a[i] === 3) {
            return `<span class = "text-success fw-bold">True</span>: l'array contiene il numero 3.`;
        }
    }
    return `<span class = "text-danger fw-bold">False</span>: l'array non contiene ne il numero 1 ne il numero 3.`
}


// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-6").addEventListener("click", () => {
    // richiama funzione con valori e salva in variabile 
    let risultato = checkArray(numbers);
    // stampa risposta in HTML
    document.getElementById("risposta-6").innerHTML = `I numeri inseriti sono: ${numbers}<br>${risultato}`;
})






/* ESERCIZIO 7:
Crea una funzione per trovare il tipo di una ngolo i cui gradi sono passati come parametri. Angolo acuto: meno di 90° => ritorna `acuto`. Angolo ottuso: tra i 90° e i 180° gradi => ritorna `ottuso`. Angolo retto: 90° => ritorna `retto`. Angolo piatto: 180° => ritorna `piatto`.*/

document.getElementById("consegna-7").innerHTML = "Crea una funzione per trovare il tipo di una ngolo i cui gradi sono passati come parametri. <br>Angolo acuto: meno di 90° => ritorna `acuto`. <br>Angolo ottuso: tra i 90° e i 180° gradi => ritorna `ottuso`. <br>Angolo retto: 90° => ritorna `retto`. <br>Angolo piatto: 180° => ritorna `piatto`."
document.getElementById("input-A7").placeholder = "Inserisci un numero"
document.getElementById("input-B7").remove()
document.getElementById("button-7").textContent = "Controlla angolo"

// funzione generale

const controllaAngolo = (a) => {
    if (a < 90) {
        return `Angolo <span class="fw-bold">acuto</span>`
    } else if (a === 90) {
        return `Angolo <span class="fw-bold">retto</span>`
    } else if (a > 90 && a < 180) {
        return `Angolo <span class="fw-bold">ottuso</span>`
    } else if (a === 180) {
        return `Angolo <span class="fw-bold">piatto</span>`
    } else {
        return `Nessun angolo`
    }
}


// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-7").addEventListener("click", () => {
    // prende valori da input e converte in numeri
    inputA7 = parseInt(document.getElementById("input-A7").value);
    // richiama funzione con valori e salva in variabile 
    let risultato = controllaAngolo(inputA7);
    // svuota valori input
    document.getElementById("input-A7").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-7").innerHTML = risultato;
})







/* ESERCIZIO 8:
Crea una funzione che crei un acronimo a partire da una frase. `Fabbrica Italiana Automobili Torino` deve ritornare `FIAT`.*/

document.getElementById("consegna-8").innerHTML = "Crea una funzione che crei un acronimo a partire da una frase. <br>`Fabbrica Italiana Automobili Torino` deve ritornare `FIAT`."
document.getElementById("input-A8").placeholder = "Inserisci una frase"
document.getElementById("input-B8").remove()
document.getElementById("button-8").textContent = "Crea Acronimo"

// funzione generale

const creaAcronimo = (a) => {
    // splitta la frase in singole parole e le inserisce in un array
    let aSplit = a.split(" ")
    let char1 = "";
    // cicla l'array e prende solo la prima lettera di ciascun elemento
    for (i = 0; i < aSplit.length; i++) {
        char1 += aSplit[i].charAt(0)
    } 
    return `L'acronimo della frase è: <span class = "fw-bold">${char1}</span>`
}



console.log(creaAcronimo("Fabbrica Italiana Automobili Torino"));


// richiama funzione al click del button utilizzando dati input 

document.getElementById("button-8").addEventListener("click", () => {
    // prende valori da input e rende tutto maiuscolo
    inputA8 = document.getElementById("input-A8").value.toUpperCase();
    // richiama funzione con valori e salva in variabile 
    let risultato = creaAcronimo(inputA8);
    // svuota valori input
    document.getElementById("input-A8").value = "";
    // stampa risposta in HTML
    document.getElementById("risposta-8").innerHTML = risultato;
})
