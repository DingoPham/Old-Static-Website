// Theme 
document.getElementById('themeSwitcher2').addEventListener('click', function(){
    const moonTheme = document.getElementById('moonTheme2');
    const sunTheme = document.getElementById('sunTheme2');


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