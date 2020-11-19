const PrixPP = 200;
const PrixPetitDej = 12;

function CalculPrixSejour()
{
    var NbAdulte = document.getElementById("NbAdulte").value;
    var NbEnfant = document.getElementById("NbEnfant").value;
    var PetitDej = document.getElementById('PetitDej').checked;
    var PrixTotal = Duree()*(PrixPP*NbAdulte + PrixPP*0.4*NbEnfant + (NbAdulte + NbEnfant)*PetitDej*PrixPetitDej);
    var Affprix = document.getElementById("Prix").innerHTML = "Prix du Sejour : "+ PrixTotal;
}

function Duree() 
{
var date1 = new Date(document.getElementById("DateDebut").value).getTime();
var date2 = new Date(document.getElementById("DateFin").value).getTime();
var jour = (date2 - date1) / (1000 * 60 * 60 * 24); // + " jours";
return jour
} 


