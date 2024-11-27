document.getElementById("menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("hidden");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Redirecionamento ao clicar no mapa
// const biomas = document.querySelectorAll(".biomas path");
// biomas.forEach(bioma => {
//     bioma.addEventListener("click", () => {
//         const biomaId = bioma.dataset.bioma.toLowerCase();
//         window.location.href = `bioma-${biomaId}.html`;
//     });
// });