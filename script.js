// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle mobile menu visibility
if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked (for better UX)
    navbar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) { // Ensure it's an anchor link
            e.preventDefault();
            const targetID = href; // ID of the target section
            const targetSection = document.querySelector(targetID);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form inputs
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Simple email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Placeholder for actual submission logic
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Reset the form
        contactForm.reset();
    });
}
