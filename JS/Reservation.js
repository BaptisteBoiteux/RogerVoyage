
function validateForm()
{
  var prenom = document.getElementById("prenom");
    if (prenom.value == "") 
    {
      alert(DestinationTab[1].prix);return false;
    }
    else{
      console.log("hello");
    }
}

