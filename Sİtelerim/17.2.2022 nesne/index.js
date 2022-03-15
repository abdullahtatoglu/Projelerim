let haberler = []
haberler[0] = {
    haberId: 1,
    haberAd: "yeni gezegen keşfedildi",
    haberIcerik: "",
    haberYayin:"",
    haberFoto:"res1.jpg",
}
haberler[1] = {
    haberId: 2,
    haberAd: "",
    haberIcerik: "",
    haberYayin:"",
    haberFoto:"",
}
haberler[2] = {
    haberId: 3,
    haberAd: "",
    haberIcerik: "",
    haberYayin:"",
    haberFoto:"",
}
haberler[3] = {
    haberId: 4,
    haberAd: "",
    haberIcerik: "",
    haberYayin:"",
    haberFoto:"",
}
haberler[4] = {
    haberId: 5,
    haberAd: "",
    haberIcerik: "",
    haberYayin:"",
    haberFoto:"",
}
var i=1;
function ekle(){
    let form_ad=document.getElementById("had").value;
    let form_icerik=document.getElementById("hicerik").value;
    let form_yayin=document.getElementById.apply("htarih").value;
    let form_foto=document.getElementById("hresim").value;
    haberler[i].haberId=++i;
    haberler[i].haberAd=form_ad;
    haberler[i].haberIcerik=form_icerik;
    haberler[i].haberYayin=form_yayin;
    haberler[i].haberFoto=form_fot;
    
    for(let x of haberler){
        
    }
}
