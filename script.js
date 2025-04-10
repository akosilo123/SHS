// DOM Elements
const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Toggle popup visibility
loginBtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});

// Switch between login/register forms
registerLink?.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink?.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Basic form validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your validation logic here
        alert('Form submitted (demo)');
    });
});

// Fix for any existing errors
window.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded successfully');
});
