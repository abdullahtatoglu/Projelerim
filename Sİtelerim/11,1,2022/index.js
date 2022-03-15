function sayfac(){
    var kad=document.getElementById("ad").value;
    var sifre=document.getElementById("sifre").value;
    if(kad=="a" && sifre=="1"){
        document.getElementById("dıs").style.display="none";
    }
    else{
        alert("hatalı kullanıcı adı şifre girişi")
    }
}

function ucgen_hesapla(){
    var taban=prompt("taban değerini gir la")
    var yukseklik=prompt("yüksekliğide gir bari beyfendi")
    var sonuc=(taban*yukseklik)/2;
    alert(sonuc);
}

function kure_hesap(){
    var yarıcap=prompt("kürenin yarıçapını gir laaa")
    var sonuc=(yarıcap*yarıcap*3)*4;
    alert(sonuc);
}
function kure_hacim(){
    var r=prompt("kürenin yarıçapını gir laaa")
    var sonuc=((4/3)*3)*((r*r)*r);
    alert(sonuc);
}
function kucukbuyukbul(){
    var n1=prompt("ilk sayıyı giriniz")
    var n2=prompt("ikinci sayıyı giriniz")
    if(n1>n2){
        alert(n1+" "+"sayısı daha büyük")
    }
    else if(n1<n2){
        alert(n2+" "+"sayısı daha büyük")  
 
    }
    else{
        alert("bu sayılar eşittir.")
    }
}
function kapat(){
    document.getElementById("resim_dis").style.zIndex="-5";
}
function olay1(){
    document.getElementById("resim_dis").style.zIndex="5";
    document.getElementById("res").src="res1.jpg";
}
