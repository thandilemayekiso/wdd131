
document.addEventListener("DOMContentLoaded", () => {

    const yearElement = document.getElementById("year");
    yearElement.textContent = new Date().getFullYear();


    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.textContent = document.lastModified;


    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.style.display === "block";
        navMenu.style.display = isOpen ? "none" : "block";
        menuToggle.textContent = isOpen ? "☰" : "X";
    });

    window.addEventListener("resize", () => {
        const isOpen = navMenu.style.display === "block";
        navMenu.style.display = window.innerWidth <= 768? "none" : isOpen? "block" : isOpen;
        menuToggle.textContent = window.innerWidth <= 768? "��" : "X";
    });
    if (window.innerWidth <= 768) {
        navMenu.style.display = "none";
    }
});
