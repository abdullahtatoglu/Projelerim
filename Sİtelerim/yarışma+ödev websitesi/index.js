$(function(){
    $("#face").hover(function(){
        $("#face1").animate({left:0+"60px"})
    },function(){
        $("#face1").animate({left:"-500px"})
    })
    $("#insta").hover(function(){
        $("#insta1").animate({left:0+"60px"})
    },function(){
        $("#insta1").animate({left:"-500px"})
    })
    $("#linke").hover(function(){
        $("#linke1").animate({left:0+"60px"})
    },function(){
        $("#linke1").animate({left:"-500px"})
    })
    $("#github").hover(function(){
        $("#github1").animate({left:0+"60px"})
    },function(){
        $("#github1").animate({left:"-500px"})
    })

    var typed = new Typed('.bolum1web', {
        strings: ['Web Designer'],
        stringsElement: '.bolum1web-strings',
        backDelay: 500,
        startDelay: 1000,
        typeSpeed: 50,
        backSpeed: 50,
        startDelay: 500,
        loop: true,
      });

   
})


 /*
      var durum=true
      $(".dfads").on("click",function(){
          if(durum){
              ilk işlemleri yap
              durum=false
          }
          else{
              ikinci işlemleri yap
              durum=true
          }
      })
$()
*/