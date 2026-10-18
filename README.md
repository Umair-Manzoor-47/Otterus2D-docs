# Otterus2D Documentation Repository

Welcome to the official documentation source repository for the [Otterus2D](https://github.com/Umair-Manzoor-47/Otterus2D) game engine.

This repository is built using **Sphinx** and the **Read the Docs** Sphinx theme, following the structure and conventions of the official Godot documentation repository.

---

## Documentation Structure

The documentation follows the **Diataxis framework**:

```text
Otterus2D-docs/
├── getting_started/    <-- Introduction and high-level architectural concepts
├── tutorials/          <-- [Tutorials] Step-by-step hands-on guides for newcomers
├── architecture/       <-- [Explanation] Subsystem boundaries, lifecycle, and design rules
├── reference/          <-- [Reference] API specifications, ECS components, and Lua functions
├── how-to/             <-- [How-To] Recipes and solutions for targeted gameplay problems
├── media/              <-- Vector SVGs, diagrams, and media assets
├── conf.py             <-- Sphinx configuration file
├── index.rst           <-- Master Table of Contents
├── make.bat            <-- Windows build script
├── Makefile            <-- Linux/macOS build script
└── requirements.txt    <-- Python dependencies
```

---

## Building Locally

### 1. Prerequisites
* Python 3.10+
* Git

### 2. Setup Virtual Environment
```bash
python -m venv .venv
```

Activate the environment:
* **Windows (PowerShell):**
  ```powershell
  .\.venv\Scripts\Activate.ps1
  ```
* **Linux / macOS:**
  ```bash
  source .venv/bin/activate
  ```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Build the HTML Pages
* **Windows:**
  ```powershell
  .\make.bat html
  ```
  *(Note: `make.bat` will automatically locate your `.venv/Scripts/sphinx-build.exe` if present).*

* **Linux / macOS:**
  ```bash
  make html
  ```

The generated HTML files will be available inside `_build/html/index.html`. Open it in any web browser to view your documentation.
