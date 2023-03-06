const toggle = document.getElementById("toggle");
const menu = document.getElementById("mobileMenu");
const menuBtn = menu.getElementsByTagName("button");
const listMenu = menu.querySelector(".mobileBtn button");

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

// Hide menu

for (var i = 0; i < menuBtn.length; i++) {
  menuBtn[i].onclick = myfunction;
}

function myfunction() {
  menu.style.display = "none";
}

// Hide menu

// listMenu.addEventListener("click", (e) => {
//   // menu.style.display = "none";
//   for (let i = 0; i < menuBtn.length; i++) {
//     menuBtn[i].style.display = "none";
//   }
//   console.log("okee!");
// });

// listMenu.addEventListener("click", () => {
//   for (let i = 0; i < listMenu.length; i++) {
//     if (menu[i].style.display === "block") {
//       menu[i].style.display = "none";
//     } else {
//       menu[i].style.display = "block";
//     }
//     console.log("oke!" + i);
//   }
// });

// What i do button

const btnWhatIdo = document.getElementById("show-what-i-do-btn");
const menuWhatIdo = document.getElementById("What_i_Do");
const iconWhatIdo = btnWhatIdo.querySelector("img");

btnWhatIdo.addEventListener("click", () => {
  if (menuWhatIdo.style.display === "flex") {
    menuWhatIdo.style.display = "none";
  } else {
    menuWhatIdo.style.display = "flex";
  }

  iconWhatIdo.classList.toggle("rotate-180");
});

iconWhatIdo.addEventListener("click", () => {
  console.log("icon");
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
  projectBtn.style.display = "flex";
  closeProjectBtn.style.display = "none";
  console.log("oke!");
});
