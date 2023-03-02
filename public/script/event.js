const toggle = document.getElementById("toggle");
const menu = document.getElementById("mobileMenu");
const listMenu = menu.querySelector("ul li a");

toggle.addEventListener("click", () => {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// toggle.addEventListener("click", () => {
//   document.getElementById("mobileMenu").classList.toggle("hidden");
// });

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

listMenu.addEventListener("click", (e) => {
  if (listMenu.contains(e.target)) {
    menu.style.display = "none";
  }
});
