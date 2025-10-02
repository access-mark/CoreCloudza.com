// mobile nav toggle + year stamp
document.addEventListener('DOMContentLoaded', () => {
  const t = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (t && nav) t.addEventListener('click', () => {
    const exp = t.getAttribute('aria-expanded') === 'true';
    t.setAttribute('aria-expanded', String(!exp));
    nav.classList.toggle('open');
  });
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
