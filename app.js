const yourChoise= document.getElementById("your-choice")
const pcChoise = document.getElementById("pc-choice")

const select = document.querySelector(".select")
let userSelect;
let pcRandom;


select.addEventListener("click", (e)=>{
    //console.log(e.target.className);
    //console.log(e.target.getAttribute("alt"));
    userSelect= e.target.getAttribute("alt")
    yourChoise.innerHTML= `<img src="./assets/${userSelect}.png"></img>`
    pc()
})

const pcArr = ["tas", "kagit", "makas"];

function pc(){
    pcRandom = pcArr[Math.floor(Math.random()*3)];
    console.log(pcRandom);
    pcChoise.innerHTML= `<img src="./assets/${pcRandom}.png"></img>`
}






















// const tasImage = document.querySelector(".tas")
// const kagitImage = document.querySelector(".kagit")
// const makasImage = document.querySelector(".makas")

// tasImage.addEventListener("click", (e)=> {
//     console.log(e);
//     yourChoise.innerHTML= `<img src="./assets/tas.png"></img>`
// })
// kagitImage.addEventListener("click", (e)=> {
//     console.log(e);
//     yourChoise.innerHTML= `<img src="./assets/kagit.png"></img>`
// })
// makasImage.addEventListener("click", (e)=> {
//     console.log(e);
//     yourChoise.innerHTML= `<img src="./assets/makas.png"></img>`
// })






