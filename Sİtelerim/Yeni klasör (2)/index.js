$(function () {
    var yazi = new TypeIt('.kayan_yazi', {
        strings: ["World Wide Web, Dünya Çapında Ağ (kısaca WWW veya Web), İnternet üzerinde yayınlanan birbirleriyle bağlantılı hiper-metin dokümanlarından oluşan bir bilgi sistemidir. Bu dokümanların her birine Web sayfası adı verilir ve Web sayfalarına İnternet kullanıcısının bilgisayarında çalışan Web tarayıcısı adı verilen bilgisayar programları aracılığıyla erişilir. Web sayfalarında metin, imaj, video ve diğer multimedya ögeleri bulunabilir ve diğer bağlantı ya da link adı verilen hiper-bağlantılar ile başka Web sayfalarına geçiş yapılabilir.",
            `izlediğiniz için teşekkür ederiz`],
        speed: 50,
        loop: true,
        lifelike: true,
        cursorChar: "|",
        nextStringDelay: 200,
        loopDelay: 1000,
        afterString: (step, queue, instance) => {
            $(".alan").html("")
        },
        afterStep: function (step, queue, instance) {

        },
        afterComplete: (instance) => {
            $(".alan").html(`<img src="img/konu5.svg" width="100%" height="100%">`)
        }

    });
    yazi.go()


    var start = true;
    $(document).on("mousemove", function (event) {
        if (start) {
            start = false
            $(".mouse").animate({ left: event.pageX + 20, top: event.pageY - 50 }, 20, function () {
                start = true
            })
        }
    })
    var durum2 = true
    setTimeout(function(){
       $(".sol_icon1").hover(function() {
        if (durum2) {
            durum2 = false
            
                $(".mouse").css({ borderRadius: "50%", backgroundColor: "gold", color: "white" })
                $(".mouse").html(`555-555-55-55`)
                $(".mouse").animate({ width: "10em", height: "10em", opacity: 1 }, 100, function () {
                    durum2 = true
                })
        }
    }, function () {
        if (durum2) {
            durum2 = false
            $(".mouse").html(``)
            $(".mouse").css({ borderRadius: "50%", backgroundColor: "gold", opacity: 1 })
            $(".mouse").animate({ width: "2em", height: "2em" }, 100, function () {
                durum2 = true
            })

        }
    }) 
    },300)
    
})  