const menuBtn = document.getElementById(".menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealoption ={
    origin:"bottom",
    distance:"50px",
    duration: 1000,
};

scrollReveal().reveal(".header_image img", {
    ...scrollRevealoption,
    origin:"right",
});
scrollReveal().reveal(".header_content h5", {
    ...scrollRevealoption,
    delay: 500,
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealoption,
    delay: 10000,
});
scrollReveal().reveal(".header_content p", {
    ...scrollRevealoption,
    delay: 1000,
});
scrollReveal().reveal(".header_content .links" , {
    ...scrollRevealoption,
    delay: 2000,
});