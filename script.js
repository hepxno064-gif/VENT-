// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

    const isOpen = nav.classList.contains("show");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

});


// CLOSE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");

    });

});


// PROPERTY FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const propertyCards = document.querySelectorAll(".property-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        propertyCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || filter === category) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section, .property-card, .service-item"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// HEADER SCROLL EFFECT

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );

            });

        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => {
    sectionObserver.observe(section);
});


// CURRENT YEAR

const year = new Date().getFullYear();

document.querySelector(".footer-bottom span").textContent =
    `© ${year} VENT. ALL RIGHTS RESERVED.`;