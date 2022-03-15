let countEL=document.getElementById("count-el");
let count=0;
let saveEL=document.getElementById("save-el")
function increment(){
    count=count+1
    countEL.innerText=count
}
function decrement(){
    count=count-1
    countEL.innerText=count
    
}
function save(){
    console.log(count)
    document.getElementById("save-el").innerHTML+="-"+count
}
document.getElementById("save-el").innerHTML=count