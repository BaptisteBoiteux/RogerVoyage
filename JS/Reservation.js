var Destination = ["Caen","Montfort","Cherbourg","Eu","Mont-Saint-Michel","Japon","Australie","Rouen"];

class Destination {
  constructor(titre,prix,enfant)
}

var prenom = document.getElementById("prenom");
prenom.value = "MonPseudo";

function validateForm() 
{
  var prenom = document.forms["Reservationform"]["prénom"].value;
  if (prenom == "") 
  {
    alert("Name must be filled out");return false;
  }
}