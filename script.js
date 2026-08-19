(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("lights");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const storageKey = "jk-theme";

  const colors = {
    dark: "#0A1220",
    light: "#E7EDF4",
  };

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function applyTheme(theme, persist) {
    const next = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    if (themeMeta) themeMeta.setAttribute("content", colors[next]);
    if (toggle) {
      const lightsOn = next === "light";
      toggle.setAttribute("aria-pressed", String(lightsOn));
      toggle.setAttribute(
        "aria-label",
        lightsOn ? "Switch to dark theme" : "Switch to light theme"
      );
      toggle.querySelector(".lights-state").textContent = lightsOn
        ? "On"
        : "Off";
    }
    if (persist) {
      try { localStorage.setItem(storageKey, next); } catch (e) {}
    }
  }

  function initialTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  applyTheme(initialTheme(), false);

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  const media = window.matchMedia("(prefers-color-scheme: light)");
  const onSchemeChange = function (event) {
    if (localStorage.getItem(storageKey)) return;
    applyTheme(event.matches ? "light" : "dark", false);
  };
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onSchemeChange);
  } else if (typeof media.addListener === "function") {
    media.addListener(onSchemeChange);
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
