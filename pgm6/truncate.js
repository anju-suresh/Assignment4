function truncate(){
    var text=document.getElementById("in").value;
    var strlength = document.getElementById("num").value;
    document.getElementById("p1").display="block";
    if((text==0)||isNaN(strlength)){
        document.getElementById("p").innerHTML="Feilds cannot be Empty";
        document.getElementById("p1").innerHTML="insert a Number";
    }else if(text.length<=strlength){
        document.getElementById("result").innerHTML="Correct Size:" + text;
    }else{
        document.getElementById("result").innerHTML= "<span style='color:blue;font-weight:bolder'>"+ text.slice(0,strlength)+'...</span>';
    }

}