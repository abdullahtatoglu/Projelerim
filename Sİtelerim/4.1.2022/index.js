
document.getElementById("num-el1").innerHTML="1.sayı= 8";
document.getElementById("num-el2").innerHTML="2.sayı= 2";

function topla(){
     var toplam=8+2;
     document.getElementById("sonuc").innerHTML="sonuc= "+toplam;
}

function cıkar(){
    var toplam=8-2;
    document.getElementById("sonuc").innerHTML="sonuc= "+toplam;
}

function bol(){
    var toplam=8/2;
    document.getElementById("sonuc").innerHTML="sonuc= "+toplam;
}

function carp(){
    var toplam=8*2;
    document.getElementById("sonuc").innerHTML="sonuc= "+toplam;
}
