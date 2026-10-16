// Otterus2D Documentation - Debug Palette Switcher
// To permanently disable this debug switcher, either:
// 1. Change ENABLE_DEBUG_THEME_SWITCHER to false below, OR
// 2. Remove "debug_theme.js" from html_js_files in conf.py.
const ENABLE_DEBUG_THEME_SWITCHER = false;

(function () {
  if (!ENABLE_DEBUG_THEME_SWITCHER) return;

  const STORAGE_KEY = 'otterus_debug_palette';
  const THEMES = [
    { id: 'timber-estuary', name: 'Timber Estuary (Blend)' },
    { id: 'timber', name: 'Deep Timber' },
    { id: 'estuary', name: 'Estuary Mist' },
    { id: 'riverbed', name: 'Riverbed Slate' },
    { id: 'obsidian', name: 'Otter Dusk' }
  ];

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'timber-estuary';
  }

  function applyTheme(themeId) {
    document.documentElement.setAttribute('data-otterus-theme', themeId);
    localStorage.setItem(STORAGE_KEY, themeId);

    const btnText = document.getElementById('otterus-debug-theme-name');
    if (btnText) {
      const match = THEMES.find(function (t) { return t.id === themeId; });
      btnText.textContent = match ? match.name : themeId;
    }
  }

  // Apply immediately to prevent initial layout flash
  applyTheme(getSavedTheme());

  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('otterus-debug-btn')) return;

    var container = document.createElement('div');
    container.id = 'otterus-debug-container';
    container.className = 'otterus-debug-switcher';

    var button = document.createElement('button');
    button.id = 'otterus-debug-btn';
    button.type = 'button';
    button.className = 'otterus-debug-pill';
    button.title = 'Click to cycle through Otterus dark palettes (Debug Mode)';

    var label = document.createElement('span');
    label.className = 'otterus-debug-prefix';
    label.textContent = 'Theme: ';

    var themeName = document.createElement('strong');
    themeName.id = 'otterus-debug-theme-name';
    var savedId = getSavedTheme();
    var currentTheme = THEMES.find(function (t) { return t.id === savedId; }) || THEMES[0];
    themeName.textContent = currentTheme.name;

    var arrow = document.createElement('span');
    arrow.className = 'otterus-debug-arrow';
    arrow.textContent = '  [Cycle]';

    button.appendChild(label);
    button.appendChild(themeName);
    button.appendChild(arrow);

    button.addEventListener('click', function () {
      var current = getSavedTheme();
      var currentIndex = THEMES.findIndex(function (t) { return t.id === current; });
      var nextIndex = (currentIndex + 1) % THEMES.length;
      var nextTheme = THEMES[nextIndex].id;
      applyTheme(nextTheme);
    });

    container.appendChild(button);
    document.body.appendChild(container);
  });
})();
