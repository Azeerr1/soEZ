let darkMode = sessionStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {

  document.body.classList.add('dark-theme');


  sessionStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('dark-theme');

  sessionStorage.setItem('darkMode', 'disabled');
}


if (darkMode === 'enabled') {
  enableDarkMode();

}

if (darkMode === 'disabled') {
  disableDarkMode();

}

darkModeToggle.addEventListener('click', () => {

  darkMode = sessionStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();

  } else {
    disableDarkMode();

  }
});
