// Otterus2D Documentation Theme Switcher (Mild / Dark Mode)
(function () {
  const THEME_STORAGE_KEY = 'otterus_doc_theme';

  function getSavedTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'mild';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtn = document.getElementById('otterus-theme-toggle');
    if (toggleBtn) {
      if (theme === 'dark') {
        toggleBtn.textContent = 'Dark Mode';
        toggleBtn.setAttribute('title', 'Switch to Mild Theme');
      } else {
        toggleBtn.textContent = 'Mild Theme';
        toggleBtn.setAttribute('title', 'Switch to Dark Mode');
      }
    }
  }

  // Apply immediately to avoid flash
  const initialTheme = getSavedTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  document.addEventListener('DOMContentLoaded', function () {
    // Inject the theme switcher button into the sidebar search header
    const sidebarSearch = document.querySelector('.wy-side-nav-search');
    if (sidebarSearch && !document.getElementById('otterus-theme-toggle')) {
      const container = document.createElement('div');
      container.className = 'otterus-theme-container';

      const button = document.createElement('button');
      button.id = 'otterus-theme-toggle';
      button.type = 'button';
      button.className = 'otterus-theme-btn';

      button.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'mild' : 'dark';
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
      });

      container.appendChild(button);

      // Place right after project title in sidebar
      const projectTitle = sidebarSearch.querySelector('a');
      if (projectTitle && projectTitle.nextSibling) {
        sidebarSearch.insertBefore(container, projectTitle.nextSibling);
      } else {
        sidebarSearch.appendChild(container);
      }

      applyTheme(getSavedTheme());
    }
  });
})();
