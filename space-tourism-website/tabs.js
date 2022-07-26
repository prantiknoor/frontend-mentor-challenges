const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

let tabFocus = 0;

const mod = (m, n) => (m % n + n) % n;
const moduls = (m, n) => m - (m / n >> 0) * n;

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

function changeTabFocus(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      tabs[tabFocus].setAttribute("tabindex", -1);

      if (e.key === "ArrowRight") {
        tabFocus = mod(tabFocus + 1, tabs.length);
      } else if (e.key === "ArrowLeft") {
        tabFocus = mod(tabFocus - 1, tabs.length);
      }

      tabs[tabFocus].setAttribute("tabindex", -1);
      tabs[tabFocus].focus();
    }
}

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);
    targetTab.setAttribute('aria-selected', true);

    hideContent(mainContainer, "[role='tabpanel']:not([hidden])");
    showContent(mainContainer, [`#${targetPanel}`]);

    hideContent(mainContainer, "picture:not([hidden])");
    showContent(mainContainer, [`#${targetImage}`]);
}

const hideContent = (parent, selector) => parent.querySelector(selector).setAttribute("hidden", "");
const showContent = (parent, selector) => parent.querySelector(selector).removeAttribute("hidden");