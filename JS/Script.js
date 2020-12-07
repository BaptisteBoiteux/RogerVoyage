// Général :


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


let identifiant = 
'{ "identifiant" : ["titouan_le_s","normandie_fan","darksasuke"],"mdp" : ["12345","jtm_norm","tropdark"]}';
var DestinationTab = [Caen,Montfort,Cherbourg,Eu,Mont_Saint_Michel,Conteville,Tokyo,Montréal,Rouen];
var DestinationTabStr = ["Caen","Montfort","Cherbourg","Eu","Mont Saint Michel","Conteville","Tokyo","Montréal","Rouen"];

const PrixPetitDej = 12;

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


function topFunction() {
  //Rammène en haut de la page 
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Page Acceuil :


function identification(){ 
  /* cette fonstion permet de rajouter un point d'interogation et un id au lien de reservation */
  document.getElementById ("Caen").href='Reservation.html?id=0';
  document.getElementById ("Cherbourg").href='Reservation.html?id=2';
  document.getElementById ("Montfort").href='Reservation.html?id=1'; 
  document.getElementById ("Eu").href='Reservation.html?id=3';
  document.getElementById ("Mont-Saint-Michel").href='Reservation.html?id=4';
  document.getElementById ("Conteville").href='Reservation.html?id=5';
  document.getElementById ("Tokyo").href='Reservation.html?id=6';
  document.getElementById ("Montréal").href='Reservation.html?id=7';
  document.getElementById ("Rouen").href='Reservation.html?id=8';
}



function ListeFiltre(){
  //Affiche les destination corespondantes au filtres de l'acceuil
  var destFiltre = "";
  for (let i = 0; i < DestinationTab.length ; i++)
  if ((document.getElementById("PrixMin").value <= DestinationTab[i].prix)&&(document.getElementById("PrixMax").value >= DestinationTab[i].prix) )
  {
    destFiltre += DestinationTab[i].titre+", "
  }
  document.getElementById("Destination").innerHTML = destFiltre;
}

function getTemp(){
  var lien = "http://api.openweathermap.org/data/2.5/weather?q=Meyzieu&appid=5429722d0cef46c620c3f7d1c719b8dc&units=metric";
  var json = $.get(lien);
  var java = JSON.parse(json);
  console.log(java);
}

//Page Reservation :

function CalculPrixSejour()
{
  /*Calcule le prix Totale du séjour
  sortie : PrixTotal(number)*/
  var NbAdulte = document.getElementById("NbAdulte").value;
  var NbEnfant = document.getElementById("NbEnfant").value;
  var PetitDej = document.getElementById('PetitDej').checked;
  let sejour_id = new URLSearchParams(window.location.search).get("id");
  var PrixTotal = Duree()*(DestinationTab[sejour_id].prix*NbAdulte + DestinationTab[sejour_id].prix*0.4*NbEnfant + (NbAdulte + NbEnfant)*PetitDej*PrixPetitDej);
  if (!(PrixTotal > 0)) //Cette condition peremet de ne pas afficher ni un prix négatif ni un NaN
  {
    PrixTotal = "Erreur"
  }
  document.getElementById("Prix").innerHTML = "Prix du Sejour : "+ PrixTotal.toString() +" €";
  return PrixTotal
}

function Duree() {
  /*Calcule la différence de temps en jour entre deux dates
  sortie : jour (number)*/
var date1 = new Date(document.getElementById("DateDebut").value).getTime();
var date2 = new Date(document.getElementById("DateFin").value).getTime();
var jour = (date2 - date1) / (1000 * 60 * 60 * 24);
return jour
} 

function validateForm(){
  //Vérification d'erreur pour le formulaire et changement de page vers Recapitulatif.html
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
    if (!(nb_adulte > 0))
    {
      alerte += "Le nombre d'adulte doit être supérieur à 0\n";
      if (nb_enfant > 0)
      {
        alerte += "Un enfant ne peut voyager seul\n";
      }
    }
    if (!(nb_enfant > 0))
    {
      alerte += "Nombre d'enfants invalide\n"
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
  //Réinitialise le formulaire
  document.getElementById("myform").reset();
}


//Page Connexion :




window.onload = function affichage_connecté ()
{
  if( typeof(localStorage.getItem('connecté')) == undefined)
  {
  	co.style.display = "block";
    non_co.style.display = "none";
  }	
  else
  {
	  console.log (localStorage.getItem('connecté'));
	  if (localStorage.getItem('connecté')== true)
	  {
	    co.style.display = "none"
	    non_co.style.display = "block"
	  }
	  else
	  {
	    co.style.display = "block"
	    non_co.style.display = "none"
	  }
  }
}
function test_identité() {
  let connexion = (JSON.parse(identifiant));
  var identi = document.getElementById("identité").value;
  var mot_de_passe = document.getElementById("password").value;
  var vrai_identité = false;
  var i=0;
  while ( i < connexion.identifiant.length && vrai_identité == false)
  {
    if (identi == connexion.identifiant[i])
    {
      var i_identifiant = i;
      vrai_identité = true;
    }
    i++;
  }
  if(vrai_identité)
  {
    if(mot_de_passe != connexion.mdp[i_identifiant])
    {
      vrai_identité = false;
    }
  }
  if (vrai_identité) 
  {
    console.log("bravo titou");
  }
  else
  {
    console.log("ptdr t'est qui");
  }
}

// Page Récapitulatif :

function storage(){
  //Stocke toutes les informations du formulaire
  localStorage.setItem('leprenom', document.getElementById("prenom").value);
  localStorage.setItem('lenom', document.getElementById("nom").value);
  localStorage.setItem('lemail', document.getElementById("mail").value);
  localStorage.setItem('letel', document.getElementById("tel").value);
  localStorage.setItem('leddebut', document.getElementById("DateDebut").value);
  localStorage.setItem('leddfin', document.getElementById("DateFin").value);
  localStorage.setItem('leNbAd', document.getElementById("NbAdulte").value);
  localStorage.setItem('leNbEn', document.getElementById("NbEnfant").value);
  if(document.getElementById("PetitDej").value)
  {
    localStorage.setItem('lePetitD',"Oui")
  }
  else
  {
    localStorage.setItem('lePetitD',"Non")
  }
  localStorage.setItem('lePrix', CalculPrixSejour().toString()+" €");
}

function Recap(){
  //Affiche toutes les informations du formulaire et genere un numéro de réservation
  localStorage.setItem('lenumresa',Math.floor(Math.random()*10**6).toString())
  document.getElementById("NumResa").innerHTML = localStorage.getItem('lenumresa');
  document.getElementById("prenom").innerHTML = localStorage.getItem('leprenom');
  document.getElementById("nom").innerHTML = localStorage.getItem('lenom');
  document.getElementById("mail").innerHTML = localStorage.getItem('lemail');
  document.getElementById("tel").innerHTML = localStorage.getItem('letel');
  document.getElementById("ddebut").innerHTML = localStorage.getItem('leddebut');
  document.getElementById("ddfin").innerHTML = localStorage.getItem('leddfin');
  document.getElementById("NbAdulte").innerHTML = localStorage.getItem('leNbAd');
  document.getElementById("NbEnfant").innerHTML = localStorage.getItem('leNbEn');
  document.getElementById("PetitDej").innerHTML = localStorage.getItem('lePetitD');
  document.getElementById("Prix").innerHTML = localStorage.getItem('lePrix');
}