var atp=[];
atp[0]=["ali","veli",23,65]
atp[1]=["duru","kan",12,90]
atp[2]=["hasan","can",455,90]
var atp_basarili=0;

var amp=[];
amp[0]=["kırk","şırnak",33,76]
amp[1]=["ayşe","durmaz",22,45]
amp[2]=["feyza","kara",456,31]
amp[3]=["ahmet","emin",457,75]

for(var i=0;i<atp.length;i++){
    document.getElementById("panel").innerHTML+=atp[i][0]+" "+atp[i][1]+"<br>";
    if(atp[i][3]>=50){
        atp_basarili++;
    }
}
document.getElementById("panel").innerHTML="<br>";
document.getElementById("panel").innerHTML="başarılı öğrenci sayısı:"+atp_basarili+"<br>";
for(var i=0;i<amp.length;i++){
    document.getElementById("panel").innerHTML+=amp[i][0]+" "+amp[i][1]+"<br>";
}

