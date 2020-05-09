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


function mostFrequent(){

    var numtimes = 0;
    var num = 0 ;
    var element ;
    for(i=0;i<arry.length;i++){
        for(j=i;j<arry.length;j++){
            if(arry[i]==arry[j]){
                num++;
            }
            if(numtimes<num){
                numtimes=num;
                element=arry[i];
            }
        }
        num=0;
    }
    document.getElementById("pn").innerHTML="Most Frequent Element is <span style='color:green;font-weight:bolder'>" + element + " </span> ( <span style='color:green;font-weight:bolder'>" + numtimes + "</span> times)"
}



