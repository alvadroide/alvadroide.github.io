// ================= EFECTO LLUVIA MATRIX =================
const canvas = document.getElementById('matrix-canvas');

if (canvas) {
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Caracteres alfanuméricos y símbolos de ciberseguridad / consola
  const characters = '01ABCDEF{}[];:/*+-<>~!=#_010101';
  const fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = [];

  function initDrops() {
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }
  }
  initDrops();
  window.addEventListener('resize', initDrops);

  function drawMatrix() {
    // Fondo semitransparente para generar el efecto de estela
    ctx.fillStyle = 'rgba(6, 9, 8, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff88';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = characters.charAt(Math.floor(Math.random() * characters.length));
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 45);
}

// ================= NAVEGACIÓN ACTIVA =================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, main');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSectionId = '';
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
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
