const searchInput = document.getElementById('searchInput');
const noticeList = document.getElementById('noticeList');
const notices = noticeList.getElementsByClassName('notice');

searchInput.addEventListener('keyup', function () {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < notices.length; i++) {
        let title = notices[i].getElementsByTagName('h3')[0];
        if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {
            notices[i].style.display = "block";
        } else {
            notices[i].style.display = "none";
        }
    }
});



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