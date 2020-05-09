var prime= Array();
var i=0;
function addelement(){
   
    prime[i] =parseInt(document.getElementById("number").value);
    if(isNaN(prime[i])){
        document.getElementById("p").innerHTML = "<span style='color:red'>Input a Number</span>";   
    }else{
        i++;
        document.getElementById("number").value = "";  
        var e = " "; 
        e +="Array Elements Are: "  
        e +="{"; 
        for (var y=0; y<prime.length; y++){
            e +=  prime[y] + " ";
        }
        e += "}";
        document.getElementById("result").innerHTML = e; 
    }
    
}

function primeOrnot(){
    var e = " "; 
    e +="Array Elements Are: "  
    e +="{";
    for (var y=0; y<prime.length; y++){
     e +=  prime[y] + " "  ;
   }
   e += "}";
   document.getElementById("result").innerHTML = e;
   var arry =prime[0];
   console.log(arry);
   if(arry==1){
       flag=true;
   }else if(arry==2){
       flag=true;
   }else{
        for(j = 2; j <= arry - 1; j++){
            if (arry % j == 0) { 
                flag = false;  
            } 
        }
        flag=true;
    }
    if(flag==true){
        document.getElementById("pn").innerHTML = "1st Array Elemnet is "+ arry + " is <span style='color:green;font-weight:bolder'>PRIME</span>"
    }else{
        document.getElementById("pn").innerHTML = "1st Array Elemnet is "+ arry + " is <span style='color:red;font-weight:bolder'>NOT A PRIME</span>" 
    }

}