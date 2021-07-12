const buttons = document.querySelectorAll("[data-theme]");
const theme = localStorage.getItem(`theme`);

if (theme) {
  document.body.className = ``;
  document.body.classList.add(theme);
  buttons.forEach((button) => {
    if (button.id === theme) {
      button.checked = true;
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.className = ``;
    document.body.classList.add(button.id);
    localStorage.setItem(`theme`, `${button.id}`);
  });
});
