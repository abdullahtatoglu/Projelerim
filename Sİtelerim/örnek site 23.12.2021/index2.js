function button1(){
    var ad=document.getElementById("name").value;
    var sıfre=document.getElementById("password").value;
    if(ad=="admin" && sıfre=="admin1234")
    {
        //document.getElementById("yanlıs").innerHTML="Kullanıcı adı ve şifrenizi kontrol ediniz.";
        window.location.href = "index.html";
    }

    else
    {
        document.getElementById("yanlıs").innerHTML="Kullanıcı adı ve şifrenizi kontrol ediniz.";
    }
}

function sayfa1ac(){
    var sayfa1a=document.getElementById("sayfa1");
    var sayfa1ac=document.getElementById("sayfa1ac");
    sayfa1a.style.transform="translateX(1120px)";
    sayfa1a.style.transition="400ms";
}

function sayfa2ac(){
    var sayfa2a=document.getElementById("sayfa2");
    sayfa2a.style.transform="translateX(-960px)";
    sayfa2a.style.transition="400ms";
}
function sayfa1kapat(){
    var sayfa1k=document.getElementById("sayfa1");
    sayfa1k.style.transform="translateX(-1120px)";
    sayfa1k.style.transition="10sn";
}
function sayfa2kapat(){
    var sayfa2k=document.getElementById("sayfa2");
    sayfa2k.style.transform="translateX(950px)";
    sayfa2k.style.transition="400ms";
}
function button2(){
    var sayfa2k=document.getElementById("sayfa2");
    sayfa2k.style.transform="translateX(950px)";
    sayfa2k.style.transition="10sn";
}