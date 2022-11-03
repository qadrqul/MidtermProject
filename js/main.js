const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const gojosQuote = document.querySelector('.quote-1');
const button = document.querySelector('#quote-button');
const image = document.querySelector('.quote-img')
let clicks = 0;
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
image.innerHTML = `<img src="../images/Satoru_Gojo.webp" alt="photo"/>`;
fetch("https://animechan.vercel.app/api/random/character?name=saitama")
    .then(response => response.json())
    .then(quote => {
        gojosQuote.innerHTML=quote.quote;
    });

button.addEventListener("click", (where, element) => {
    clicks += 1;
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    button.style.background = color;
    fetch("https://animechan.vercel.app/api/random/character?name=saitama")
        .then(response => response.json())
        .then(quote => {
            gojosQuote.innerHTML=quote.quote;
        });
    if(clicks===5 || clicks===10 || clicks===50 || clicks===100){
        image.innerHTML = `<img src="/images/Agay.webp" alt="photo"/>`;
    }
    else {
        image.innerHTML = `<img src="/images/Satoru_Gojo.webp" alt="photo"/>`;
    }
})