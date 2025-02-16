window.addEventListener("load", () => {
  const content = document.querySelector(".content");
  content.classList.add("fade-in");
});

const div1 = document.querySelector(".menu_icon");
const div2 = document.querySelector(".menu_mobile");
const div3 = document.querySelector(".menu_mobile_icon");

div1.addEventListener("click", () => {
  div2.style.display = "flex";
});

div3.addEventListener("click", () => {
  div2.style.display = "none";
});

function checkScreenSize() {
  if (window.innerWidth > 768) {
    div2.style.display = "none";
  } else {
  }
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);
