// Prevent context menu on images (optional UX touch for production feel)
document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

// Preload image to avoid flash
const link = document.createElement('link');
link.rel = 'preload';
link.as = 'image';
link.href = 'proximamente.png';
document.head.appendChild(link);