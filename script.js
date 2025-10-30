// script.js - minimal interactions
document.addEventListener('DOMContentLoaded', function(){
  // Simple active link highlight on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  function onScroll(){
    let idx = sections.length;
    while(--idx && window.scrollY + 120 < sections[idx].offsetTop) {}
    navLinks.forEach(link=>link.classList.remove('active'));
    const id = sections[idx].id;
    const active = document.querySelector('nav a[href="#'+id+'"]');
    if(active) active.classList.add('active');
  }
  onScroll();
  window.addEventListener('scroll', onScroll);
});