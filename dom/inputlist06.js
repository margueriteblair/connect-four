document.getElementById("title").innerText = "CareerDevs Cohort 11 Roster"
arrayOfNames = [];

function addNewName() {
    let newName = document.getElementById("names").value;
    if (newName.length !== 0) {
        arrayOfNames.push(newName);
        localStorage.setItem("lsStudentNames", JSON.stringify(arrayOfNames))
        displayListOfNames();
    } else {
        alert (`Incorrect input`)
    }
}
function displayListOfNames() {
    parsedArrayNames = JSON.parse(localStorage.getItem("lsStudentNames"))

    let listTag = `<ul style='list-style-type:none'>`
    for (let i = 0; i < parsedArrayNames.length; i++) {
        listTag = listTag + `<li>${parsedArrayNames[i]}</li>`
    }
        listTag = listTag + `</ul>`
        document.getElementById("printedNames").innerHTML = listTag;
}
displayListOfNames();


localStorage.getItem("lsStudentNames")
document.getElementById("printedNames").innerText = localStorage.getItem("lsStudentNames")

