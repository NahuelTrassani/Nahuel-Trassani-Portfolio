document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButtons = document.querySelectorAll(".header__theme-toggle"); // Selecciona todos los botones
  const body = document.body;
  const header = document.querySelector(".header"); // Cambiado a clase BEM
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const sidebar = document.querySelector(".sidebar"); // Selecciona el sidebar BEM

  function updateIcon() {
    themeToggleButtons.forEach((button) => {
      const themeIcon = button.querySelector(".header__theme-icon");
      if (themeIcon) {
        if (body.classList.contains("dark-theme")) {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
          button.setAttribute("aria-label", "Cambiar a tema claro");
          button.setAttribute("title", "Cambiar a tema claro");
        } else {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
          button.setAttribute("aria-label", "Cambiar a tema oscuro");
          button.setAttribute("title", "Cambiar a tema oscuro");
        }
      }
    });
  }

  themeToggleButtons.forEach((themeToggle) => {
    // Agrega listener a cada botón
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-theme");

      // Aplicar tema oscuro al header (usando clase BEM)
      if (header) {
        header.classList.toggle("header__dark-theme");
      }

      // Aplicar tema oscuro al main
      if (main) {
        main.classList.toggle("dark-theme");
      }

      // Aplicar tema oscuro al footer
      if (footer) {
        footer.classList.toggle("dark-theme");
      }

      // Aplicar tema oscuro al sidebar
      if (sidebar) {
        sidebar.classList.toggle("sidebar__dark-theme");
      }

      updateIcon();

      // Guardar preferencia en localStorage
      localStorage.setItem(
        "theme",
        body.classList.contains("dark-theme") ? "dark" : "light"
      );
    });
  });

  // Cargar tema guardado al inicializar la página
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");

    if (header) {
      header.classList.add("header__dark-theme");
    }

    if (main) {
      main.classList.add("dark-theme");
    }

    if (footer) {
      footer.classList.add("dark-theme");
    }

    if (sidebar) {
      sidebar.classList.add("sidebar__dark-theme");
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
