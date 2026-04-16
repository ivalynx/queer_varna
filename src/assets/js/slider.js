const track = document.getElementById('slider-track');
const dots = document.querySelectorAll('.slider__dot');
track.addEventListener('scroll', () => {
  const scrollPosition = track.scrollLeft;
  const slideWidth = track.offsetWidth;
  const activeIndex = Math.round(scrollPosition / slideWidth);
  dots.forEach((dot, index) => {
    dot.classList.toggle('slider__dot--active', index === activeIndex);
  });
});
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    track.scrollTo({
      left: track.offsetWidth * index,
      behavior: 'smooth'
    });
  });
});