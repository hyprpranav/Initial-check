// SpotlightCard effect for both dark and light theme, vanilla JS
// Applies to .card-spotlight elements in both themes

document.addEventListener('DOMContentLoaded', function() {
  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    // Set spotlight color based on theme
    if (document.body.getAttribute('data-theme') === 'dark') {
      card.style.setProperty('--spotlight-color', 'rgba(255,255,255,0.25)');
    } else {
      card.style.setProperty('--spotlight-color', 'rgba(34,34,34,0.22)'); // Increased opacity for better visibility in light theme
    }
  }

  function enableSpotlight() {
    document.querySelectorAll('.card-spotlight').forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', function() {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
      });
    });
  }

  function disableSpotlight() {
    document.querySelectorAll('.card-spotlight').forEach(card => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', function() {});
    });
  }

  function checkThemeAndApply() {
    disableSpotlight();
    enableSpotlight();
  }

  checkThemeAndApply();
  // Also listen for theme changes
  const observer = new MutationObserver(checkThemeAndApply);
  observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
});
