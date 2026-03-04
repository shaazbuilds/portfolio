// ---- Navbar scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ---- Hamburger menu ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ---- Typing animation ----
const words = ['Android Apps.', 'Flutter Apps.', 'Web Experiences.'];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typingText');

function type() {
    const current = words[wordIndex];
    if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    let speed = isDeleting ? 60 : 110;
    if (!isDeleting && charIndex === current.length) {
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }
    setTimeout(type, speed);
}
setTimeout(type, 1000);

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ---- Contact form ----
document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const subject = encodeURIComponent(document.getElementById('emailSubject').value);
    const body = encodeURIComponent(document.getElementById('emailMessage').value);
    window.location.href = `mailto:shaaz.builds@gmail.com?subject=${subject}&body=${body}`;
});
