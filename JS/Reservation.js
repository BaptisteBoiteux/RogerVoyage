var Destination = ["Caen","Montfort","Cherbourg","Eu","Mont-Saint-Michel","Japon","Australie","Rouen"];


function test()
{
var prenom = document.getElementById("prenom").innerHTML='test';

}

function validateForm() 
{
  var prenom = document.forms["Reservationform"]["prénom"].value;
  if (prenom == "") 
  {
    alert("Name must be filled out");return false;
  }
}