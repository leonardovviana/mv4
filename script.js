
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('div[id]');

  window.addEventListener('scroll', function() {
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 50) {
        currentSection = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.remov-e('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
});
