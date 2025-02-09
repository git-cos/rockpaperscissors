alert ("mandi gioca con me");
var nomeGiocatore = window.prompt("Ciao, inserisci il tuo nome:");
console.log("il valore di titolo è: " + document.getElementById("titolo").innerHTML);
document.getElementById("titolo").innerHTML ="Benvenuto "+nomeGiocatore;
document.getElementById("titolo").style.color = "red";
console.log("il valore di titolo è: " + document.getElementById("titolo").innerHTML);
var sceltautente;

function hocliccarta(){
    sceltautente="carta";
    alert (nomeGiocatore + ", hai scelto " + sceltautente);
}
function hoclicforbici(){
    sceltautente="forbici";
    alert (nomeGiocatore + ", hai scelto " + sceltautente);
}
function hoclicsasso(){
    sceltautente="sasso";
    alert (nomeGiocatore + ", hai scelto " + sceltautente);
}
function verdetto(){
    console.log("il valore di sceltautente: "+sceltautente)
    if (typeof sceltautente=="undefined"){
        alert("NININ prima di schiacciare [conferma] devi fare la tua scelta tra sasso, carta e forbici!!!");
        return;
    }
    document.getElementById("sottotitolo").style.display="none";
    document.getElementById("carta").style.display="none";
    document.getElementById("forbici").style.display="none";
    document.getElementById("sasso").style.display="none";
    document.getElementById("pulsante").style.display="none";
    var sceltacomputer;
    if(sceltautente=="carta"){
        sceltacomputer="forbici";
    }
    if(sceltautente=="sasso"){
        sceltacomputer="carta";
    }
    if(sceltautente=="forbici"){
        sceltacomputer="sasso";
    }
    

    document.getElementById("titolo").innerHTML =nomeGiocatore+" SCARSO HAI PERSO!!!!!";
    document.getElementById("informazioni").innerHTML =nomeGiocatore+" il computer ha scelto "+sceltacomputer+" tu hai scelto "+sceltautente;
}
    
