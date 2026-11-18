const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = String(new Date().getFullYear());
// Contact is intentionally inactive until the owner supplies a real email address.
document.querySelector('a[href^="mailto:CONTACT_EMAIL_HERE"]').addEventListener('click', (event) => {
  event.preventDefault();
  alert('Contact email will be available soon.');
});
