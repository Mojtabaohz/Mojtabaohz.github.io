document.addEventListener('DOMContentLoaded', function () {
  // Tooltip hover for desktop
  const bulletPoints = document.querySelectorAll('.bullet-point');

  bulletPoints.forEach(point => {
      const tooltip = point.querySelector('.tooltip');

      point.addEventListener('mouseenter', function () {
          tooltip.style.display = 'block';
      });

      point.addEventListener('mouseleave', function () {
          tooltip.style.display = 'none';
      });

      // Click for mobile
      point.addEventListener('click', function () {
          tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
      });
  });
});
