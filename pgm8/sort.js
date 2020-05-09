
var i=0;
var person = [{fruit1:"",fruit2:"",fruit3:"",fruit4:"",fruit5:""}];
function addelement(){
    var x;
    for (x in person) {
        person[x++] = document.getElementById("fruit1").value;
        person[x++] = document.getElementById("fruit2").value;
        person[x++] = document.getElementById("fruit3").value;
        person[x++] = document.getElementById("fruit4").value;
        person[x++] = document.getElementById("fruit5").value;
    }
    
    document.getElementById("result").innerHTML = person;
    
}

function sortElement(){
    person.sort();
    document.getElementById("pn").innerHTML=person;
} 