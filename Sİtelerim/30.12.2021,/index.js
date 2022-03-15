var i=2;
do{
    console.log("abdullah");
    i++
    
}while(i<=2);

var temp=prompt("sıckalık giriniz");
if(temp<10){
    alert("klima açıldı..");
}
else{
    alert("klimaya gerek yok");
}

var not=prompt("notuuzu giriniz");
if(not>=0 && not<=25){
    alert("0 aldınız")
}
else if(not>=25 && not<=50){
    alert("2 aldınız")
}
else if(not>=50 && not<=70){
    alert("3 aldınız")
}
else if(not>=70 && not<=85){
    alert("4 aldınız")
}
else if(not>=85 && not<=100){
    alert("5 aldınız")
}
else{
    alert("hatalı giriş")
}
/*
switch(şart)
{
    case:durumlar;
    break;
    case:durumlar;
    break;
    case:durumlar;
    break;
    case:durumlar;
    break;
    default:hiçbiri olmazsa
}
*/