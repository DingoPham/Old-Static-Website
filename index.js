// Navbar animation
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

// Navbar point to content head
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

// Content animation
const contentApper = document.querySelectorAll('.animated-content');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

contentApper.forEach(animation => {
    observer.observe(animation);
});

// Footer animation
const leftContentApper = document.querySelector('.left-animated-content');
const newObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            leftContentApper.classList.add('show');
        }
    });
});

newObserver.observe(leftContentApper);

// Home page button
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function(){
    var toTopBtn = document.querySelector("#toTopBtn");
    if(window.pageYOffset > 1000 ){
        toTopBtn.classList.add("show");
    }else{
        toTopBtn.classList.remove("show");
    }
});

// Navbar for moblie button
// function navbarButton(x){
//     x.classList.toggle("change");
// }

// Hidden navbar for mobile
const hiddenNavBtn = document.getElementById("navbar-button");
const overlay = document.getElementById("overlay");

hiddenNavBtn.addEventListener("click", function(){
    if(overlay.style.display === "block"){
        overlay.style.display = "none";
    }else{
        overlay.style.display = "block";
    }
});

overlay.addEventListener("click", function(){
    overlay.style.display = "none";
});