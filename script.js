// ── Mobile navigation toggle ─────────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ── Smooth scrolling for navigation links (hash only) ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ── Popup Modal Logic ─────────────────────────────────────────────────────────
const interactiveCards = document.querySelectorAll('.interactive-card');
const modalOverlay     = document.getElementById('infoModal');
const modalTitle       = document.getElementById('modalTitle');
const modalDesc        = document.getElementById('modalDesc');
const closeModalBtn    = document.getElementById('closeModal');

interactiveCards.forEach(card => {
    card.addEventListener('click', () => {
        modalTitle.textContent = card.getAttribute('data-popup-title');
        modalDesc.innerHTML    = card.getAttribute('data-popup-desc');
        modalOverlay.classList.add('active');
    });
});

closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

// ── 1. Typing animation ───────────────────────────────────────────────────────
const typingEl   = document.getElementById('typingText');
const typingCursor = document.querySelector('.typing-cursor');
const fullText   = 'Intelligent Tea Quality Assessment Platform';
let   charIndex  = 0;

function typeChar() {
    if (charIndex < fullText.length) {
        typingEl.textContent += fullText[charIndex];
        charIndex++;
        setTimeout(typeChar, 55);           // speed: 55ms per character
    } else {
        // Hide blinking cursor after typing completes (optional: keep it)
        setTimeout(() => typingCursor.style.opacity = '0', 800);
    }
}

// Start after a short delay so the page feels loaded
setTimeout(typeChar, 400);

// ── 2. Scroll progress bar ────────────────────────────────────────────────────
const progressBar = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';

    // Back-to-top visibility
    backToTopBtn.classList.toggle('visible', scrollTop > 400);
}, { passive: true });

// ── 3. Back-to-top button ─────────────────────────────────────────────────────
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
