document.addEventListener('DOMContentLoaded', function () {

    const lazyItems = document.querySelectorAll('.lazy-item img[data-src]');
  
    const observer = new IntersectionObserver((entries, observe) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            const src = lazyImage.getAttribute('data-src');
            lazyImage.setAttribute('src', src);
            lazyImage.classList.add('loaded');
            observe.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      });
  
    lazyItems.forEach((item) => {
      observer.observe(item);
    });
  });
  