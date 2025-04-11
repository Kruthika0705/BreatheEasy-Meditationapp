document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const videos = document.querySelectorAll('.video-container');
  
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        const selected = btn.getAttribute('data-category');
        videos.forEach(video => {
          if (selected === 'all' || video.getAttribute('data-category') === selected) {
            video.style.display = 'block';
          } else {
            video.style.display = 'none';
          }
        });
      });
    });
  });
  