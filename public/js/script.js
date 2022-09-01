const hamburgerIconEl = document.getElementById("hamburger-icon");
const closeIconEl = document.getElementById("close-icon");
const navEl = document.querySelector(".nav");

hamburgerIconEl.addEventListener("click", () => {
    navEl.classList.add("show");
    hamburgerIconEl.classList.toggle("hidden");
    closeIconEl.style.display = "block";
});


closeIconEl.addEventListener("click", () => {
    navEl.classList.remove("show");
    hamburgerIconEl.classList.toggle("hidden");
    closeIconEl.style.display = "none";
});