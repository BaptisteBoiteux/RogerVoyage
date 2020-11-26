class Destination {
  constructor(prix, titre) {
    this.prix 		 = prix;
    this.titre 		 = titre;
  }
}
const Caen                = new Destination(200,"Caen");
const Montfort            = new Destination(30,"Montfort");
const Cherbourg           = new Destination(50,"Cherbourg");
const Eu                  = new Destination(20,"Eu");
const Mont_Saint_Michel   = new Destination(1000,"Mont-Saint-Michel");
const Conteville          = new Destination(45,"Conteville");
const Tokyo               = new Destination(300,"Tokyo");
const Montréal            = new Destination(200,"Montréal");
const Rouen               = new Destination(35,"Rouen");

var DestinationTab = [Caen,Montfort,Cherbourg,Eu,Mont_Saint_Michel,Conteville,Tokyo,Montréal,Rouen];

const PrixPetitDej = 12;

function CalculPrixSejour()
{
    var NbAdulte = document.getElementById("NbAdulte").value;
    var NbEnfant = document.getElementById("NbEnfant").value;
    var PetitDej = document.getElementById('PetitDej').checked;
    let sejour_id = new URLSearchParams(window.location.search).get("id");
    var PrixTotal = Duree()*(DestinationTab[sejour_id].prix*NbAdulte + DestinationTab[sejour_id].prix*0.4*NbEnfant + (NbAdulte + NbEnfant)*PetitDej*PrixPetitDej);
    var Affprix = document.getElementById("Prix").innerHTML = "Prix du Sejour : "+ PrixTotal;
}

function Duree() 
{
var date1 = new Date(document.getElementById("DateDebut").value).getTime();
var date2 = new Date(document.getElementById("DateFin").value).getTime();
var jour = (date2 - date1) / (1000 * 60 * 60 * 24);
return jour
} 

function validateForm()
{
  var prenom = document.getElementById("prenom");
  var alerte = "! ERREUR !\n";
  var nb_adulte = document.getElementById("NbAdulte");
  var nb_enfant = document.getElementById("NbEnfant")
  var dateDebut = document.getElementById("DateDebut");
  var dateFin = document.getElementById("DateFin");
    if (prenom.value == "") 
    {
      alerte += "Vous devez rentrer un Prenom\n";
    }
    if (nb_adulte.value == 0)
    {
      alerte += "Le nombre d'adulte doit être supérieur à 0\n";
      if (nb_enfant.value > 0)
      {
        alerte += "Un enfant ne peut voyager seul\n";
      }
    }
    if (dateDebut.value > dateFin.value)
    {
      alerte += "La date de départ doit être antérieur à la date de retour\n";
    }


    alert(alerte);
    return false;
}


