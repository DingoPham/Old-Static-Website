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
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735677/16_pvwavg.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735678/15_qi1tqj.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735674/14_rs5qzv.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735674/14_rs5qzv.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735671/11_qocp2e.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735672/12_tjr5dp.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735703/9_xdfi7n.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735704/10_uocuyh.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735699/8_vfdjbl.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735698/7_zcxs8a.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735695/6_si8mjm.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735694/5_putiqg.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735691/4_i7rsm4.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735687/3.1_phijvh.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735689/3_b1uqod.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735683/2.3_uv1pec.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735682/2.2_kgl4gx.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735682/2.1_byjsex.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735686/2_dpm9lm.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735679/1_emd0ss.jpg",
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
