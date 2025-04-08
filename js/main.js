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

  const galleries = document.querySelectorAll('.project-gallery');

  galleries.forEach(gallery => {
      const items = gallery.querySelectorAll('.gallery-item');
      let currentIndex = 0;

      const updateGallery = () => {
          items.forEach((item, index) => {
              item.style.display = index === currentIndex ? 'block' : 'none';
              item.classList.remove('selected');
              if (index === currentIndex) {
                  item.classList.add('selected');
              }
          });
      };

      // Add navigation buttons
      const prevButton = document.createElement('button');
      prevButton.textContent = 'Previous';
      prevButton.classList.add('gallery-nav', 'prev');
      prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          updateGallery();
      });

      const nextButton = document.createElement('button');
      nextButton.textContent = 'Next';
      nextButton.classList.add('gallery-nav', 'next');
      nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % items.length;
          updateGallery();
      });

      gallery.parentElement.appendChild(prevButton);
      gallery.parentElement.appendChild(nextButton);

      // Initialize gallery
      updateGallery();
  });
});

$(document).ready(function () {
    $('.project-gallery').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


