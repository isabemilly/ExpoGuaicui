window.addEventListener("scroll", function(){
    let menu = document.querySelector('.menu')
    menu.classList.toggle('rolagem', window.scrollY > 15)
})

function clickmenu(){
    if (itensMenu.style.display == 'block'){
        itensMenu.style.display = 'none'
    }else{
        itensMenu.style.display = 'block'
    }    
}  

function clicksub(){
     if(itensSub.style.display == 'block'){
        itensSub.style.display = 'none'
     }else{
        itensSub.style.display = 'block'
     }
}
