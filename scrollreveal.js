// ScrollReveal animation for all <p> elements using GSAP
// This script requires GSAP and ScrollTrigger to be loaded in the HTML

document.addEventListener('DOMContentLoaded', function() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded. ScrollReveal will not work.');
    return;
  }
  // Select all <p> elements in all sections, but exclude those with .no-scroll-reveal (footer)
  const paragraphs = document.querySelectorAll('section p, main p, p:not(.no-scroll-reveal)');
  paragraphs.forEach((p, idx) => {
    // Split text into words and wrap each in a span
    if (!p.classList.contains('scroll-reveal-text')) {
      const text = p.textContent;
      p.innerHTML = '';
      text.split(/(\s+)/).forEach((word, i) => {
        if (word.match(/^\s+$/)) {
          p.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = word;
          p.appendChild(span);
        }
      });
      p.classList.add('scroll-reveal-text');
    }
    // Animation
    const wordElements = p.querySelectorAll('.word');
    gsap.fromTo(
      wordElements,
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: p,
          start: 'top bottom-=20%',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
    // Paragraph rotation
    gsap.fromTo(
      p,
      { transformOrigin: '0% 50%', rotate: 5 },
      {
        rotate: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: p,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  });
});
