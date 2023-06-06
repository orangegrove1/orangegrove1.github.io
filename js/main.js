const btnElDark = document.querySelector(".toggle-dark-mode-on");

btnElDark.addEventListener("click", darkModeON);

const darkColorScheme = `linear-gradient(to bottom right, rgb(54, 22, 22), rgb(68, 39, 0));`;

function darkModeON() {
  document.body.style.background = darkColorScheme;
}
