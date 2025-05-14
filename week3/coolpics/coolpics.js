// coolpics.js

document.getElementById('menuButton').addEventListener('click', function() {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
