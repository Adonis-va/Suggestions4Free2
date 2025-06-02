document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category img");
    categories.forEach((img) => {
        img.style.opacity = "0"; 
        setTimeout(() => {
            img.style.transition = "opacity 1s ease-in-out";
            img.style.opacity = "1";
        }, 500);
    });
});
document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});
