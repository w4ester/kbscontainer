/**
 * Cyber UXcellence Awards - Celebration Carousel Module
 * Photo carousel for sharing celebration images from the awards
 */

const initCelebrationCarousel = () => {
  const carouselSection = document.getElementById('celebration-carousel');
  
  if (!carouselSection) return;
  
  // Carousel data with placeholder images
  const slides = [
    {
      image: 'assets/images/celebration-1.jpg',
      caption: 'Award ceremony moment - Winners receiving their recognition',
      alt: 'Award ceremony moment'
    },
    {
      image: 'assets/images/celebration-2.jpg',
      caption: 'Team celebration - Winners and finalists celebrating together',
      alt: 'Team celebration'
    },
    {
      image: 'assets/images/celebration-3.jpg',
      caption: 'Networking event - Industry leaders connecting at the awards',
      alt: 'Networking event'
    },
    {
      image: 'assets/images/celebration-4.jpg',
      caption: 'Panel discussion - Expert insights on cybersecurity UX',
      alt: 'Panel discussion'
    },
    {
      image: 'assets/images/celebration-5.jpg',
      caption: 'Awards display - The prestigious Cyber UXcellence trophies',
      alt: 'Awards display'
    }
  ];
  
  let currentSlide = 0;
  let autoPlayInterval;
  let isPlaying = true;
  
  // Create carousel HTML
  const carouselHTML = `
    <div class="container">
      <div class="carousel-header">
        <h2 class="section-title">Celebration Moments</h2>
        <p class="section-subtitle">Capturing the excitement and recognition of excellence in cybersecurity UX</p>
      </div>
      
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="carousel-slides">
            ${slides.map((slide, index) => `
              <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                <div class="slide-image-wrapper">
                  <img src="${slide.image}" alt="${slide.alt}" class="slide-image">
                  <div class="slide-overlay"></div>
                </div>
                <div class="slide-caption">
                  <p>${slide.caption}</p>
                </div>
              </div>
            `).join('')}
          </div>
          
          <button class="carousel-nav carousel-nav-prev" aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button class="carousel-nav carousel-nav-next" aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        <div class="carousel-indicators">
          ${slides.map((_, index) => `
            <button class="carousel-indicator ${index === 0 ? 'active' : ''}" 
                    aria-label="Go to slide ${index + 1}" 
                    data-slide="${index}"></button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  carouselSection.innerHTML = carouselHTML;
  
  // Get elements
  const slidesContainer = carouselSection.querySelector('.carousel-slides');
  const prevButton = carouselSection.querySelector('.carousel-nav-prev');
  const nextButton = carouselSection.querySelector('.carousel-nav-next');
  const indicators = carouselSection.querySelectorAll('.carousel-indicator');
  const carouselContainer = carouselSection.querySelector('.carousel-container');
  
  // Function to show specific slide
  const showSlide = (index) => {
    // Remove active class from all slides and indicators
    const allSlides = slidesContainer.querySelectorAll('.carousel-slide');
    allSlides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    allSlides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentSlide = index;
  };
  
  // Next slide function
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  };
  
  // Previous slide function
  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  };
  
  // Auto-play functionality
  const startAutoPlay = () => {
    if (isPlaying) {
      autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
    }
  };
  
  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
  };
  
  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };
  
  // Event listeners
  prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
  });
  
  nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
  });
  
  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      resetAutoPlay();
    });
  });
  
  // Pause on hover
  carouselContainer.addEventListener('mouseenter', stopAutoPlay);
  carouselContainer.addEventListener('mouseleave', startAutoPlay);
  
  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  
  carouselContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  carouselContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
      resetAutoPlay();
    }
  };
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (carouselSection.contains(document.activeElement)) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoPlay();
      }
    }
  });
  
  // Start auto-play
  startAutoPlay();
  
  // Clean up on page unload
  window.addEventListener('beforeunload', stopAutoPlay);
};

export default initCelebrationCarousel;