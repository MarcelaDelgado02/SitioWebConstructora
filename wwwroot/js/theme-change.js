// theme-switch.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    // 1) Inicializa tema según lo guardado o preferencia del sistema
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        toggleSwitch.checked = (currentTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    }

    // 2) Función que cambia el tema y guarda la preferencia
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    // 3) Listener: se añade cuando el DOM ya existe
    toggleSwitch.addEventListener('change', switchTheme, false);
});
