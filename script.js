window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, main');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSectionId = '';
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      const id = section.getAttribute('id');
      if (id) {
        currentSectionId = id;
      }
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});
