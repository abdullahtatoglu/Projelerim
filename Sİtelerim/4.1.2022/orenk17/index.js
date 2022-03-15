var btn=document.getElementById("btnHesap");
btn.onclick=function(){
    var s1=Number(document.getElementById("sayi1").value);
    var s2=Number(document.getElementById("sayi2").value);
    var sonuc;
    if(document.getElementById("topla").checked)
        {
            sonuc=s1+s2;
        }
    else if(document.getElementById("cikar").checked)
        {
            sonuc=s1-s2;
        }
    else if(document.getElementById("carp").checked)
        {
            sonuc=s1*s2;
        }
    else if(document.getElementById("bol").checked)
        {
            sonuc=s1/s2;
        }
    else
        {
            sonuc="Seçim Yapın..."
        }
    document.getElementById("kutuToplam").innerHTML="Sonuç : "+sonuc;
}

for(var i=0;i<10;i++){
    if(i==5)
    {
        continue;
    }
    console.log(i);
}
var deneme = ["musa",20,true,"selam"];
document.write("dizinin ilk hali;"+deneme+"<br>");
var silinen_deger = deneme.pop();
document.write("dizideki silinen son değer;"+silinen_deger+"<br>");ı
document.write("dizinin son hali:"+deneme);
