document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButtons = document.querySelectorAll(".header__theme-toggle, .sidebar__theme-toggle"); // Incluir ambos botones
  const body = document.body;
  const header = document.querySelector(".header");
  const main = document.querySelector("main");
  const footer = document.querySelector(".footer");
  const sidebar = document.querySelector(".sidebar");
  
  // Seleccionar todos los elementos que necesitan tema oscuro
  const contentSections = document.querySelectorAll(".content-section");
  const projectCards = document.querySelectorAll(".projects__card");
  const skillsItems = document.querySelectorAll(".skills__item");
  const heroSection = document.querySelector(".hero");

  function updateIcon() {
    themeToggleButtons.forEach((button) => {
      const themeIcon = button.querySelector(".header__theme-icon, .sidebar__theme-icon");
      if (themeIcon) {
        if (body.classList.contains("body--dark-theme")) {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
          button.setAttribute("aria-label", "Cambiar a tema claro");
          button.setAttribute("title", "Cambiar a tema claro");
        } else {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
          button.setAttribute("aria-label", "Cambiar a tema oscuro");
          button.setAttribute("title", "Cambiar a tema oscuro");
        }
      }
    });
  }

  function toggleDarkTheme() {
    // Toggle body theme
    body.classList.toggle("body--dark-theme");

    // Toggle header theme
    if (header) {
      header.classList.toggle("header--dark-theme");
    }

    // Toggle main theme
    if (main) {
      main.classList.toggle("main--dark-theme");
    }

    // Toggle footer theme
    if (footer) {
      footer.classList.toggle("footer--dark-theme");
    }

    // Toggle sidebar theme
    if (sidebar) {
      sidebar.classList.toggle("sidebar--dark-theme");
    }

    // Toggle content sections theme
    contentSections.forEach(section => {
      section.classList.toggle("content-section--dark-theme");
    });

    // Toggle project cards theme
    projectCards.forEach(card => {
      card.classList.toggle("projects__card--dark-theme");
    });

    // Toggle skills items theme
    skillsItems.forEach(item => {
      item.classList.toggle("skills__item--dark-theme");
    });

    // Toggle hero theme
    if (heroSection) {
      heroSection.classList.toggle("hero--dark-theme");
    }

    updateIcon();

    // Guardar preferencia en localStorage
    localStorage.setItem(
      "theme",
      body.classList.contains("body--dark-theme") ? "dark" : "light"
    );
  }

  themeToggleButtons.forEach((themeToggle) => {
    themeToggle.addEventListener("click", toggleDarkTheme);
  });

  // Cargar tema guardado al inicializar la página
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    // Aplicar todas las clases de tema oscuro
    body.classList.add("body--dark-theme");

    if (header) {
      header.classList.add("header--dark-theme");
    }

    if (main) {
      main.classList.add("main--dark-theme");
    }

    if (footer) {
      footer.classList.add("footer--dark-theme");
    }

    if (sidebar) {
      sidebar.classList.add("sidebar--dark-theme");
    }

    contentSections.forEach(section => {
      section.classList.add("content-section--dark-theme");
    });

    projectCards.forEach(card => {
      card.classList.add("projects__card--dark-theme");
    });

    skillsItems.forEach(item => {
      item.classList.add("skills__item--dark-theme");
    });

    if (heroSection) {
      heroSection.classList.add("hero--dark-theme");
    }
  }

  updateIcon();
});

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
