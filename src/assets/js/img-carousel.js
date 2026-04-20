document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.img-carousel');
  const track = document.querySelector('.img-carousel__track');
  
  if (!carousel || !track) return;

  const initCarousel = () => {
    const originalItems = Array.from(track.children).filter(item => !item.dataset.clone);
    const trackWidth = track.scrollWidth;
    const containerWidth = carousel.offsetWidth;

    if (trackWidth > containerWidth) {
      if (track.children.length === originalItems.length) {
        originalItems.forEach(item => {
          const clone = item.cloneNode(true);
          clone.dataset.clone = "true";
          track.appendChild(clone);
        });
      }
      
      carousel.removeEventListener('mouseenter', startScroll);
      carousel.removeEventListener('mouseleave', stopScroll);
      carousel.addEventListener('mouseenter', startScroll);
      carousel.addEventListener('mouseleave', stopScroll);

    } else {
      carousel.classList.remove('is-scrolling');
      track.style.justifyContent = 'center';
      track.style.width = '100%';
    }
  };
  function startScroll() {
    carousel.classList.add('is-scrolling');
  }

  function stopScroll() {
    carousel.classList.remove('is-scrolling');
  }

  initCarousel();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initCarousel, 250);
  });
});