
const iterable = 'Javascript';
var values="";
var res="";
for (let value of iterable) {
    values +=value; 
    res += values +"<br>";
    document.getElementById("demo").innerHTML = res;
  
}
