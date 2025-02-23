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

// ==========================================

// // Select all menu items
// const menuItems = document.querySelectorAll(".item_menu_mobile");

// menuItems.forEach((item) => {
//   item.addEventListener("click", function (event) {
//     event.preventDefault();

//     // Get the target submenu ID
//     const target = this.getAttribute("data-target");
//     const submenu = document.getElementById(target);

//     // Close all other submenus
//     document.querySelectorAll(".submenu").forEach((sub) => {
//       if (sub !== submenu) {
//         sub.classList.remove("active");
//       }
//     });

//     // Toggle the current submenu
//     submenu.classList.toggle("active");
//   });
// });
const menuItems = document.querySelectorAll(".item_menu_mobile");

menuItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the target submenu ID
    const target = this.getAttribute("data-target");
    const submenu = document.getElementById(target);

    // Check if the current submenu is active (visible)
    const isActive = submenu.classList.contains("active");

    // Close all other submenus and reset their icons
    document.querySelectorAll(".submenu").forEach((sub) => {
      if (sub !== submenu) {
        sub.classList.remove("active");

        // Remove the rotated class from the icon of the other menu items
        const otherItem = sub.closest(".item_menu_mobile");
        if (otherItem) {
          otherItem.classList.remove("rotated");
        }
      }
    });

    // If the current submenu is not active (it was hidden), open it and add "rotated" class
    if (!isActive) {
      submenu.classList.add("active");
      this.classList.add("rotated"); // Add "rotated" class to the current menu item
    } else {
      submenu.classList.remove("active");
      this.classList.remove("rotated"); // Remove "rotated" class if the submenu is hidden
    }
  });
});
