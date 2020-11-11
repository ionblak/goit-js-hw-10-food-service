const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
console.log(bodyRef);

inputRef.addEventListener('change', chengeTheme);

function chengeTheme() {
  bodyRef.classList.add(Theme.DARK);
}
