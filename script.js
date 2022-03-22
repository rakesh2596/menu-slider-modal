const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle navigation extends 
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav')
);

// Show modal when clicked on signup
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal by clicking on x.
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal when clicking anywhere in the window
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
