"use strict";
let sommaStelle = 0;
let numeroLibri = 0;
let maxStelle = 0;
let titoloPreferito = "";
function registra() {
    let titolo = document.getElementById("titolo").value;
    let autore = document.getElementById("autore").value;
    let genere = document.getElementById("genere").value;
    let stelle = Number(document.getElementById("stelle").value);
    let consigliato = document.getElementById("consigliato").checked;
    let checkCartaceo = document.getElementById("Cartaceo");
    let checkEbook = document.getElementById("Ebook");
    let messaggio = document.getElementById("messaggio");
    let immagine = document.getElementById("immagine");
    let elenco = document.getElementById("elenco");
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
    }
    else if (checkEbook.checked === true) {
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
    let giudizio;
    if (stelle <= 2) {
        giudizio = "Da evitare";
    }
    else if (stelle === 3) {
        giudizio = "Discreto";
    }
    else if (stelle === 4) {
        giudizio = "Bello";
    }
    else {
        giudizio = "Imperdibile";
    }
    let cella = document.getElementById("conta-avventura");
    switch (genere) {
        case "Avventura":
            immagine.src = "img/avventura.jpg";
            immagine.alt = "Avventura";
            cella = document.getElementById("conta-avventura");
            break;
        case "Giallo":
            immagine.src = "img/giallo.jpg";
            immagine.alt = "Lente d’ingrandimento";
            cella = document.getElementById("conta-giallo");
            break;
        case "Fantasy":
            immagine.src = "img/fantasy.jpg";
            immagine.alt = "Fantasy";
            cella = document.getElementById("conta-fantasy");
            break;
        case "Storico":
            immagine.src = "img/storico.jpg";
            immagine.alt = "Storico";
            cella = document.getElementById("conta-storico");
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
    let pMedia = document.getElementById("testo-media");
    pMedia.textContent = "Media delle stelle: " + media;
    let pGiudizioMedia = document.getElementById("giudizio-media");
    if (media >= 4) {
        pGiudizioMedia.textContent = "Classe di lettori appassionati";
    }
    else {
        pGiudizioMedia.textContent = "Si può leggere di più";
    }
    if (stelle > maxStelle) {
        maxStelle = stelle;
        titoloPreferito = titolo;
    }
    let pPreferito = document.getElementById("libro-preferito");
    pPreferito.textContent = "Libro preferito della classe: " + titoloPreferito + " (" + maxStelle + " stelle)";
    document.getElementById("titolo").value = "";
    document.getElementById("autore").value = "";
}
//# sourceMappingURL=main.js.map