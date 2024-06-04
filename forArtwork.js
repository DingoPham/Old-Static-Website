// Leftsize navbar 
function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");
    if (sidebar.style.width === "200px") {
        sidebar.style.width = "0";
        content.style.marginRight = "0";
    } else {
        sidebar.style.width = "200px";
        content.style.marginRight = "200px";
    }
}

// Page switch
const images = [
    //new image put in here
    "./imgFAW/beReal.jpg",
    "./imgFAW/beach.jpg",
    "./imgFAW/jobs.jpg",
    "./imgFAW/shave.jpg",
    "./imgFAW/birthday.jpg",
    "./imgFAW/broodMother.jpg",
    "./imgFAW/mySkyKid.jpg",
    "./imgFAW/skyGA2.jpg",
    "./imgFAW/skyGA1.jpg",
    "./imgFAW/skyTogether2.jpg",
    "./imgFAW/skyTogether1.jpg",
    "./imgFAW/hairCut.jpg",
    "./imgFAW/Gaffie.jpg",
    "./imgFAW/roadToRostok.jpg",
    "./imgFAW/commission.jpg",
    "./imgFAW/commission2.jpg",
    "./imgFAW/dingo.jpg"
    //old image put here
];

const itemsPerPage = 6;
let currentPage = 1;

function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageImages = images.slice(startIndex, endIndex);

    const pageContent = document.getElementById("pageContent");
    pageContent.innerHTML = ""; // Clear previous content

    pageImages.forEach((imageSrc) => {
        const imgPlace = document.createElement("div");
        imgPlace.classList.add("img-place");
        const img = document.createElement("img");
        img.src = imageSrc;
        imgPlace.appendChild(img);
        pageContent.appendChild(imgPlace);
    });
}

function showPreviousPage() {
    const pageNumberInput = document.getElementById("pageNumberInput");
    if (currentPage > 1) {
        currentPage--;
        pageNumberInput.value = currentPage;
        showPage(currentPage);
    }
}

function showNextPage() {
    const pageNumberInput = document.getElementById("pageNumberInput");
    const maxPage = Math.ceil(images.length / itemsPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        pageNumberInput.value = currentPage;
        showPage(currentPage);
    }
}

document.getElementById("pageNumberInput").addEventListener("change", function() {
    currentPage = parseInt(this.value);
    showPage(currentPage);
});

showPage(currentPage);

function confirmButton(url){
    event.preventDefault();
    const userConfirm = confirm("This site contains content over 18 years old! Please consider before watching!");
    if (userConfirm){
        window.location.href = url;
    }
}

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