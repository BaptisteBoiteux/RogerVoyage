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
    if (!(PrixTotal > 0)) //Cette consition peremet de ne pas afficher ni un prix négatif ni un NaN
    {
      PrixTotal = "Erreur"
    }
    document.getElementById("Prix").innerHTML = "Prix du Sejour : "+ PrixTotal;
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
  var prenom = document.getElementById("prenom").value;
  var nom = document.getElementById("nom").value;
  var nb_adulte = document.getElementById("NbAdulte").value;
  var nb_enfant = document.getElementById("NbEnfant").value;
  var dateDebut = document.getElementById("DateDebut").value;
  var dateFin = document.getElementById("DateFin").value;
  var mail = document.getElementById("mail").value;
  var alerte = "! ERREUR !\n";

    if (prenom == "") 
    {
      alerte += "Vous devez entrer un prenom\n";
    }
    if (nom == "") 
    {
      alerte += "Vous devez entrer un nom\n";
    }
    if (mail == "") 
    {
      alerte += "Vous devez entrer une adresse mail\n";
    }
    if (nb_adulte <= 0)
    {
      alerte += "Le nombre d'adulte doit être supérieur à 0\n";
      if (nb_enfant > 0)
      {
        alerte += "Un enfant ne peut voyager seul\n";
      }
    }
    if (nb_enfant < 0)
      {
        alerte += "Le nombre d'enfant ne peut être négatif\n";
      }
    if (dateDebut == "") 
    {
      alerte += "Vous devez rentrer une date de départ\n";
    }
    if (dateFin == "") 
    {
      alerte += "Vous devez rentrer une date de retour\n";
    }
    if (dateDebut > dateFin)
    {
      alerte += "La date de départ doit être antérieur à la date de retour\n";
    }
    if (alerte != "! ERREUR !\n")
    {
      alert(alerte);
    }
    else
    {
      document.location.href="Recapitulatif.html"
    }
    
    return false;
}

function reinitialiser_form() {
  document.getElementById("myform").reset();
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    myBtn.style.display = "block";
  } 
  else 
  {
    myBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Recap(){
  var nom = document.getElementById("nom").value;
  document.getElementById("recap").innerHTML = nom
}