let hamBurger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");

hamBurger.addEventListener("click", ()=>{
    nav.classList.toggle("showData");
    console.log(nav)

})