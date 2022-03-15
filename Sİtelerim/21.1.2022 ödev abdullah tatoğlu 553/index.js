function soru1hesap(){
    var sayı1=document.getElementById("soru11").value;
    if(sayı1%2==0){
        document.getElementById("soru1cevap").innerHTML="Girdiğiniz sayı çift sayıdır."
        console.log("Soru 1'in cevabı: Girdiğiniz sayı çift sayıdır.")
    }
    else{
        document.getElementById("soru1cevap").innerHTML="Girdiğiniz sayı tek sayıdır."
        console.log("Soru 1'in cevabı: Girdiğiniz sayı tek sayıdır.")
    }
}

var hesapBtn=document.getElementById("hesapla");

function soru2hesap(){

var faktoriyel=1;
var sayi=document.getElementById("soru21").value;
sayi=Number(sayi);
 

if(sayi>=0)
{
 
for(var i=1;i<=sayi;i++)
{
faktoriyel=faktoriyel*i;
}

document.getElementById("soru2cevap").innerHTML=sayi+" sayisinin faktöriyeli "+faktoriyel;
console.log(sayi+" sayısının faktöriyeli "+faktoriyel)
}
 
}