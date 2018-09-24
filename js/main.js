function menuChange() {
    const menu = document.querySelector(".menu").classList.toggle("active");
}

const navBtn = document.querySelector(".hamburger").addEventListener("click", menuChange);

const homePageScroll = document.querySelectorAll(".homePage");

homePageScroll.forEach((menu) => {
    menu.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".section1").offsetTop
        });
    })
});

const aboutUsScroll = document.querySelectorAll(".aboutUs");

aboutUsScroll.forEach((menu) => {
    menu.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".section2").offsetTop
        });
    })
});

const servicesScroll = document.querySelectorAll(".services");

servicesScroll.forEach((menu) => {
    menu.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".section3").offsetTop
        });
    })
});

const contactScroll = document.querySelectorAll(".contact");

contactScroll.forEach((menu) => {
    menu.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".contact-form").offsetTop
        });
    })
});