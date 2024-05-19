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
    "./imgNSFW/13.jpg",
    "./imgNSFW/11.jpg",
    "./imgNSFW/12.jpg",
    "./imgNSFW/9.jpg",
    "./imgNSFW/10.jpg",
    "./imgNSFW/8.jpg",
    "./imgNSFW/7.jpg",
    "./imgNSFW/6.jpg",
    "./imgNSFW/5.jpg",
    "./imgNSFW/4.jpg",
    "./imgNSFW/3.jpg",
    "./imgNSFW/2.jpg",
    "./imgNSFW/1.jpg",
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
