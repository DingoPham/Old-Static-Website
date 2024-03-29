var lastScroll = window.pageYOffset;
window.onscroll = function(){
    var currentScroll = window.pageYOffset;

    if(lastScroll > currentScroll){
        document.getElementById("nav").style.top = "0";
    }
    else{
        document.getElementById("nav").style.top = "-100px";
    }
    lastScroll = currentScroll;
}