document.addEventListener('DOMContentLoaded', function () {
  const bulletPoints = document.querySelectorAll('.bullet-point');

  bulletPoints.forEach(point => {
      const tooltip = point.querySelector('.tooltip');

      if (tooltip) {
          point.addEventListener('mouseenter', function () {
              tooltip.style.display = 'block';
              tooltip.style.opacity = '1';
          });

          point.addEventListener('mouseleave', function () {
              tooltip.style.display = 'none';
              tooltip.style.opacity = '0';
          });

          // Click for mobile
          point.addEventListener('click', function () {
              tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
          });
      }
  });
});
