let arrayNames = [];
let parsedArray = [];
function addNameToArray() {
    let nameToAdd = document.getElementById("inputBox").value

    if (nameToAdd.length !== 0) {
    arrayNames.push(nameToAdd);
    localStorage.setItem("lsArrayNames", JSON.stringify(arrayNames));
    parsedArray = JSON.parse(localStorage.getItem("lsArrayNames"))
    } else { 
        alert(`What on Earth...Don't do that.`)
    }
    let htmlText = "<ul style = 'list-style-type:none'>"
    for (let i = 0; i < parsedArray.length; i++) {
        htmlText = htmlText + `<li>${parsedArray[i]}</li>`
    }
        htmlText = htmlText + "</ul>"
        document.getElementById("theList").innerHTML = htmlText;
    
}
