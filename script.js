// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
});

// Form Validation for Contact Form
document.getElementById("contact-form")?.addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the form from submitting
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Simple validation check
    if (name && email && message) {
        document.getElementById("form-feedback").textContent = "Thank you for reaching out!";
        document.getElementById("form-feedback").style.color = "green";
    } else {
        document.getElementById("form-feedback").textContent = "Please fill out all fields.";
        document.getElementById("form-feedback").style.color = "red";
    }
});

// Scroll Animations for Elements
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.fade').forEach(section => {
    observer.observe(section);
});
