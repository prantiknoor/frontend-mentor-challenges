function toggleDropdown(event) {
  const element = event.target.parentElement;
  if (element.matches(".dropdown")) {
    const expanded = element.getAttribute("aria-expanded") === "true";

    if(window.innerWidth >= 720) closeAllDropdown();
    
    element.setAttribute("aria-expanded", !expanded);
  } else {
    closeAllDropdown();
  }
}

function closeAllDropdown() {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.setAttribute("aria-expanded", false);
  });
}