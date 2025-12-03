document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');

    menuBtn.addEventListener('click', () => {
        // Toggle the 'active' class on the nav element
        nav.classList.toggle('active');

        // Optional: Animate hamburger icon to X
        const spans = menuBtn.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        
        toggle.addEventListener('click', () => {
            // Close other items (Optional - remove this block if you want multiple open)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-content').style.maxHeight = null;
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            const content = item.querySelector('.faq-content');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            // Reset hamburger icon
            const spans = menuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
});