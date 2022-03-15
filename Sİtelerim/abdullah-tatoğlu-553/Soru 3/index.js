function ac(){
    var kad=document.getElementById("kad").value;
    var sifre=document.getElementById("sifre").value;
    if(kad=="A" && sifre=="1"){
        document.getElementById("acılıs").style.display="none";
    }
    else{
        alert("hatalı giriş")
    }
}