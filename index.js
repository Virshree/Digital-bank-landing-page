const menuIcon = document.getElementById("menuIcon");
const toggleButton = document.getElementById("menu-toggle");
const navItems = document.getElementById("navItems");
const menuPanel=document.getElementById("menu-panel")

let isOpen = false;

toggleButton.addEventListener("click", () => {
  isOpen = !isOpen;



  // Switch between hamburger and close icon
  menuIcon.src = isOpen
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg";
  //Toggle menu Panel
   menuPanel.style.display = isOpen ? "block" : "none";

});
