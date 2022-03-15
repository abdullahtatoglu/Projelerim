$(function(){
    var sira_no
    var haber=[
        {
            id:0,
            baslik:"TÜRKİYENİN EKONOMİSİ ÇÖKÜYOR",
            icerik:"Vivamus et odio id libero fermentum euismod non dictum velit. Sed cursus ligula pretium, sagittis arcu in, vulputate nisi. Nulla lacinia elementum dui, sit amet auctor diam blandit at. Aliquam erat volutpat. In bibendum imperdiet eros aliquam tempor. Mauris fringilla mauris quis leo semper aliquam. Vestibulum id elementum ligula. Donec elit leo, pellentesque ac sapien at, rutrum posuere risus. Nullam feugiat orci et malesuada placerat.",
            foto: ["img/foto1_1.jpg","img/foto1_2.jpg","img/foto1_3.jpg"],
            tarih:"12.01.2021",
        },
        {
            id:1,
            baslik:"TÜRKİYE SÜPER GÜÇ OLUYOR",
            icerik:"Vivamus et odio id libero fermentum euismod non dictum velit. Sed cursus ligula pretium, sagittis arcu in, vulputate nisi. Nulla lacinia elementum dui, sit amet auctor diam blandit at. Aliquam erat volutpat. In bibendum imperdiet eros aliquam tempor. Mauris fringilla mauris quis leo semper aliquam. Vestibulum id elementum ligula. Donec elit leo, pellentesque ac sapien at, rutrum posuere risus. Nullam feugiat orci et malesuada placerat.",
            foto: ["img/foto2_1.jpg","img/foto2_2.jpg","img/foto2_3.jpg"],
            tarih:"01.01.2023",
        },
        {
            id:2,
            baslik:"TÜRKİYE DÜNYANIN EN GÜÇLÜ ÜLKESİ SEÇİLDİ",
            icerik:"Vivamus et odio id libero fermentum euismod non dictum velit. Sed cursus ligula pretium, sagittis arcu in, vulputate nisi. Nulla lacinia elementum dui, sit amet auctor diam blandit at. Aliquam erat volutpat. In bibendum imperdiet eros aliquam tempor. Mauris fringilla mauris quis leo semper aliquam. Vestibulum id elementum ligula. Donec elit leo, pellentesque ac sapien at, rutrum posuere risus. Nullam feugiat orci et malesuada placerat.",
            foto: ["img/foto3_1.jpg","img/foto3_2.jpg","img/foto3_3.jpg"],
            tarih:"12.01.2077",
        }
    ]
    var islemler={
        haberBul:function(){
            let metin=`
                <p class="baslik">${haber[sira_no].baslik}</p>
                <div class="icerik">
                <img class="foto_kucuk" src="${haber[sira_no].foto[0]}" >
                <p>${haber[sira_no].icerik}</p>
                </div>
                <div class="galeri">
                ${islemler.fotoEkle()}
                </div>
                <p class="tarih">${haber[sira_no].tarih}</p>`

                return metin
        },
        fotoEkle:function(){
            let metin=""
            for(let deger of haber[sira_no].foto){
                metin+=
                `
                <img src="${deger}">
                `
            }
            return metin
        }
    }
    var liste=$("#menu li");
    liste.on("click",function(){
        //alert($(this).index())
        sira_no=$(this).index()
            $("#alt").html(islemler.haberBul())
            
    })
    $(document).on("click",".tarih",function(){
        $("#alt").before(`<p class="open">YAYIN TARİHİ</p>`).slideDown(3000)
        setTimeout(function(){
            $(".open").slideUp(500)
        },3000)
    })      
    
    $(document).on("click",".galeri img",function(){
        var id=$(this).attr("src")
        $("#kapak").show()
        $("#kapak").html(`<img src="${id}" width="100%">`)
    })
    $("#kapak").on("click",function(){
        $(this).hide()
    })
})