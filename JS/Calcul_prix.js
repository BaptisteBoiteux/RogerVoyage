function CalculPrixSejour()
{
    var PrixPP = 200;
    var NbAdulte = parseInt(document.getElementById("NbAdulte").value,10);
    var NbEnfant = parseInt(document.getElementById("NbEnfant").value,10);
    /*var PetitDej = parseInt(document.getElementById("Petitdej").value,10);*/
    var PrixTotal = PrixPP*NbAdulte + PrixPP*0.4*NbEnfant;
    var Affprix = document.getElementById("Prix").innerHTML = "le Prix calculé est : "+PrixTotal;
    console.log(NbAdulte);
    console.log(PrixTotal);
}