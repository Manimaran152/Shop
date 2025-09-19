	// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Menu Filtering Logic
        const filterButtons = document.querySelectorAll('.filter-btn');
        const menuItems = document.querySelectorAll('.menu-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Handle active button style
                filterButtons.forEach(btn => btn.classList.remove('active', 'bg-amber-700', 'text-white'));
                button.classList.add('active', 'bg-amber-700', 'text-white');
                
                const filter = button.dataset.filter;

                menuItems.forEach(item => {
                    item.style.display = 'none'; // Hide all items first
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'; // Show filtered items
                    }
                });
            });
        });

        // ScrollReveal Animations
        // This makes elements fade in as you scroll down the page
        ScrollReveal().reveal('section', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            interval: 100,
            easing: 'ease-in-out'
        });

        ScrollReveal().reveal('.about-image-container', { origin: 'left' });
        ScrollReveal().reveal('.about-text-container', { origin: 'right' });
        ScrollReveal().reveal('.menu-item', { interval: 100 });
        ScrollReveal().reveal('.testimonial-card', { interval: 150 });