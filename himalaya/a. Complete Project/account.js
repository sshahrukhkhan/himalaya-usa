var query = window.location.search;

var url = new URLSearchParams(query);

var fName = url.get("f-name");
var lName = url.get("l-name");
var eMail = url.get("e-mail");

var personName = document.getElementById("personName");
personName.innerHTML = `${fName} ${lName}`;

var personEmail = document.getElementById("personEmail");
personEmail.innerHTML = eMail;