console.log("1.SORU")
console.log("Sorunun cevabı kodlarda")

var kullanıcı = {
    ad:"İlter",
    soyadı:"Dirikolu",
    cinsiyet:"Erkek",
    telefon:"0262333333",
    adres:"konak izmir",
    meslek:"bilgisayar mühendisi",
    diller:["ingilizce","almanca","türkçe"],
    hobileri:["sinema","spor","kitap okumak"]
}
////////////////////////////////////////////////////
console.log("2.SORU")

console.log("Bu personel kaç dil bilmektedir.")
console.log(kullanıcı.diller.length)
////////////////////////////////////////////////////

console.log("3.SORU")

console.log("Bu personelin hobilerini alt alta yazınız.")
for(var i=0;i<kullanıcı.hobileri.length;i++)
{
    console.log(kullanıcı.hobileri[i])
}
////////////////////////////////////////////////////

console.log("4.SORU")

console.log("3 elemanlı bir personelbilgi listesi oluşturunuz.")
console.log("Personel adı="+" "+kullanıcı.ad)
console.log("personel soyadı="+" "+kullanıcı.soyadı)
console.log("Personel cinsiyeti="+" "+kullanıcı.cinsiyet)


console.log("İKİNCİ YOL") 


var kullanıcı1 = []
kullanıcı1[0]="ilter";
kullanıcı1[1]="dirikolu";
kullanıcı1[2]="erkek";

console.log("3 elemanlı bir personelbilgi listesi oluşturunuz.")
console.log("Personel adı="+" "+kullanıcı1[0])
console.log("personel soyadı="+" "+kullanıcı1[1])
console.log("Personel cinsiyeti="+" "+kullanıcı1[2])

////////////////////////////////////////////////////