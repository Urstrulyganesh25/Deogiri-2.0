// const toggle = document.querySelector('.menu-toggle');
// const menu = document.querySelector('nav ul');
// toggle.addEventListener('click', () => menu.classList.toggle('active'));



// const hamburger = document.getElementById("hamburger");
// const mobileMenu = document.getElementById("mobileMenu");

// hamburger.addEventListener("click", () => {
//     const open = mobileMenu.classList.toggle("active");
//     hamburger.textContent = open ? "✕" : "☰";
//     hamburger.setAttribute("aria-expanded", open);
// });

// // Auto close menu on link click
// mobileMenu.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", () => {
//         mobileMenu.classList.remove("active");
//         hamburger.textContent = "☰";
//         hamburger.setAttribute("aria-expanded", false);
//     });
// });

// // Close if resizing back to desktop
// window.addEventListener("resize", () => {
//     if (window.innerWidth > 768) {
//         mobileMenu.classList.remove("active");
//         hamburger.textContent = "☰";
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
        const open = mobileMenu.classList.toggle("active");
        hamburger.textContent = open ? "✕" : "☰";
        hamburger.setAttribute("aria-expanded", open);
    });

    // Auto close menu on link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            hamburger.textContent = "☰";
            hamburger.setAttribute("aria-expanded", false);
        });
    });

    // Close if resizing back to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove("active");
            hamburger.textContent = "☰";
        }
    });
});
