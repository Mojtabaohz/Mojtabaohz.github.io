document.addEventListener('DOMContentLoaded', function () {
    // Tooltip hover for desktop
    const bulletPoints = document.querySelectorAll('.bullet-point');
  
    bulletPoints.forEach(point => {
      point.addEventListener('mouseenter', function () {
        this.querySelector('.tooltip').style.display = 'block';
      });
  
      point.addEventListener('mouseleave', function () {
        this.querySelector('.tooltip').style.display = 'none';
      });
  
      // Click for mobile
      point.addEventListener('click', function () {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  