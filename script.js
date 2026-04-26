// Handle mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Popup Modal Logic
const interactiveCards = document.querySelectorAll('.interactive-card');
const modalOverlay = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModalBtn = document.getElementById('closeModal');

// Open modal when a card is clicked
interactiveCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-popup-title');
        const desc = card.getAttribute('data-popup-desc');

        modalTitle.textContent = title;
        modalDesc.innerHTML = desc; // using innerHTML to parse <br> and <b>

        modalOverlay.classList.add('active');
    });
});

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Close modal when clicking outside the box
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});
