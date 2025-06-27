// TiltedCard effect for hero image
// Applies interactive tilt and scale on hover

document.addEventListener('DOMContentLoaded', function() {
  const card = document.getElementById('hero-tilted-card');
  if (!card) return;
  const rotateAmplitude = 10;
  const scaleOnHover = 1; // Reduced from 1.2 for a subtler pop effect
  let width = card.offsetWidth;
  let height = card.offsetHeight;

  function handleMouseMove(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / width) - 0.5) * 2 * rotateAmplitude;
    const rotateX = ((y / height) - 0.5) * -2 * rotateAmplitude;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scaleOnHover})`;
  }

  function handleMouseLeave() {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  }

  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);

  // Responsive: update width/height on resize
  window.addEventListener('resize', () => {
    width = card.offsetWidth;
    height = card.offsetHeight;
  });
});
