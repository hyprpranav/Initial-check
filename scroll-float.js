// GSAP and ScrollTrigger scroll-float text animation for all text elements
// This script requires GSAP and ScrollTrigger to be loaded in the HTML

document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not loaded. Text animations will not work.');
        return;
    }
    // Select all text elements you want to animate
    // Here: headings, paragraphs, list items, skill items, etc.
    const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'li', '.skill-item', '.project-info h3', '.project-info p', '.certificate-info h3', '.certificate-info p',
        '.resume-content p', '.btn', '.about-text p', '.about-interests h3', '.about-interests li', '.contact-info p', '.contact-info h3'
    ];
    const textElements = document.querySelectorAll(textSelectors.join(','));

    textElements.forEach((el, i) => {
        gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'back.inOut(2)',
                scrollTrigger: {
                    trigger: el,
                    start: 'center bottom+=50%',
                    end: 'bottom bottom-=40%',
                    toggleActions: 'play none none reverse',
                },
                stagger: 0.03 * i
            }
        );
    });
});
