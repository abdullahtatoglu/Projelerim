i=1
function darkmode(){
    if(i%2==1){
        document.body.style.backgroundColor="rgb(0, 0, 30)"
        document.getElementById("font_size").style.backgroundColor="white";
    }
    else{
        document.body.style.backgroundColor="white";
    }
    i++ 
}