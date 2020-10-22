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

function temps(date)
{
var d = new Date(date[2], date[1] - 1, date[0]);
return d.getTime();
}
function calculer() 
{ 

var date1=document.getElementById("DDepart").value
var date2=document.forms['form1'].elements['date2'].value

var debut = temps(date1.split("/"));
var fin = temps(date2.split("/"));
var nb = (fin - debut) / (1000 * 60 * 60 * 24); // + " jours";
document.forms['form1'].elements['jour'].value=nb;
} 