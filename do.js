

function go(){
    let now=new Date();
    let hours=now.getHours();

    let min=now.getMinutes();
    let sec=now.getSeconds();
    

let ho=hours>=12?  "am":"pm"
hours=hours%12;
hours=hours===0? 12:hours;
document.getElementById("hour").value=
String(hours).padStart(2,"0")
document.getElementById("min").value=
String(min).padStart(2,"0")
document.getElementById("sec").value=
String(sec).padStart(2,"0")

document.getElementById("ampm").value=ho
}



go()
setInterval(go,1000)