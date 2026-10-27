type Giudizio = "Da evitare" | "Discreto" | "Bello" | "Imperdibile";
let sommaStelle = 0;
let numeroLibri = 0;
let maxStelle = 0;
let titoloPreferito = "";

function registra() {
    let titolo = (document.getElementById("titolo") as HTMLInputElement).value;
    let autore = (document.getElementById("autore") as HTMLInputElement).value;
    let genere = (document.getElementById("genere") as HTMLSelectElement).value;
    let stelle = Number((document.getElementById("stelle") as HTMLInputElement).value);
    let consigliato = (document.getElementById("consigliato") as HTMLInputElement).checked;
    let checkCartaceo = document.getElementById("Cartaceo") as HTMLInputElement;
    let checkEbook = document.getElementById("Ebook") as HTMLInputElement;
    let messaggio = document.getElementById("messaggio") as HTMLParagraphElement;
    let immagine = document.getElementById("immagine") as HTMLImageElement;
    let elenco = document.getElementById("elenco") as HTMLUListElement;

    messaggio.textContent = "";

    if (titolo === "" || autore === "") {
        messaggio.textContent = "Inserisci titolo e autore";
        return;
    }
    if (genere === "") {
        messaggio.textContent = "Scegli il genere";
        return;
    }
    let formato = "";
    if (checkCartaceo.checked === true) {
        formato = "Cartaceo";
    } else if (checkEbook.checked === true) {
        formato = "Ebook";
    }

    if (formato === "") {
        messaggio.textContent = "Scegli il formato";
        return;
    }

    if (!Number.isInteger(stelle) || stelle < 1 || stelle > 5) {
        messaggio.textContent = "Il voto deve essere un numero intero da 1 a 5";
        return;
    }
    let giudizio: Giudizio;
    if (stelle <= 2) {
        giudizio = "Da evitare";
    } else if (stelle === 3) {
        giudizio = "Discreto";
    } else if (stelle === 4) {
        giudizio = "Bello";
    } else {
        giudizio = "Imperdibile";
    }
    let cella = document.getElementById("conta-avventura") as HTMLElement;

switch (genere) {
        case "Avventura":
            immagine.src = "img/avventura.jpg";
            immagine.alt = "Avventura";
            cella = document.getElementById("conta-avventura") as HTMLElement;
            break;
        case "Giallo":
            immagine.src = "img/giallo.jpg";
            immagine.alt = "Lente d’ingrandimento";
            cella = document.getElementById("conta-giallo") as HTMLElement;
            break;
        case "Fantasy":
            immagine.src = "img/fantasy.jpg";
            immagine.alt = "Fantasy";
            cella = document.getElementById("conta-fantasy") as HTMLElement;
            break;
        case "Storico":
            immagine.src = "img/storico.jpg";
            immagine.alt = "Storico";
            cella = document.getElementById("conta-storico") as HTMLElement;
            break;
    }
    let simbolo = "";
    switch (formato) {
        case "Cartaceo":
            simbolo = "[C]";
            break;
        case "Ebook":
            simbolo = "[E]";
            break;
    }
    let testo = simbolo + " " + titolo + " - " + autore + " (" + formato + ") - " + "*".repeat(stelle) + " " + giudizio;

    if (consigliato === true) {
        testo = testo + " - Consigliato";
    }

    let li = document.createElement("li");
    li.textContent = testo;
    elenco.appendChild(li);
    let conteggio = Number(cella.textContent);
    cella.textContent = String(conteggio + 1);
    sommaStelle = sommaStelle + stelle;
    numeroLibri = numeroLibri + 1;
    let media = sommaStelle / numeroLibri;
    let pMedia = document.getElementById("testo-media") as HTMLParagraphElement;
    pMedia.textContent = "Media delle stelle: " + media;
    let pGiudizioMedia = document.getElementById("giudizio-media") as HTMLParagraphElement;
    if (media >= 4) {
        pGiudizioMedia.textContent = "Classe di lettori appassionati";
    } else {
        pGiudizioMedia.textContent = "Si può leggere di più";
    }

    if (stelle > maxStelle) {
        maxStelle = stelle;
        titoloPreferito = titolo;
    }
    let pPreferito = document.getElementById("libro-preferito") as HTMLParagraphElement;
    pPreferito.textContent = "Libro preferito della classe: " + titoloPreferito + " (" + maxStelle + " stelle)";
    (document.getElementById("titolo") as HTMLInputElement).value = "";
    (document.getElementById("autore") as HTMLInputElement).value = "";
}