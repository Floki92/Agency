// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('bg-white', 'shadow');
    } else {
        document.querySelector('.navbar').classList.remove('bg-white', 'shadow');
    }
});

// Theme Switcher
document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const htmlElement = document.documentElement;
    const moonIcon = '<i class="fas fa-moon"></i>';
    const sunIcon = '<i class="fas fa-sun"></i>';

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        themeToggles.forEach(toggle => {
            toggle.innerHTML = savedTheme === 'dark' ? sunIcon : moonIcon;
        });
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            themeToggles.forEach(btn => {
                btn.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
            });
            localStorage.setItem('theme', newTheme);
        });
    });
});

// ... rest of the code ...

// Portfolio filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filters .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});