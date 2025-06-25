document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButtons = document.querySelectorAll(".header__theme-toggle"); // Selecciona todos los botones
    const body = document.body;
    const header = document.querySelector(".header"); // Cambiado a clase BEM
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const menuList = document.querySelector(".menu-list");
    const sidebar = document.querySelector(".sidebar"); // Selecciona el sidebar

    function updateIcon() {
        themeToggleButtons.forEach(button => {
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

    themeToggleButtons.forEach(themeToggle => { // Agrega listener a cada botón
        themeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-theme");
            
            // Aplicar tema oscuro al header (usando clase BEM)
            if (header) {
                header.classList.toggle("dark-theme");
            }
            
            // Aplicar tema oscuro al main
            if (main) {
                main.classList.toggle("dark-theme");
            }
            
            // Aplicar tema oscuro al footer
            if (footer) {
                footer.classList.toggle("dark-theme");
            }
            
            // Aplicar tema oscuro al menu list (si existe)
            if (menuList) {
                menuList.classList.toggle("dark-theme");
            }
            
            // Aplicar tema oscuro al sidebar
            if (sidebar) {  
                sidebar.classList.toggle("dark-theme");
            }
            
            updateIcon();

            // Guardar preferencia en localStorage
            localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
        });
    });

    // Cargar tema guardado al inicializar la página
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        
        if (header) {
            header.classList.add("dark-theme");
        }
        
        if (main) {
            main.classList.add("dark-theme");
        }
        
        if (footer) {
            footer.classList.add("dark-theme");
        }
        
        if (menuList) {
            menuList.classList.add("dark-theme");
        }
        
        if (sidebar) {
            sidebar.classList.add("dark-theme");
        }
    }
    
    updateIcon();
});