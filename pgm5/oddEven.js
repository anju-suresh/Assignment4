function oddEven(){
    var even= " ";
    var odd= " ";
    var tab="<table class='w3-table-all w3-hoverable w3-card-4'>"
    tab += "<tr class='w3-green'>"
    tab += "<th class='w3-center'> Even Number </th>" 
    tab += "<th class='w3-center'> Odd Number </th>" 
    tab += "</tr>"
    for(i=0;i<=15;i++){
       
        if(i%2==0){
            tab += "<tr>"+"<td class='w3-center'>" +i+ "</td>";
        }
        else{
            tab += "<td class='w3-center'>" +i+ "</td>"+"</tr>";
        }
        
    }
    tab +="</table>";
    document.getElementById("even").innerHTML= tab;
    // document.getElementById("odd").innerHTML= odd;
}
