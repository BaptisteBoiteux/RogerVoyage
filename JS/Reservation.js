var Destination = [Destination1,"Montfort","Cherbourg","Eu","Mont-Saint-Michel","Japon","Australie","Rouen"];
var test = 3;

class Destination {
  constructor(titre,prix){
    this._titre = titre;
    this._prix  = prix;
  }
}
var Destination1 = Destination("Caen","200")
function validateForm()
{
  var prenom = document.getElementById("prenom");
    if (prenom.value == "") 
    {
      alert("le prenom ptn");return false;
    }
    else{
      console.log(prenom.value);
    }
}
function test_destination{
  console.log(test);
}
/*function validateForm() 
{
  var prenom = document.forms["Reservationform"]["prenomrecap"].value;
  if (prenom == "") 
  {
    alert("Name must be filled out");return false;
  }
}*/