
function yaz(){
    var demo=document.getElementById("demo")
    demo.innerHTML="merhaba dünya";
    demo.style.color="orange";
    demo.style.fontSize="2rem";
}
function iki(){
    document.getElementById("demo").innerHTML="a.";
    document.getElementById("demo").style.color="black";
    document.getElementById("demo").style.fontSize="1rem";
}
function kapat(){
    document.getElementById("demo").style.display="none";
}
function kapat2(){
    document.getElementById("demo").style.display="block";
}
/*
var deger1;
deger1=5;
alert(deger1);
const a=10;
console.log(deger1);
*/
/*
function prg1(){
    var prg=document.getElementById("prg1").innerHTML;
    alert(prg);
}
*/
function prg1(){
    var a=10;
    var b=20;
    document.getElementById("prg1").innerHTML=a+b; 
}
var ad=prompt("adınızı giriniz");
var soyad=prompt("soyadınızı giriniz");
document.getElementById("prg1").innerHTML=ad+" "+soyad;

var renk=prompt("renk gir");
document.body.style.backgroundColor=renk;
var fontsize=prompt("yazı büyüklüğü girin (değer şeklinde)");
document.getElementById("box1").style.fontSize=fontsize;
var fontcolor=prompt("yazı rengi giriniz (ingilizce olarak)")
document.getElementById("box1").style.color=fontcolor;

document.getElementById("prg2").style.display="none";

function prg2(){
    document.getElementById("prg2").style.display="block";
}
