const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".link");
const navLinks = document.querySelectorAll(".link a");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

        const icon = menuToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", isOpen);
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        });
    });
}

const submitBtn = document.querySelector(".query-box button");

if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        alert("Query Sent Successfully");
    });
}
