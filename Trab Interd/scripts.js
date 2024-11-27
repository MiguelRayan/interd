document.getElementById("menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("hidden");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

const images = document.querySelectorAll('.carrossel img');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');
let currentIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

showImage(currentIndex);