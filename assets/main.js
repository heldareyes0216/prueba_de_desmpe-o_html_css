const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link =>
    link.addEventListener("click", () => menu.classList.remove("active"))
);

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== btn)
        menu.classList.remove("active");
});