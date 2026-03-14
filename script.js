// --- BUBBLE CURSOR ---
const cursor = document.getElementById('bubble-cursor');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverables = document.querySelectorAll('a, .glass, .floating-card, .btn-launch, .menu-toggle');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.background = 'rgba(255, 45, 149, 0.2)';
            cursor.style.border = '1px solid #ff2d95';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '25px';
            cursor.style.height = '25px';
            cursor.style.background = 'radial-gradient(circle at 30% 30%, #fff, #ff2d95)';
            cursor.style.border = 'none';
        });
    });
}

// --- REVEAL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- MOBILE MENU LOGIC ---
const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-cards a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});

// --- SMOOTH SCROLLING ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});