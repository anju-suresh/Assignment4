var val="";
var value="";
for(var i=0;i<10;i++){
    for(var j=i;j<i+1;j++){
        val += "*" ;
        value +=val+"<br>";
        document.getElementById("demo").innerHTML = value;
        document.getElementById("demo1").innerHTML = value;
        document.getElementById("demo2").innerHTML = value;
    }
}