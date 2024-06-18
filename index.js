// Navbar animation

// Navbar point to content head
document.querySelectorAll('#navBar a').forEach(anchor =>{
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

// Theme 
document.getElementById('themeSwitcher').addEventListener('click', function(){
    const moonTheme = document.getElementById('moonTheme');
    const sunTheme = document.getElementById('sunTheme');


    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme', 'dark');
        sunTheme.classList.add('hidden');
        moonTheme.classList.remove('hidden');
    }
    else{
        localStorage.setItem('theme', 'light');
        moonTheme.classList.add('hidden');
        sunTheme.classList.remove('hidden');
    }
}); 
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme && savedTheme === 'dark'){
        document.body.classList.add('dark-theme');
    }
});
