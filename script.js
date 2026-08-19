const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.right = '7vw';
    nav.style.flexDirection = 'column';
    nav.style.padding = '1.4rem';
    nav.style.background = '#080808';
    nav.style.border = '1px solid rgba(255,255,255,.12)';
  }
});

const heroLogo = document.querySelector('.hero-logo');
window.addEventListener('scroll', () => {
  if (heroLogo) {
    const y = Math.min(window.scrollY, 500);
    heroLogo.style.filter = `blur(${y/220}px)`;
  }
}, {passive:true});
