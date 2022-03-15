/*
let ogrenci={
    ad:"abdullah",
    soyad:"tatoğlu",
    no:553,
    notlar:[75,35,90],
    dogumyer:"konak",
    ulke:"türkey",
    dogumulke:function(){
        return this.dogumyer+" "+this.ulke
    },
    tamisim:function(){
        return this.ad+" "+this.soyad
    },
    ortalama:function(){ 
        var ort=(this.notlar[0]+this.notlar[1]+this.notlar[2]/3)
        return ort
    }

}
alert("ad;"+ogrenci.ad);
alert("no;"+ogrenci.no);
alert("3.not:"+ogrenci.notlar[2]);
alert("tamad:"+ogrenci.tamisim());
alert("öğrenciort:"+ogrenci.ortalama());
alert("doğduğu yer ve ülkesi:"+ogrenci.dogumulke())
*/



let ogr=[];
ogr[0]={
    ad:"abdullah",
    soyad:"tatoğlu",
    tamisim:function(){
        return this.ad+" "+this.soyad
    },
    no:553,
    notlar:[50,79,89],
    ortalama:function(){
        var ort=(this.notlar[0]+this.notlar[1]+this.notlar[2]/3)
        return ort
    },
    sınıfı:"11/ATP",
}
ogr[1]={
    ad:"yigit emre",
    soyad:"temizkanı",
    tamisim:function(){
        return this.ad+" "+this.soyad
    },
    no:1073,
    notlar:[45,29,19],
    ortalama:function(){
        var ort=(this.notlar[0]+this.notlar[1]+this.notlar[2]/3)
        return ort
    },
    sınıfı:"11/ATP",
}
ogr[2]={
    ad:"talha",
    soyad:"demirbaş",
    tamisim:function(){
        return this.ad+" "+this.soyad
    },
    no:462,
    notlar:[60,89,99],
    ortalama:function(){
        var ort=(this.notlar[0]+this.notlar[1]+this.notlar[2]/3)
        return ort
    },
    sınıfı:"11/ATP",
}
ogr[3]={
    ad:"asiye",
    soyad:"oba",
    tamisim:function(){
        return this.ad+" "+this.soyad
    },
    no:468,
    notlar:[99,98,100],
    ortalama:function(){
        var ort=(this.notlar[0]+this.notlar[1]+this.notlar[2]/3)
        return ort
    },
    sınıfı:"11/ATP",
}
ogr[4]={
    ad:"sercan doruk",
    soyad:"kemahlıoğlu",
    tamisim:function(){
        return this.ad+" "+this.soyad
    },
    no:462,
    notlar:[50,20,30],
    ortalama:function(){
        var ort=(this.notlar[0]+this.notlar[1]+this.notlar[2]/3)
        return ort
    },
    sınıfı:"11/ATP",
}


function listele(){
    for(var i=0;i<ogr.length;i++){
        document.getElementById("panel").innerHTML+=(ogr[i].tamisim()+" "+"sınıfı"+" "+ogr[i].sınıfı+" ortalaması:"+ogr[i].ortalama()+"<br>")
    }
}

function numarabulma(){
    let durum=false;
    var num=prompt("aramak istediğiniz numarayı giriniz")
    for(var i=0;i<ogr.length;i++){
        if(num==ogr[i].no){
           durum=true;
           break;
        }
        else{
            durum=false;
        }
    }
    if(durum==false){
        alert("öğrenci bulunamadı")
    }
    else{
        document.getElementById("panel").innerHTML=(ogr[i].tamisim()+" "+"sınıfı"+" "+ogr[i].sınıfı+" ortalaması:"+ogr[i].ortalama()+"<br>")

    }
}