i=1
function res1(){
    if(i%2==1){
        document.getElementById("bolum3img1").style.display="block";
        document.getElementById("bolum3img2").style.display="none";
        
    }
    else{
        document.getElementById("bolum3img1").style.display="none";
    }
    i++ 
}
function res2(){
    if(i%2==1){
        document.getElementById("bolum3img2").style.display="block";
        document.getElementById("bolum3img1").style.display="none";
        
    }
    else{
        document.getElementById("bolum3img2").style.display="none";
    }
    i++ 
}
function res(){
    document.getElementById("bolum3img1").style.display="none";
    document.getElementById("bolum3img2").style.display="none";
}
