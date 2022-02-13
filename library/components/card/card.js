const cardContainer = document.getElementsByClassName("card")[0]
const cardLink = document.getElementsByClassName("card-link")[0];

const cards = document.querySelectorAll(".card");
Array.prototype.forEach.call(cards, card=>{
    let down, up, link=  card.querySelector("h6 a");
    card.style.cursor = "pointer"
    card.onmousedown = ()=> down = +new Date();
    card.onmouseup = ()=>{
        up = +new Date();

        if((up-down)< 200){
            link.click();
        }
    }
})