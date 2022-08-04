const toggleButton = document.querySelector(".toggle-button");
const navigationBar = document.querySelector("#primary-navigation");

toggleButton.addEventListener("click", (e) => {
    const navOpen = toggleButton.getAttribute("aria-expanded") === "true";

    toggleButton.setAttribute("aria-expanded", !navOpen);
    navigationBar.setAttribute("data-visible", !navOpen);    
});

function closeNavbar(event) {
    if (!navigationBar.contains(event.target) && !event.target.matches(".toggle-button")) {
        toggleButton.setAttribute("aria-expanded", false);
        navigationBar.setAttribute("data-visible", false); 
    }
}