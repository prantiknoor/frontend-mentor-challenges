const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    const expanded = dropdown.getAttribute("aria-expanded") === "true";
    dropdown.setAttribute("aria-expanded", !expanded);
  });

  dropdown.addEventListener("mouseover", (e) => {
    dropdown.setAttribute("aria-expanded", true);
  });
  dropdown.addEventListener("mouseout", (e) => {
    dropdown.setAttribute("aria-expanded", false);
  });
});
