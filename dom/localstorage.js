// saveInformation() {
//     localStorage.setItem("SSN", document.getElementById("ssn").value);
//     document.getElementById("ssn").innerText = localStorage.getItem("SSN");

//     localStorage.setItem("mothersMaidenName", document.getElementById("mothersmaiden").value);
//     document.getElementById("mothersmaiden").innerText = localStorage.getItem("mothersMaidenName")

//     localStorage.setItem("creditCard", document.getElementById("creditcard").value);
//     document.getElementById("creditcard").innerText = localStorage.getItem("creditCard")
// }

function saveInformation() {
    localStorage.setItem('SSN', document.getElementById('ssn').value);
    document.getElementById('display1').innerText = localStorage.getItem('SSN');

    localStorage.setItem('mothersMaidenName', document.getElementById('mothersmaiden').value);
    document.getElementById('display2').innerText = localStorage.getItem('mothersMaidenName');

    localStorage.setItem('creditCard', document.getElementById('creditcard').value);
    document.getElementById('display3').innerText = localStorage.getItem('creditCard');
}


document.getElementById("ssn").innerText = localStorage.getItem("SSN");
document.getElementById("mothersmaiden").innerText = localStorage.getItem("mothersMaidenName");
document.getElementById("creditcard").innerText = localStorage.getItem("creditCard");