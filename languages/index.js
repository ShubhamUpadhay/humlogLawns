function setLanguage(lang) {
  fetch(`languages/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      for (const key in data) {
        const element = document.getElementById(key);
        if (element) {
          element.innerText = data[key];
        }
      }
    })
    .catch((error) => console.error("Error loading language file:", error));
}
// Set default language on page load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("english"); // or 'hi' for Hindi as the default
});
