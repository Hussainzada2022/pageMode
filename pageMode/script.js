const mode = document.querySelector("#changeMode");
const option1 = document.querySelector("#one");
const option2 = document.querySelector("#two");
const content = document.querySelector(".content");
const n = document.querySelector("nav");

function change() {
     if(option1.selected) {      //Dark mode
         content.style.backgroundColor = "#222";
         n.style.backgroundColor = "rgb(80, 80, 80)";
         n.style.color = "#fff";
         content.style.color = "#fff";
         mode.style.backgroundColor = "rgb(80,80,80)";
         mode.style.color = "#fff";
     } else {                 //Ligh mode
         n.style.backgroundColor = "rgb(244, 242, 242)";
         content.style.backgroundColor = "#fff";
         content.style.color = "#000";
         mode.style.backgroundColor = "rgb(244,242,242)";
         mode.style.color = "#ccc";
     }
}