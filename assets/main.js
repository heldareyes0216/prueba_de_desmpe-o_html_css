// =============================================
//  main.js — Menú hamburguesa
// ============================================

// Seleccionamos los elementos que necesitamos
const hamburger = document.getElementById('menu-btn');
const mobileNav = document.getElementById('menu');

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.classList.toogle("active");
});

document.querySelectorAll("nav a").forEach(link => 
    link.addEventListener("click", () =>menubar.classList.remove("active"))
);

document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && e.target !==hamburger)
        mobileNav.classList.remove("active");
});