var DestinationTab = ["Caen","Montfort","Cherbourg","Eu","Mont-Saint-Michel","Conteville","Tokyo","Montréal","Rouen"];

class Destination {
  constructor(prix, titre) {
    this.prix = prix;
    this.titre = titre ;
  }
}

function validateForm()
{
  var prenom = document.getElementById("prenom");
    if (prenom.value == "") 
    {
      alert("le prenom ptn");return false;
    }
    else{
      console.log("hello");
    }
}

