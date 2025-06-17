document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButtons = document.querySelectorAll(".theme-toggle-button"); // Selecciona todos los botones
    const body = document.body;
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const menuList = document.querySelector(".menu-list");
    const sidebar = document.querySelector(".sidebar"); // Selecciona el sidebar

    function updateIcon() {
        themeToggleButtons.forEach(button => {
            const themeIcon = button.querySelector("#theme-icon") || button.querySelector("#theme-icon-header");
            if (themeIcon) {
                if (body.classList.contains("dark-theme")) {
                    themeIcon.classList.remove("fa-sun");
                    themeIcon.classList.add("fa-moon");
                    button.setAttribute("aria-label", "Cambiar a tema claro");
                } else {
                    themeIcon.classList.remove("fa-moon");
                    themeIcon.classList.add("fa-sun");
                    button.setAttribute("aria-label", "Cambiar a tema oscuro");
                }
            }
        });
    }

    themeToggleButtons.forEach(themeToggle => { // Agrega listener a cada botón
        themeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-theme");
            header.classList.toggle("dark-theme");
            main.classList.toggle("dark-theme");
            footer.classList.toggle("dark-theme");
            if (menuList) {
                menuList.classList.toggle("dark-theme");
            }
            if (sidebar) {  
                sidebar.classList.toggle("dark-theme");
            }
            updateIcon();

            localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
        });
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        header.classList.add("dark-theme");
        main.classList.add("dark-theme");
        footer.classList.add("dark-theme");
        if (menuList) {
            menuList.classList.add("dark-theme");
        }
        if (sidebar) { // Aplica el tema al sidebar al cargar
            sidebar.classList.add("dark-theme");
        }
    }
    updateIcon();
});