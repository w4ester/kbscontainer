/**
 * Categories Section JavaScript (Refactored for Device Separation)
 */

import { initHubSpotForm } from './hubspot-form.js';

export default function initCategories() {
  // Decide which section to load
  const isMobile = () => window.innerWidth <= 991;
  let currentSection = null;

  // Load the appropriate section HTML
  const loadCategoriesSection = async () => {
    try {
      const sectionFile = isMobile()
        ? 'sections/categories-mobile.html'
        : 'sections/categories.html';
      const response = await fetch(sectionFile);
      const html = await response.text();
      document.getElementById('categories').innerHTML = html;
      currentSection = isMobile() ? 'mobile' : 'desktop';

      // Initialize logic for the correct section
      if (currentSection === 'desktop') {
        initDesktopTabs();
        initDesktopNominationModal();
        initDesktopAnimations();
      } else {
        initMobileAccordion();
        initMobileNominationModal();
      }
    } catch (error) {
      console.error('Error loading categories section:', error);
    }
  };
  const loadCategoriesSection = async () => {
    try {
      const sectionFile = isMobile()
        ? 'sections/categories-mobile.html'
        : 'sections/categories.html';
      const response = await fetch(sectionFile);
      let html = await response.text();
      
      // Handle different wrapper classes based on device type
      if (isMobile()) {
        // Extract inner content from mobile version
        html = html.replace('<div class="categories-section-mobile">', '').replace('</div>', '');
        document.getElementById('categories').innerHTML = html;
        document.getElementById('categories').classList.add('categories-section-mobile');
      } else {
        // Extract inner content from desktop version
        html = html.replace('<div class="categories-section-desktop">', '').replace('</div>', '');
        document.getElementById('categories').innerHTML = html;
        document.getElementById('categories').classList.add('categories-section-desktop');
      }
      
      currentSection = isMobile() ? 'mobile' : 'desktop';
  
      // Initialize logic for the correct section (no changes needed here)
      if (currentSection === 'desktop') {
        initDesktopTabs();
        initDesktopNominationModal();
        initDesktopAnimations();
      } else {
        initMobileAccordion();
        initMobileNominationModal();
      }
    } catch (error) {
      console.error('Error loading categories section:', error);
    }
  };


  // Desktop logic: tab/details
  const initDesktopTabs = () => {
    const categoryItems = document.querySelectorAll('.category-item');
    const categoryIconImg = document.getElementById('category-icon-img');
    const categoryText = document.getElementById('category-text');
    const categoryNote = document.getElementById('category-note');
    const nominateContainer = document.getElementById('nominate-container');

    if (!categoryItems.length) return;

    categoryItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('active')) return;

        categoryItems.forEach(tab => tab.classList.remove('active'));
        setTimeout(() => {
          item.classList.add('active');
          const iconSrc = item.getAttribute('data-icon');
          const description = item.getAttribute('data-description');
          const note = item.getAttribute('data-note');
          const showNominate = item.getAttribute('data-nominate') === 'true';

          // Fade out content
          if (categoryText) categoryText.style.opacity = '0';
          if (categoryIconImg) categoryIconImg.style.opacity = '0';
          if (nominateContainer) nominateContainer.style.opacity = '0';
          if (categoryNote) categoryNote.style.opacity = '0';

          setTimeout(() => {
            if (categoryIconImg && iconSrc) {
              categoryIconImg.src = `assets/images/${iconSrc}`;
              categoryIconImg.alt = `${item.querySelector('h3').textContent} Icon`;
              categoryIconImg.style.opacity = '1';
            }
            if (categoryText && description) {
              categoryText.textContent = description;
              categoryText.style.opacity = '1';
            }
            if (categoryNote) {
              if (note && note.trim() !== '') {
                categoryNote.textContent = note;
                categoryNote.style.display = 'block';
                setTimeout(() => categoryNote.style.opacity = '1', 50);
              } else {
                categoryNote.style.display = 'none';
                categoryNote.style.opacity = '0';
              }
            }
            if (nominateContainer) {
              if (showNominate) {
                nominateContainer.style.display = 'block';
                setTimeout(() => nominateContainer.style.opacity = '1', 50);
              } else {
                nominateContainer.style.display = 'none';
              }
            }
          }, 200);
        }, 50);
      });
    });

    // Set initial state
    const activeCategory = document.querySelector('.category-item.active');
    if (activeCategory) {
      const iconSrc = activeCategory.getAttribute('data-icon');
      const description = activeCategory.getAttribute('data-description');
      const note = activeCategory.getAttribute('data-note');
      const showNominate = activeCategory.getAttribute('data-nominate') === 'true';

      if (categoryIconImg && iconSrc) {
        categoryIconImg.src = `assets/images/${iconSrc}`;
        categoryIconImg.alt = `${activeCategory.querySelector('h3').textContent} Icon`;
      }
      if (categoryText && description) {
        categoryText.textContent = description;
      }
      if (categoryNote) {
        if (note && note.trim() !== '') {
          categoryNote.textContent = note;
          categoryNote.style.display = 'block';
        } else {
          categoryNote.style.display = 'none';
        }
      }
      if (nominateContainer) {
        nominateContainer.style.display = showNominate ? 'block' : 'none';
      }
    }
  };

  // Desktop: nomination modal
  const initDesktopNominationModal = () => {
    const nominateButtons = document.querySelectorAll('.nominate-btn');
    if (nominateButtons.length === 0) return;
    nominateButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const activeCategory = document.querySelector('.category-item.active');
        let categoryName = "";
        if (activeCategory) {
          categoryName = activeCategory.querySelector('h3').textContent;
        }
        const mainModal = document.querySelector('.nomination-modal');
        if (mainModal) {
          const modalTitle = mainModal.querySelector('h2');
          if (modalTitle && categoryName) {
            modalTitle.textContent = `Nominate Now: ${categoryName}`;
          } else if (modalTitle) {
            modalTitle.textContent = "Nominate Now";
          }
          mainModal.classList.add('active');
          document.body.style.overflow = 'hidden';
          initHubSpotForm();
        }
      });
    });
  };

  // Desktop: animations
  const initDesktopAnimations = () => {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('active')) {
          item.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }
      });
      item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('active')) {
          item.style.backgroundColor = 'transparent';
        }
      });
    });
    const nominateBtn = document.querySelector('.nominate-btn');
    if (nominateBtn) {
      nominateBtn.addEventListener('mouseenter', () => {
        const shimmer = nominateBtn.querySelector('.shimmer');
        if (!shimmer) {
          const shimmerEl = document.createElement('span');
          shimmerEl.classList.add('shimmer');
          nominateBtn.appendChild(shimmerEl);
        }
      });
    }
  };

  // Mobile logic: single-open accordion
  const initMobileAccordion = () => {
    const items = document.querySelectorAll('.category-mobile-item');
    items.forEach(item => {
      const header = item.querySelector('.category-mobile-header');
      header.addEventListener('click', () => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          items.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
        }
      });
    });
  };

  // Mobile: nomination modal
  const initMobileNominationModal = () => {
    const nominateButtons = document.querySelectorAll('.nominate-btn');
    if (nominateButtons.length === 0) return;
    nominateButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const activeItem = button.closest('.category-mobile-item');
        let categoryName = "";
        if (activeItem) {
          const h3 = activeItem.querySelector('h3');
          if (h3) categoryName = h3.textContent;
        }
        const mainModal = document.querySelector('.nomination-modal');
        if (mainModal) {
          const modalTitle = mainModal.querySelector('h2');
          if (modalTitle && categoryName) {
            modalTitle.textContent = `Nominate Now: ${categoryName}`;
          } else if (modalTitle) {
            modalTitle.textContent = "Nominate Now";
          }
          mainModal.classList.add('active');
          document.body.style.overflow = 'hidden';
          initHubSpotForm();
        }
      });
    });
  };

  // Reload section on resize crossing the desktop/mobile threshold
  let lastMobile = isMobile();
  window.addEventListener('resize', () => {
    const nowMobile = isMobile();
    if (nowMobile !== lastMobile) {
      loadCategoriesSection();
      lastMobile = nowMobile;
    }
  });

  // Initialize
  loadCategoriesSection();
}