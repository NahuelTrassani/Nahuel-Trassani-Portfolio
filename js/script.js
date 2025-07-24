document.addEventListener("DOMContentLoaded", function () {
  const headerThemeToggle = document.querySelector(".header__toggle-theme");
  const dropdownThemeToggle = document.querySelector(".dropdown__theme-item");

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
    // Actualizar ícono del sidebar
    if (headerThemeToggle) {
      const sidebarThemeIcon = headerThemeToggle.querySelector(
        ".sidebar__theme-icon"
      );
      if (sidebarThemeIcon) {
        if (body.classList.contains("body--dark-theme")) {
          sidebarThemeIcon.classList.remove("fa-moon");
          sidebarThemeIcon.classList.add("fa-sun");
          headerThemeToggle.setAttribute("aria-label", "Cambiar a tema claro");
          headerThemeToggle.setAttribute("title", "Cambiar a tema claro");
        } else {
          sidebarThemeIcon.classList.remove("fa-sun");
          sidebarThemeIcon.classList.add("fa-moon");
          headerThemeToggle.setAttribute("aria-label", "Cambiar a tema oscuro");
          headerThemeToggle.setAttribute("title", "Cambiar a tema oscuro");
        }
      }
    }

    // Actualizar ícono del dropdown
    if (dropdownThemeToggle) {
      const dropdownThemeIcon =
        dropdownThemeToggle.querySelector(".dropdown__icon");
      const dropdownTitle =
        dropdownThemeToggle.querySelector(".dropdown__title");
      const dropdownDescription = dropdownThemeToggle.querySelector(
        ".dropdown__description"
      );

      if (dropdownThemeIcon) {
        if (body.classList.contains("body--dark-theme")) {
          dropdownThemeIcon.classList.remove("fa-moon");
          dropdownThemeIcon.classList.add("fa-sun");
          if (dropdownTitle) dropdownTitle.textContent = "Tema Claro";
          if (dropdownDescription)
            dropdownDescription.textContent = "Cambiar a modo claro";
          dropdownThemeToggle.setAttribute(
            "aria-label",
            "Cambiar a tema claro"
          );
        } else {
          dropdownThemeIcon.classList.remove("fa-sun");
          dropdownThemeIcon.classList.add("fa-moon");
          if (dropdownTitle) dropdownTitle.textContent = "Tema Oscuro";
          if (dropdownDescription)
            dropdownDescription.textContent = "Cambiar a modo oscuro";
          dropdownThemeToggle.setAttribute(
            "aria-label",
            "Cambiar a tema oscuro"
          );
        }
      }
    }
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
    contentSections.forEach((section) => {
      section.classList.toggle("content-section--dark-theme");
    });

    // Toggle project cards theme
    projectCards.forEach((card) => {
      card.classList.toggle("projects__card--dark-theme");
    });

    // Toggle skills items theme
    skillsItems.forEach((item) => {
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

  // Event listeners para los botones de tema
  if (headerThemeToggle) {
    headerThemeToggle.addEventListener("click", toggleDarkTheme);
  }

  if (dropdownThemeToggle) {
    dropdownThemeToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleDarkTheme();

      // Cerrar el dropdown después de cambiar el tema
      const dropdown = document.querySelector(".dropdown");
      if (dropdown) {
        dropdown.classList.remove("dropdown--show");
      }
    });
  }

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

    contentSections.forEach((section) => {
      section.classList.add("content-section--dark-theme");
    });

    projectCards.forEach((card) => {
      card.classList.add("projects__card--dark-theme");
    });

    skillsItems.forEach((item) => {
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

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown__toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const dropdown = this.closest(".dropdown");
      const dropdownId = this.getAttribute("data-dropdown");

      // Cerrar otros dropdowns
      document.querySelectorAll(".dropdown").forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("dropdown--show");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("dropdown--show");
    });
  });

  // Cerrar dropdown al hacer click fuera
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.classList.remove("dropdown--show");
      });
    }
  });

  // Cerrar dropdown con Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.classList.remove("dropdown--show");
      });
    }
  });

  // Manejar clicks en items del dropdown (excepto el tema que ya está manejado arriba)
  document
    .querySelectorAll(".dropdown__item:not(.dropdown__theme-item)")
    .forEach((item) => {
      item.addEventListener("click", function (e) {
        // Cerrar el dropdown al hacer click en un item de navegación
        const dropdown = this.closest(".dropdown");
        if (dropdown) {
          dropdown.classList.remove("dropdown--show");
        }
      });
    });
});

document.querySelectorAll(".skills__item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.classList.add("flipped");
  });

  item.addEventListener("mouseleave", function () {
    this.classList.remove("flipped");
  });
});
