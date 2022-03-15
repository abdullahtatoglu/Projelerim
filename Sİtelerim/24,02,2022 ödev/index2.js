$(function(){
    let metin="Proin aliquam ligula et sollicitudin eleifend. In hac habitasse platea dictumst. Vivamus auctor, augue eu sagittis mattis, odio augue malesuada nulla, in varius enim turpis et ante. Quisque eu dictum urna. Sed nibh tortor, congue ut nisi vitae, molestie mattis ipsum. Ut sit amet vehicula dolor. Duis lorem ex, lobortis ac imperdiet et, faucibus porttitor leo. Quisque iaculis, urna ac gravida lacinia, lacus enim vestibulum lacus, porttitor mattis ex est eget ligula. Praesent a massa in orci fermentum pharetra et et nibh. Vivamus ut lorem semper turpis facilisis mollis ac sit amet elit. Donec pulvinar efficitur lorem et convallis. Etiam elementum nibh vulputate rutrum porta. Proin pharetra varius diam sed ornare."

    let text=metin.substr(0,100);
    $("#kutu1").text(text) 
    $("#kutu1").append(`<a style="color:blue;cursor:pointer;" id="devam">....devamını oku</a>`)
    $("#kutu1").addClass("kutu")
        //$("#kutu1").prepend("süüüüü1<br>")
        

    $("#html").on("click",function(){
        $("#kutu1").toggleClass("kutu2")
        let renk=($("#kutu1").css("color"))
        if(renk=="rgb(255, 255, 255)"){
            $(".kutu2").css({color:"green"})
        }
    })

    $(document).on("click","#devam",function(event){
        event.preventDefault()
        $("#kutu1").html(metin)
        $("#kutu1").append(`<a style="color:blue;cursor:pointer;" id="kısalt">....kısalt</a>`)
   })

    $(document).on("click","#kısalt",function(){
        $("#kutu1").text(text)
        $("#kutu1").append(`<a style="color:blue;cursor:pointer;" id="devam">....devamını oku</a>`)
   })


})