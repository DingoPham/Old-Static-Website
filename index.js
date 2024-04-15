var lastScroll = window.pageYOffset;
window.onscroll = function(){
    var currentScroll = window.pageYOffset;

    if(lastScroll > currentScroll){
        document.getElementById("nav").style.top = "0";
    }else{
        document.getElementById("nav").style.top = "-100px";
    }
    lastScroll = currentScroll;
}

document.querySelectorAll('#nav a').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        const href = this.getAttribute('href')

        if(href === './index.html'){
            window.location.href = href;
            return;
        }

        const targetId = this.getAttribute('href').substring(1);
        const targetEle = document.getElementById(targetId);
        const targetOffSet = targetEle.offsetTop;

        const windowHeight = window.innerHeight; 
        const targetHeight = targetEle.offsetHeight;
        const scroll = targetOffSet - (windowHeight - targetHeight) / 2;

        window.scrollTo({
            top: scroll,
            behavior: 'smooth'
        });
    });
});

function scrollFunction(){
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300){
        document.getElementById("toTopBtn").style.display = "block";
    }else{
        document.getElementById("toTopBtn").style.display = "none";
    }
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', scrollFunction)