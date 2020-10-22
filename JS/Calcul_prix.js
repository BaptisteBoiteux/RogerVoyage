function CalculPrixSejour()
{
    var PrixPP = 200;
    var PrixPetitDej = 12;
    var NbAdulte = document.getElementById("NbAdulte").value;
    var NbEnfant = document.getElementById("NbEnfant").value;
    var PetitDej = document.getElementById('PetitDej').checked;
    var PrixTotal = PrixPP*NbAdulte + PrixPP*0.4*NbEnfant + (NbAdulte + NbEnfant)*PetitDej*PrixPetitDej;
    var Affprix = document.getElementById("Prix").innerHTML = "le Prix calculé est : "+ PrixTotal;
}