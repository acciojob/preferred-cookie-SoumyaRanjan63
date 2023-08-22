//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const customizationForm = document.getElementById("customization-form");

  // Load preferences from cookies
  const cookies = document.cookie.split("; ");
  cookies.forEach(cookie => {
    const [name, value] = cookie.split("=");
    if (name === "fontSize") {
      fontSizeInput.value = value;
      document.documentElement.style.setProperty("--fontsize", `${value}px`);
    } else if (name === "fontColor") {
      fontColorInput.value = value;
      document.documentElement.style.setProperty("--fontcolor", value);
    }
  });

  customizationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColor);

    // Store preferences in cookies
    document.cookie = `fontSize=${fontSize}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `fontColor=${fontColor}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  });
});
