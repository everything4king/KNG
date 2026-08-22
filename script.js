/* ================================
   KNG WEBSITE SCRIPT
   ================================ */

/* ---------- SCROLL REVEAL ---------- */

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

reveals.forEach(el => observer.observe(el));


/* ---------- MOBILE MENU ---------- */

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


/* ---------- HERO LOGO EFFECT ---------- */

const heroLogo = document.querySelector('.hero-logo');

window.addEventListener('scroll', () => {
  if (heroLogo) {
    const y = Math.min(window.scrollY, 500);
    heroLogo.style.filter = `blur(${y / 220}px)`;
  }
}, {
  passive: true
});


/* =================================
   SUPABASE
   ================================= */

/*
   IMPORTANT:
   Replace the two values below with the
   Supabase Project URL and Publishable Key
   from your Supabase project.
*/

const SUPABASE_URL = 'https://fnpmsbjcfyhxxmuducba.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_m39Aa3I3rqmYildm1gE3KA_8s3LmlUB';


/* Create Supabase client */

let kngSupabase = null;

if (
  window.supabase &&
  SUPABASE_URL !== 'PASTE_YOUR_SUPABASE_URL_HERE' &&
  SUPABASE_PUBLISHABLE_KEY !== 'PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE'
) {
  kngSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log('KNG Supabase connected successfully.');
} else {
  console.warn(
    'KNG Supabase is not configured yet. Add your Supabase URL and Publishable Key.'
  );
}


/* Make Supabase available to the rest of the website */

window.kngSupabase = kngSupabase;
