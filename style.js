
var timer = 30;
var score = 0;
var hitrn = 0;
function makeBubble(){

    var clutter = "";

    for(var i=1;i<=133;i++){
        var rv = Math.floor(Math.random()*10)
         clutter += `<div class="bubble">${rv}</div>`;
    }
    
    document.querySelector("#centercen").innerHTML = clutter;

}

function runtimer(){
 var clearInt = setInterval(function(){
 if(timer>0){
    timer--;
    document.querySelector("#timer").innerHTML = timer;  
 }

 else{

    clearInterval(clearInt);
    document.querySelector("#centercen").innerHTML=`<h1>Game Over</h1> `
 }
        
},1000)
}

function getNewHit(){
     hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitrn
}

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score
}


document.querySelector("#centercen").addEventListener("click",function(details){
 var clickedNum = Number(details.target.textContent);
 if(clickedNum == hitrn){
    increaseScore();
    getNewHit();
    makeBubble();
 }
})


runtimer();
makeBubble();
getNewHit();

