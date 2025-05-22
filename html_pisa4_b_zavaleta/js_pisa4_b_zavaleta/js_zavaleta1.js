(function () {
    'use strict';

    const THEME_STORAGE_KEY = 'themePreferencePisa4Zavaleta';

    const getStoredTheme = () => localStorage.getItem(THEME_STORAGE_KEY);
    const setStoredTheme = theme => localStorage.setItem(THEME_STORAGE_KEY, theme);

    const applyTheme = (theme) => {
        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    };

    const updateActiveButton = (selectedTheme) => {
        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active');
            element.setAttribute('aria-pressed', 'false');
            if (element.getAttribute('data-bs-theme-value') === selectedTheme) {
                element.classList.add('active');
                element.setAttribute('aria-pressed', 'true');
            }
        });
    };

    // Inicializar tema al cargar la página
    const preferredTheme = getStoredTheme() || 'auto'; // Default to 'auto'
    applyTheme(preferredTheme);
    updateActiveButton(preferredTheme);

    // Event listener para cambios en la preferencia del sistema operativo (si 'auto' está seleccionado)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const currentStoredTheme = getStoredTheme();
        if (currentStoredTheme === 'auto' || !currentStoredTheme) {
            applyTheme('auto');
            // No es necesario actualizar el botón si ya está en 'auto'
        }
    });

    // Event listeners para los botones del dropdown
    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const themeValue = toggle.getAttribute('data-bs-theme-value');
            setStoredTheme(themeValue);
            applyTheme(themeValue);
            updateActiveButton(themeValue);
        });
    });
})();