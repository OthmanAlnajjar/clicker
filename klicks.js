"use strict"

document.addEventListener("DOMContentLoaded",() => {
    const counter = document.getElementById("clicker");
    const rester = document.getElementById("Reset");
    const num= document.getElementById("count");
    let x=0;

    
    counter.addEventListener("click",()=>{
        x++;
        num.innerText=x;    
    })
   
    

    rester.addEventListener("click",()=>{
        x=0;
        num.innerText=x;
    })
});





