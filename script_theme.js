const btn = document.getElementById('dark');
const theme = document.querySelector('#theme-link');

btn.addEventListener('click', function () {
  if (theme.getAttribute('href') == 'style.css') {
    theme.href = 'style_theme.css';
  } else {
    theme.href = 'style.css';
  }
});
