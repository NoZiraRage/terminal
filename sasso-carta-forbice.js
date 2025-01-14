let puntiGiocatore = 0;
let puntiComputer = 0;
let mossaGiocatore = "";
let mossaComputer = "";

function sceltaGiocatore() {
    mossaGiocatore = prompt("sasso, carta o forbice?");
    if (mossaGiocatore !== "sasso" && mossaGiocatore !== "carta" && mossaGiocatore !== "forbice") {
        alert("Attenzione! scegliere tra: sasso, carta o forbice");
        sceltaGiocatore();
    }
}

function sceltaComputer() {
    valoreRandom = Math.floor(Math.random() * 3);
    if (valoreRandom == 0) {
        mossaComputer = "sasso";
    }
    else if (valoreRandom == 1) {
        mossaComputer = "carta";
    } 
    else if (valoreRandom == 2) {
        mossaComputer = "forbice";
    }
}

function scontro() {
    if (mossaGiocatore == mossaComputer) {
        alert("Giocatore ha scelto: " + mossaGiocatore + ", Computer ha scelto: " + mossaComputer + ". E' pareggio!");
    }
    else if (mossaGiocatore == "sasso" && mossaComputer == "carta") {
        alert("Giocatore ha scelto: " + mossaGiocatore + ", Computer ha scelto: " + mossaComputer + ". 1 punto per Computer!");
        puntiComputer++;
        return puntiComputer;
    }
    else if (mossaGiocatore == "sasso" && mossaComputer == "forbice") {
        alert("Giocatore ha scelto: " + mossaGiocatore + ", Computer ha scelto: " + mossaComputer + ". 1 punto per Giocatore!");
        puntiGiocatore++;
        return puntiGiocatore;
    }
    else if (mossaGiocatore == "carta" && mossaComputer == "forbice") {
        alert("Giocatore ha scelto: " + mossaGiocatore + ", Computer ha scelto: " + mossaComputer + ". 1 punto per Computer!");
        puntiComputer++;
        return puntiComputer;
    }
    else if (mossaGiocatore == "carta" && mossaComputer == "sasso") {
        alert("Giocatore ha scelto: " + mossaGiocatore + ", Computer ha scelto: " + mossaComputer + ". 1 punto per Giocatore!");
        puntiGiocatore++;
        return puntiGiocatore;
    }
    else if (mossaGiocatore == "forbice" && mossaComputer == "carta") {
        alert("Giocatore ha scelto: " + mossaGiocatore + ", Computer ha scelto: " + mossaComputer + ". 1 punto per Giocatore!");
        puntiGiocatore++;
        return puntiGiocatore;
    }
    else if (mossaGiocatore == "forbice" && mossaComputer == "sasso") {
        alert("Giocatore ha scelto: " + mossaGiocatore + ", Computer ha scelto: " + mossaComputer + ". 1 punto per Computer!");
        puntiComputer++;
        return puntiComputer;
    }
}

function gioco() {
    sceltaGiocatore();
    sceltaComputer();
    scontro();
    let annuncioPunteggio = "Punti Giocatore: " + puntiGiocatore + ", punti Computer: " + puntiComputer;
    alert(annuncioPunteggio);
}

while (puntiGiocatore < 3 && puntiComputer < 3) {
    gioco();
    if (puntiGiocatore == 3) {
        alert("Giocatore vince!");
    }
    else if (puntiComputer == 3) {
        alert("Computer vince!");
    }
}