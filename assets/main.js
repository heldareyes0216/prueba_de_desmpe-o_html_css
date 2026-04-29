// =============================================
//  main.js — Menú hamburguesa
// =============================================

// Seleccionamos los elementos que necesitamos
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

// Cuando el usuario hace clic en el botón hamburguesa...
hamburger.addEventListener('click', function () {

  // Alternamos la clase 'active' en el botón (hace la animación de X)
  hamburger.classList.toggle('active');

  // Alternamos la clase 'open' en el menú (lo muestra u oculta)
  mobileNav.classList.toggle('open');

});

// Cerramos el menú al hacer clic en cualquier enlace del menú mobile
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
  });
});