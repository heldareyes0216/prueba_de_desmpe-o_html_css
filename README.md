# The Shattered Riffs — Concert Website

##  Description
This project is a responsive website for a fictional rock band concert called **“The Shattered Riffs”**.  
It showcases event information, upcoming dates, gallery, and a modern UI design focused on a night/rock aesthetic.

The site is built using **HTML5, CSS3, and JavaScript**, applying responsive design principles and modern layout techniques like **Flexbox** and **CSS Grid**.

---

## How to run the projects

1. Download ot clone the project
2. Open the project folder
3. Open 'index.html' in your browser

---

## Features

- Responsive design (mobile, tablet, desktop)
- Custom dark theme with neon and gold accents
- Event schedule using semantic HTML tables
- Image gallery with CSS Grid
- Interactive hamburger menu (JavaScript)
- Smooth animations and transitions
- Mobile-first approach

---

## Technologies Used

- HTML5 (semantic structure)
- CSS3
  - Flexbox
  - Grid
  - Variables (CSS Custom Properties)
  - Animations & transitions
- JavaScript (DOM manipulation)
- Google Fonts

---

## Project Structure

```

prueba_de_desempeño_html_css/
│
├── index.html
├── README.md
│
├── assets/
│ ├── css/
│ │ └── styles.css
│ │
│ ├── img/
│ │ └── (images)
│ │
│ └── icons/
│ └── logo.ico

```

---

##  Sections

###  Header
- Fixed navigation
- Logo + menu
- Hamburger menu (mobile)

###  Hero
- Main section with background image
- CTA buttons
- Scroll indicator animation

###  Upcoming Dates
- Table with concert schedule
- Responsive (cards on mobile)

###  About
- Band info
- Styled list of features

###  Gallery
- CSS Grid layout
- Hover effects

###  Sponsors
- Flexbox layout

###  CTA
- Final call-to-action section

###  Footer
- Contact info
- Social media
- Links

---

##  Responsive Design

- Mobile-first approach
- Breakpoints:
  - 768px (tablet)
  - 1024px (desktop)

---

##  JavaScript

Used for hamburger menu:

```javascript
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("open");
});