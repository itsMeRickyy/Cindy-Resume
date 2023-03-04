const toggle = document.getElementById("toggle");
const menu = document.getElementById("mobileMenu");
const listMenu = menu.querySelector("#menu .mobileBtn button");

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

// listMenu.addEventListener("click", (e) => {
//   if (listMenu.contains(e.target)) {
//     menu.style.display = "none";
//   }
// });

// What i do button

const btnWhatIdo = document.getElementById("show-what-i-do-btn");
const menuWhatIdo = document.getElementById("What_i_Do");

btnWhatIdo.addEventListener("click", () => {
  if (menuWhatIdo.style.display === "flex") {
    menuWhatIdo.style.display = "none";
  } else {
    menuWhatIdo.style.display = "flex";
  }
});

// Button project
const projectBtn = document.getElementById("projectBtn");
const projectList = document.querySelectorAll(".projectList");
const closeProjectBtn = document.getElementById("closeProjectBtn");
// const project2 = document.getElementById("project2");
// const project3 = document.getElementById("project3");

projectBtn.addEventListener("click", () => {
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].style.display === "flex") {
      projectList[i].style.display = "none";
    } else {
      projectList[i].style.display = "flex";
    }
  }
  projectBtn.style.display = "none";
  closeProjectBtn.style.display = "flex";
  console.log("oke!");
});

closeProjectBtn.addEventListener("click", () => {
  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].style.display === "flex") {
      projectList[i].style.display = "none";
    } else {
      projectList[i].style.display = "flex";
    }
  }

  closeProjectBtn.style.display = "none";
  console.log("oke!");
});
