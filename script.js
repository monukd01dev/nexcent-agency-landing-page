const bars = document.querySelector("#bars")
const cross = document.querySelector("#cross")
const navMenuCon = document.querySelector(".nav-wrapper .nav-menu-con")

bars.addEventListener("click",()=>{
    navMenuCon.style.right = "0px";
    navMenuCon.style.opacity = "1";
    
})

cross.addEventListener("click",()=>{
    navMenuCon.style.right = "-250px";
    navMenuCon.style.opacity = "0";
})


window.addEventListener("resize",()=>{
    if (window.innerWidth > 860) {
        navMenuCon.style.opacity = "1";
      }
})