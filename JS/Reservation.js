var Destination = ["Caen","Montfort","Cherbourg","Eu","Mont-Saint-Michel","Japon","Australie","Rouen"];
var test = 3;

class Desti {
  constructor(titre,prix){
    this.titre = "???????";
    this.prix  = "2";
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