const PrixPP = 200;
const PrixPetitDej = 12;

function CalculPrixSejour()
{
    var NbAdulte = document.getElementById("NbAdulte").value;
    var NbEnfant = document.getElementById("NbEnfant").value;
    var PetitDej = document.getElementById('PetitDej').checked;
    var PrixTotal = PrixPP*NbAdulte + PrixPP*0.4*NbEnfant + (NbAdulte + NbEnfant)*PetitDej*PrixPetitDej;
    var Affprix = document.getElementById("Prix").innerHTML = "Prix du Sejour : "+ PrixTotal;
}

function duree() 
{

var date1 = Date(document.getElementById("DateDebut")).getTime;
var date2 = new Date(document.getElementById("DateFin")).getTime;
//var nb = (fin - debut) / (1000 * 60 * 60 * 24); // + " jours";
console.log("tests" + date1);
} 