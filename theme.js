const buttons = document.querySelectorAll("[data-theme]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "theme-1") {
      console.log("theme 1");
    } else if (button.id === "theme-2") {
      console.log("theme 2");
    } else if (button.id === "theme-3") {
      console.log(`theme 3`);
    }
  });
});
