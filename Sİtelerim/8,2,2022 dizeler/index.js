
//dizeler 1.yol
/*
var kisiler=[];
kisiler[0]="abdullah";
kisiler[1]="talha";
kisiler[2]="emre";
kisiler[3]="asiye";
kisiler[4]="ediz";
kisiler[5]="egekaradurak";
*/

//2.yol
/*
var kisiler=["emre",
            "apo",
            "talha",
            "asiye",
            "ediz",
            "egekaradurak"
        ];
*/

//3.yol
/*
var kisiler=new Array();
kisiler[0]="abdullah";
kisiler[1]="talha";
kisiler[2]="emre";
kisiler[3]="asiye";
kisiler[4]="ediz";
kisiler[5]="egekaradurak";
*/
/*
var kisiler=["emre",
            "apo",
            "talha",
            "asiye",
            "ediz",
            "egekaradurak",
        ];
*/

//kisiler[0]="gtml";
//document.getElementById("box1").innerHTML= kisiler[0]+" "+kisiler[2];
/*
for(var i=0;i<=5;i++)
{
    document.write(kisiler[i]+"<br>");
}
*/

/*
var sayilar=[11,5,24,31,62,69,12,34,54,43];
var tek_sayisi=0;
var cift_sayisi=0;
var toplam=0;

for(var i=0;i<10;i++)
{
    toplam=toplam+sayilar[1];
    if(sayilar[i]%2==1){
        tek_sayisi++;
    }

    else{
        cift_sayisi++;
    }

    if(sayilar[i]>50){
        document.writeln(sayilar[i]+"<br>")
    }


}
document.write(tek_sayisi+"<br>");
document.write(cift_sayisi+"<br>");
document.write(toplam);
*/

//var sayilar=[11,5,26,54,55,63,22,57,98,45]
//var gelen_sayi=prompt("lütfen bir sayi girin");

/*
var sayi=[];
for(var i=0;i<5;i++){
    sayi[1]=prompt("1 sayı giriniz");
}

for(var i=0;i<5;i++){
    toplam+=sayi[i];
}
document.writeln(toplam);

for(var i=0;i<5;i++){
    toplam+=sayi[i];
    if(sayi[i]%2==1)
    {
        tek++;
    }
}

document.writeln("sayıların toplamı="+toplam+"<br>");
document.writeln("sayıların ortu="+toplam/5+"<br>")
document.writeln("tek sayısı"+tek);
*/

var person=[];
person["ad"]="apo","emre","talha";
console.log(person.ad)
