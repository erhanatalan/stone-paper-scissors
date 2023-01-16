//! Variables
const yourChoise= document.getElementById("your-choice")
const pcChoise = document.getElementById("pc-choice")
const select = document.querySelector(".select")
let userSelect;
let pcRandom;

//!Score 
const scoreYou = document.getElementById("you")
const scorePc = document.getElementById("pc")

//! Modal Selectors
const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

//!Result Message
const final = document.getElementById("final")

//! Event Listeners
select.addEventListener("click", (e)=>{
    if(e.target.getAttribute("alt")){
        userSelect= e.target.getAttribute("alt")
        yourChoise.innerHTML= `<img src="./assets/${userSelect}.png"></img>`
        pc()
    }
})

const pcArr = ["tas", "kagit", "makas"];

//!functions 
function pc(){
    pcRandom = pcArr[Math.floor(Math.random()*3)];
    console.log(pcRandom);
    pcChoise.innerHTML= `<img src="./assets/${pcRandom}.png"></img>`;
    result();
}
function result(){
    switch (userSelect) {
        case 'tas':
            if(pcRandom=="kagit"){
                lost()
            }else if(pcRandom == "makas"){
                win()
            }
            break;
        case 'kagit':
            if(pcRandom=="makas"){
                lost()
            }else if(pcRandom == "tas"){
                win()
            }
            break;
        case 'makas':
            if(pcRandom=="tas"){
                lost()
            }else if(pcRandom == "kagit"){
                win()
            }
            break;
    
        default:
            break;
    }
    if (userSelect == pcRandom){
        resultDiv.classList.add("active")
        resultDiv.innerHTML="It's a draw"
        containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
        resultDiv.style.backgroundColor = "#FFC538";
    }
    if(scoreYou.innerHTML=='10'){
        final.innerHTML = `💃 You Win🕺`
        document.querySelector(".modal").style.backgroundColor = "#5AB7AC"
        modalBtn.style.color = "#5AB7AC"
    }
    if(scorePc.innerHTML=='10'|| scoreYou.innerHTML=='10'){
        modal()
    }
}
function lost (){
    resultDiv.classList.add("active")
    resultDiv.innerHTML="You Lost"
    containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
    resultDiv.style.backgroundColor = "#fb778b";
    scorePc.innerHTML++;
}
function win (){
    resultDiv.classList.add("active")
    resultDiv.innerHTML="You Win"
    containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
    resultDiv.style.backgroundColor = "#5AB7AC";
    scoreYou.innerHTML++;
}
function modal(){
    modalEl.classList.add('show');
}
modalBtn.addEventListener("click", ()=>{
    modalEl.style.display = "none";
    window.location.reload();
})
