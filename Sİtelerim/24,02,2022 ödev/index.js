$(function(){
    $("#button1").on("click",function(){
        var sifre=$("#kutu1").val()
        if(sifre.length<=8){
            $("#sonuc").html("giriş yapıldı");
        }
        else{
            $("#sonuc").html("şifreniz en az 8 karakterden oluşmalıdır");
        }
    })
})