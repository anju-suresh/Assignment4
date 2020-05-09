function toggle() {
    str = document.getElementById("in").value;
    var togstr = str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
    document.getElementById("result").innerHTML="OUTPUT TEXT : <span style='color:red,font-weight:bold'>" + togstr + "</span>";
}