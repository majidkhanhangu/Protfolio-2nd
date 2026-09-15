/* =====================================================
   script.js — portfolio interactivity
   ===================================================== */

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
});

// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Contact form ----
// NOTE: This form currently only validates and shows a confirmation message.
// To actually send messages, connect it to a backend endpoint or a service
// like Formspree (https://formspree.io) or EmailJS (https://emailjs.com):
//   1. Replace the fetch URL below with your endpoint / EmailJS call.
//   2. Remove the setTimeout "fake success" block once real sending works.
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    formMsg.className = 'form-msg';

    if (!name || !email || !subject || !message) {
        formMsg.textContent = 'Please fill in every field before sending.';
        formMsg.classList.add('error', 'show');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMsg.textContent = 'Please enter a valid email address.';
        formMsg.classList.add('error', 'show');
        return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // --- Replace this block with a real request once a backend/service is wired up ---
    setTimeout(() => {
        formMsg.textContent = "Thanks — your message has been sent. I'll get back to you soon.";
        formMsg.classList.add('success', 'show');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }, 600);
    // --- end replaceable block ---
});
