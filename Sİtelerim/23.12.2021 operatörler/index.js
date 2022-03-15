/* var sayi=0;

function ac_kapa(){
    if(sayi%2==0)
    {
        document.getElementById("ust").style.display="none";
    }
    if(sayi%2==1){
        document.getElementById("ust").style.display="block";
        document.getElementById("ust").style.backgroundColor="green";
    }
    sayi++;
}

var sayi1=10, sayi2=5;
sayi1+=sayi2;
alert(sayi1); 

var renk=prompt("bir renk giriniz");
if(renk=="turuncu" || renk=="Turuncu" || renk=="TURUNCU"){
    document.body.style.backgroundColor="orange";
}


for(var i=1;i<=100;i++)
{
   if(i%5==0)
   {
       document.writeln(i)
   }
}

var i=0;
while(i<=100)
{
    document.writeln(i);
    i+=3;
}*/
var ad=prompt("kullanıcı adınızı giriniz")
var sifre=prompt("kullanıcı şifrenizi giriniz")
if(ad=="admin" && sifre=="admin1234"){
    var ilk=prompt("ilk sayıyı giriniz")
    var iki=prompt("ikinci sayıyı giriniz")
    var i=ilk;
    while(i<=iki)
    {
        document.writeln(i);
        i++;
    }
}
else
{
    alert("kullanıcı adı ve şifrenizi kontrol ediniz")
}
