window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sidebar').classList.add('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
});

    document.querySelectorAll('.content, .project1, .project2').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.5}s`;
    observer.observe(el);
});