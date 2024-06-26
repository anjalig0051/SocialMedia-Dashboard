
  /* Dark Mode */

 // Select the button
const btn = document.getElementById("toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "src/css/style.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "src/css/dark-theme.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "src/css/style.css";
  }
});