// script.js
// Add event listener to navigation links
document.querySelectorAll('.header nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        // Add active class to clicked link
        document.querySelectorAll('.header nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});