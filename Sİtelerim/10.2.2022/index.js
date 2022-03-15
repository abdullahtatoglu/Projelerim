var iller=[];
var meyve=["elma","armut","muz","ananas"];
meyve.forEach(
    function(value){
    document.getElementById("panel2").innerHTML+=value+"<br>";
    }
);
var fruit=prompt("bir meyve girin");
meyve.forEach(
    function(value,index){
        if(value==fruit){
            meyve.splice(index,1)
        }
    }
)
document.getElementById("panel2").innerHTML="";
meyve.forEach(
    function(value){
    document.getElementById("panel2").innerHTML+=value+"<br>";
    }
);

function ekle(){
    var deger=prompt("il giriniz");
    iller.push(deger);
    console.log(iller);
    listele();    
}
function listele(){
    document.getElementById("list").innerHTML="";
    for(var i=0;i<iller.length;i++){
        document.getElementById("list").innerHTML+="<li>"+iller[i]+"</li>";
    }
    
}
function silad(){
    var deger=prompt("silmek istediğiniz ili yazınız");
    var durum=false;
    for(var i=0;i<iller.length;i++){
        if(deger==iller[i]){
            iller.splice(i,1);
            durum=true;
            break;
        }
    }
    listele();
}  
function silsıra(){
    var deger=prompt("silmek istiginiz ilin sırasını yazınız");
    iller.splice(deger-1,1);
    listele();
}
function guncelle(){
    var deger=prompt("güncellemek istediğiniz ili seçiniz")
    for(var i=0;i<iller.length;i++){
        if(deger==iller[i]){
            var yenideger=prompt("yeni il adını giriniz");
            iller.splice(i,1,yenideger);
            break;
        }
        else(
            alert("böyle bir il yoktur.")
        )
    }
    listele();//otomatik listele komutunu çalıştırır.
}