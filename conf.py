# Configuration file for the Sphinx documentation builder.
# Otterus2D Documentation Portal

project = "Otterus2D"
copyright = "2026, CodePlanter"
author = "UMAIR MANZOOR"
release = "1.0.0"

# Extensions
extensions = [
    "sphinx_rtd_theme",
    "sphinx.ext.extlinks",
    "sphinx.ext.intersphinx",
    "sphinx_copybutton",
    "notfound.extension",
]

# Source configuration
templates_path = ["_templates"]
source_suffix = ".rst"
master_doc = "index"
language = "en"

# Files and patterns to ignore
exclude_patterns = [
    "_build",
    ".venv",
    "env",
    ".idea",
    ".vscode",
    "Thumbs.db",
    ".DS_Store",
]

# Syntax highlighting
highlight_language = "lua"
pygments_style = "monokai"

# HTML output configuration
html_theme = "sphinx_rtd_theme"
html_title = "Otterus2D Documentation"
html_static_path = ["_static"]

# Custom branding assets
# html_logo = "_static/otterus_logo.svg"
html_favicon = "_static/otterus_favicon.svg"

# Custom stylesheets and scripts
html_css_files = ["custom.css"]
html_js_files = []

html_theme_options = {
    "collapse_navigation": False,
    "sticky_navigation": True,
    "navigation_depth": 4,
    "includehidden": True,
    "titles_only": False,
    "logo_only": False,
}

html_show_sourcelink = False