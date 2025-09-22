// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

// FAQ accordion (accessible)
const accordionTriggers = Array.from(document.querySelectorAll('.accordion-trigger'));
accordionTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    const panel = trigger.nextElementSibling;
    if (panel) {
      if (expanded) {
        panel.hidden = true;
      } else {
        panel.hidden = false;
      }
    }
  });
});

// Simple form handler (demo only)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    alert(`Thanks ${name || 'there'}! We will be in touch shortly.`);
    contactForm.reset();
  });
}


