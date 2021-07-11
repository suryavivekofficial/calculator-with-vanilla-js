const buttons = document.querySelectorAll("[data-theme]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "theme-1") {
      document.body.className = ``;
      document.body.classList.add(`theme-1`);
    } else if (button.id === "theme-2") {
      document.body.className = ``;
      document.body.classList.add(`theme-2`);
    } else if (button.id === "theme-3") {
      document.body.className = ``;
      document.body.classList.add(`theme-3`);
    }
  });
});
