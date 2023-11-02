window.addEventListener("scroll", function(){
    let menuindex = document.querySelector('.menuindex')
    menuindex.classList.toggle('rolagem', window.scrollY > 15)
})

const menuMobileIndex = document.querySelector(".menuMobileIndex");
const menuindex = document.querySelector(".menuindex");

hamburger.addEventListener("click", () => menuindex.classList.toggle("active"));