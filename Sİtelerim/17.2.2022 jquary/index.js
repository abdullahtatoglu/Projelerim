$(function(){
    $("#kutu").on("click",function(){
        $(this).animate({opacity:0.5,width:"100vw",height:"100vh"},1000)
    })
})

$(function(){
    $("#but1").on("click",function(){
        $("#kutu").animate({opacity:0,width:"100vw",height:"100vh"},1000)
    })
})

$(function(){
    $("#but2").on("click",function(){
        $("#kutu").html(`<h4>SÜÜÜÜÜÜÜÜÜ</h4>`)
        $("#kutu").css({backgroundColor:"yellow",fontSize:"larger",textAlign:"center"})
        $("#kutu").animate({opacity:0.5,width:"10vw",height:"10vh"},1000);
    })
})

$(function(){
    $("#kutu").on("mousemove",function(){
        $("#kutu").animate({opacity:0.5},300);
    })
})

$(function(){
    $("#kutu").on("mouseout",function(){
        $("#kutu").animate({opacity:1},300);
    })
})