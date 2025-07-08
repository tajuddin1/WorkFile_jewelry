
window.addEventListener("load", () => {
  // Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 350);
  }
});

// Toggle mobile menu
const toggleBtn = document.getElementById("isToggle");
const navMenu = document.getElementById("navigation");

toggleBtn?.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  navMenu.classList.toggle("open");

  if (!navMenu.classList.contains("open")) {
    document.querySelectorAll(".submenu.open").forEach((menu) => {
      menu.classList.remove("open");
    });
  }
});

document.querySelectorAll(".has-submenu > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const submenu = link.nextElementSibling;
    if (!submenu || !submenu.classList.contains("submenu")) return;

    e.preventDefault();

    // Close all other submenus and remove active classes
    document.querySelectorAll(".submenu.open").forEach((menu) => {
      if (menu !== submenu) menu.classList.remove("open");
    });

    document
      .querySelectorAll(".has-submenu > a.active")
      .forEach((activeLink) => {
        if (activeLink !== link) activeLink.classList.remove("active");
      });

    // Toggle current submenu and active state
    submenu.classList.toggle("open");
    link.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const scrollTop = window.scrollY;

  if (scrollTop > 100) {
    header.classList.add("sticky");
  } else if (scrollTop <= 0) {
    header.classList.remove("sticky");
  }
});
