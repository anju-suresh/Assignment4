var arry= Array();
var i=0;
function addelement(){
    arry[i] =parseInt(document.getElementById("number").value);
    if(isNaN(arry[i])){
        document.getElementById("p").innerHTML = "<span style='color:red'>Input a Number</span>";    
    }else{
        i++;
        document.getElementById("number").value = "";  
        var e = " "; 
        e +="Array Elements Are: "  
        e +="{"; 
        for (var y=0; y<arry.length; y++){
            e +=  arry[y] + " ";
        }
        e += "}";
        document.getElementById("result").innerHTML = e;  
    }
}
function squres(){
    var total = 0;
    var e = " "; 
    e +="Array Elements Are: "  
    e +="{"; 
    for (var y=0; y<arry.length; y++){
        e +=  arry[y] + " ";
    }
    e += "}";
    document.getElementById("result").innerHTML = e; 
    for(j=0;j<arry.length;j++){
        total = total+Math.pow(arry[j], 2);
    }
    document.getElementById("result").innerHTML=e;
    document.getElementById("pn").innerHTML="Sum Of Squares of the Elements are: <span style='color:red'>"+total+"</span>";
}