// coolpics.js

// Menu toggle logic
const menuButton = document.getElementById('menuButton');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', function() {
  nav.classList.toggle('hide');
});

// Handle window resize
function handleResize() {
  if (window.innerWidth > 1000) {
    nav.classList.remove('hide');
  } else {
    nav.classList.add('hide');
  }
}
window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);

// Modal image viewer
const gallery = document.querySelector('.gallery');
let modal;

gallery.addEventListener('click', function(event) {
  const img = event.target.closest('img');
  if (!img) return;

  // Create dialog/modal
  modal = document.createElement('dialog');
  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  const fullSrc = src.replace('-sm.jpeg', '-full.jpeg');
  modal.innerHTML = `<img src="${fullSrc}" alt="${alt}"><button class='close-viewer'>X</button>`;
  document.body.appendChild(modal);
  modal.showModal();

  // Close button
  modal.querySelector('.close-viewer').addEventListener('click', () => {
    modal.close();
  });

  // Close when clicking outside image
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  // Remove modal from DOM when closed
  modal.addEventListener('close', () => {
    modal.remove();
  });
});
