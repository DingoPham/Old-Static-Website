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
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731012/LuverSummer_lu2zbu.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731014/beReal_cqgat8.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731013/beach_o32ttt.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/jobs_kvhpbj.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731013/shave_htlgxp.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718782954/Luver_rp2by5.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718782932/Itsumi_x_Opheebop_funi1u.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731015/birthday_duij44.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/broodMother_xftfbj.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731011/mySkyKid_p5mnfv.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731013/skyGA2_pgimog.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731012/skyGA1_jwhpsj.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731021/skyTogether2_ivjssc.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731015/skyTogether1_tgwnzc.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731019/hairCut_pmk8ml.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/Gaffie_ydw0zs.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731014/roadToRostok_vw7tet.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731009/commission_cqckpo.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/commission2_cvltlg.jpg",
    "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/dingo_xxdoj9.jpg"
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