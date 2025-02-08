// Gestion du mode sombre
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', () => {
  document.body.setAttribute('data-theme',
    darkModeToggle.checked ? 'dark' : 'light');
});

// Gestion du menu burger
const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
});

let ticking = false;

function handleParallax() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const parallaxSection = document.querySelector('.parallax-section');
      const parallaxBg = document.querySelector('.parallax-bg');

      const sectionRect = parallaxSection.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionBottom > 0) {
        const scrollPercentage = (windowHeight - sectionTop) / (windowHeight + sectionRect.height);
        const moveAmount = 200 - scrollPercentage * 400;
        parallaxBg.style.transform = `translateY(${moveAmount}px)`;
      }

      ticking = false;
    });

    ticking = true;
  }
}

window.addEventListener('scroll', handleParallax, { passive: true });
window.addEventListener('load', handleParallax);
window.addEventListener('resize', handleParallax);

// Sons pour les interactions (bonus)
const createAudioFeedback = () => {
  const audio = new Audio();
  audio.src = 'path/to/your/sound.mp3'; // Ajoutez votre fichier son
  return audio;
};

const hoverSound = createAudioFeedback();
const clickSound = createAudioFeedback();

// Ajout des effets sonores aux boutons
document.querySelectorAll('.animated-btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
  button.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
