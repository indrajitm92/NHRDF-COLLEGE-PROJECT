document.addEventListener("DOMContentLoaded",function(){
    let menubar = document.querySelector(".bottom_header_last_part");
    window.addEventListener("scroll",function(){
        if(window.scrollY > menubar.offsetHeight){
            menubar.classList.add("activeSticky");
        }
        else{
            menubar.classList.remove("activeSticky");
        }
    })
})