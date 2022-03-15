/*
let text="hello world";
let char=text.charAt(3);
alert(char)

let str="göztepe mesleki ve teknil anadolu lisesi";
alert(str.lastIndexOf("teknil"))


let text1=prompt("yaz");
let buyuk=text1.toUpperCase();
let kucuk=text1.toLowerCase();

document.writeln(buyuk+"<br>"+kucuk);


let str="elma, muz, kivi"
let part=str.slice(6,13);
alert(part)

let metin="kesinlikle izmir'i ziyaret edin";
let degiscek=prompt("değişicek kelimeyi giriniz");
let degisen=prompt("değiştirmek istediğiniz keliemyi yazın");
let yeni=metin.replace(degiscek,degisen);
alert(yeni)


let text="a,b,c,d,e"
const harfler= text.split(",");
document.writeln(harfler[3])

*/

let haberler=[];
haberler[0]={
    baslık:"haber1",
    içerik:"içerik 2 3 44 5667",
    yayıntarihi:"15.02.2022",
}
haberler[1]={
    baslık:"haber1",
    içerik:"içerik 2 3 44 5667",
    yayıntarihi:"15.02.2022",
}
haberler[2]={
    baslık:"haber1",
    içerik:"içerik 2 9 44 5667",
    yayıntarihi:"15.02.2022",
}
haberler[3]={
    baslık:"haber1",
    içerik:"içerik 2 3 44 5667",
    yayıntarihi:"15.02.2022",
}
haberler[4]={
    baslık:"haber1",
    içerik:"içerik 2 3 44 5667",
    yayıntarihi:"15.02.2022",
}

var html=" ";
for(var x of haberler){
    html+=`
    <div class="stil">
    <h2>${x.baslık}</h2>
    ${x.içerik}<br>
    <p class="hiza">${x.yayıntarihi}</p>
    </div>`
}

function listele(){
    document.getElementById("container").innerHTML=html;
}


function ara(){
    var html="";
    var veri=document.getElementById("anahtarkelime").value.toLowerCase();
    for(var x of haberler){
        var content=x.içerik.toLowerCase();
        if (content.includes(veri)){
            html+=`
    <div class="stil">
    <h2>${x.baslık}</h2>
    ${x.içerik}<br>
    <p class="hiza">${x.yayıntarihi}</p>
    </div>`
        }
    }
    document.getElementById("container").innerHTML=html;
}
