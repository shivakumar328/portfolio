// year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// scroll reveal
const els = document.querySelectorAll('.section');
els.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
els.forEach(el => io.observe(el));

// nav glass intensity on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 40 ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)';
});
