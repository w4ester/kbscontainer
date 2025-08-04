/**
 * Cyber UXcellence Awards - Main JavaScript
 * Initializes all sections and handles global functionality
 */

import { initCookieConsent } from './analytics.js';
import initHero from './hero.js';
import initWinners from './winners.js';
import initCelebrationCarousel from './celebration-carousel.js';
import initAbout from './about.js';
import initCategories from './categories.js';
import initWhy from './why.js';
import initJudges from './judges-popup.js';
import initJudgeInterest from './judges-interest.js';
import initTimeline from './timeline.js';
import initFaq from './faq.js';
import initSponsorship from './sponsorship.js';
// HubSpot form is now directly embedded in HTML

// Initialize mobile menu functionality
const initMobileMenu = () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-links a');
  
  if (menuToggle && mobileMenu) {
    // Open menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close menu
    if (closeMenu) {
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
      });
    }
    
    // Close menu when clicking a link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
};

// Initialize footer
const initFooter = () => {
  const footer = document.querySelector('footer');
  
  if (!footer) return;
  
  // Create the footer content
  const footerContent = `
    <div class="footer-main-content container">  
      <div class="footer-content-left">
        <p class="powered-by-text">Powered by:</p>
        <a href="https://www.mindgrub.com/" target="_blank" rel="noopener" class="mindgrub-logo-link">
          <img src="assets/images/useMindgrubLogoFooter.svg" alt="Mindgrub" class="mindgrub-footer-logo">
        </a>
        <p class="footer-description">
          An award‑winning firm specializing in digital<br>
          innovation, UX/UI design and custom software<br>
          development for the cybersecurity sector.
        </p>
        <a href="https://www.mindgrub.com" target="_blank" rel="noopener" class="visit-mindgrub">Visit Mindgrub</a>
      </div>

      <div class="footer-content-right">
        <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="footer-awards-logo">
        <div class="footer-social">
          <span class="follow-us-text">Follow us!</span>
          <a href="https://www.linkedin.com/showcase/cyber-uxcellence/" target="_blank" rel="noopener" class="social-icon-link" aria-label="LinkedIn">
            <img src="assets/images/LinkedIn.svg" alt="LinkedIn" class="linkedin-icon">
          </a>
        </div>
      </div>
    </div> 
    
    <div class="copyright-container">
      <p class="copyright">
        <span>© 2025 Mindgrub. All rights reserved.</span> 
        <a href="https://mindgrub.com/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>
        <a href="https://mindgrub.com/terms-of-use/" target="_blank" rel="noopener">Terms of Service</a>
      </p>
    </div>
  `;
  
  // Insert the footer content
  footer.innerHTML = footerContent;
};

// Initialize nomination modal popup
const initNominationModal = () => {
  // Get all nomination buttons (not just the main trigger)
  const nominateButtons = document.querySelectorAll('a[href="#nominate"], .cta-button, .nominate-btn');
  const modal = document.querySelector('.nomination-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  
  if (nominateButtons.length > 0 && modal) {
    // Open modal for any nominate button
    nominateButtons.forEach(button => {
      // Remove any existing listeners
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
      
      // Add fresh listener
      newButton.addEventListener('click', (e) => {
        // Skip processing if this is the sponsorship button with mailto: link
        if (newButton.classList.contains('sponsor-cta-button')) {
          return; // Don't process sponsorship buttons
        }
        
        // Check if nominations are closed
        if (newButton.classList.contains('nominations-closed')) {
          e.preventDefault();
          return; // Don't show modal for closed nominations
        }
        
        // For all other CTA buttons, show the nomination modal
        e.preventDefault();

        // Clear active category if NOT a category button
        if (!newButton.classList.contains('nominate-btn')) {
          document.querySelectorAll('.category-item.active').forEach(el => el.classList.remove('active'));
        }

        // Update modal title based on button type
        const modalTitle = modal.querySelector('.modal-header h2');
        if (modalTitle) {
          // For navbar and hero buttons, just show "Nominate Now"
          if (newButton.classList.contains('hero-cta') || newButton.closest('.nav-links') || newButton.closest('.mobile-links')) {
            modalTitle.textContent = "Nominate Now";
          } 
          // For category buttons, show "Nominate Now: Category Name"
          else if (newButton.classList.contains('nominate-btn')) {
            // For left panel button, use the active category or data-category
            if (newButton.hasAttribute('data-category')) {
              const categoryType = newButton.getAttribute('data-category');
              // Map each category to its proper title name
              const categoryTitles = {
                'most-accessible-design': 'Best Accessibility & Inclusive UX',
                'accessible-design': 'Best Accessibility & Inclusive UX',
                'intuitive-interface': 'Most Intuitive User Interface',
                'mobile-security': 'Best Mobile Security UX',
                'data-visualization': 'Best Use of Data Visualization',
                'best-overall': 'Best Overall UX in Cybersecurity'
              };
              
              // Use the mapping or format the category type if not found
              const categoryTitle = categoryTitles[categoryType] || 
                categoryType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                
              modalTitle.textContent = "Nominate Now: " + categoryTitle;
            } else {
              // Find the closest category card or use the active category
              const categoryCard = newButton.closest('.category-card');
              if (categoryCard && categoryCard.querySelector('h3')) {
                const categoryName = categoryCard.querySelector('h3').textContent;
                modalTitle.textContent = `Nominate Now: ${categoryName}`;
              } else {
                modalTitle.textContent = "Nominate Now";
              }
            }
          } else {
            modalTitle.textContent = "Nominate Now";
          }
        }
        
        // Show the modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // HubSpot form is already loaded in the HTML
      });
    });
    
    // All nomination buttons now have listeners attached
    
    // Close modal when clicking overlay
    if (modalOverlay) {
      modalOverlay.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
      });
    }
    
    // Close modal when clicking close button
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
      });
    }
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
      }
    });
  }
};

// Initialize navbar scroll effect
const initNavbarScroll = () => {
  const navbar = document.querySelector('.main-nav');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
};

// Smooth scroll for navigation links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Handle #nominate specially
      if (targetId === '#nominate' || targetId.includes('#nominate')) {
        e.preventDefault();
        const modal = document.querySelector('.nomination-modal');
        if (modal) {
          // Set modal title based on where this link is located
          const modalTitle = modal.querySelector('.modal-header h2');
          if (modalTitle) {
            // For navbar and hero buttons, just show "Nominate Now"
            if (this.classList.contains('hero-cta') || this.closest('.nav-links') || this.closest('.mobile-links')) {
              modalTitle.textContent = "Nominate Now";
            } else if (this.closest('.categories-left')) {
              // For the main nominate button in the categories left panel
              const activeCategory = document.querySelector('.category-card.active');
              if (activeCategory && activeCategory.querySelector('.category-text h3')) {
                modalTitle.textContent = "Nominate Now: " + activeCategory.querySelector('.category-text h3').textContent;
              } else {
                modalTitle.textContent = "Nominate Now";
              }
            } else {
              // For buttons inside category cards
              const categoryCard = this.closest('.category-card');
              if (categoryCard && categoryCard.querySelector('.category-text h3')) {
                modalTitle.textContent = "Nominate Now: " + categoryCard.querySelector('.category-text h3').textContent;
              } else {
                modalTitle.textContent = "Nominate Now";
              }
            }
          }
          
          // Show the modal with the HubSpot form
          modal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        return;
      }
      
      // UNCHANGED: Skip if it's just "#" or JavaScript void
      if (targetId === '#' || targetId.includes('javascript')) return;
      
      // UNCHANGED: Find the target element
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // UNCHANGED: Prevent default link behavior
        e.preventDefault();
        
        // ADDED: Special handling for logo clicks
        if (this.closest('.logo')) {
          // When clicking the logo, scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return; // Exit early
        }
        
        // IMPROVED: Calculate scroll position for other navigation
        const navbarHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Don't show the next section at all by making sure we're not showing any content below
        if (targetId === '#hero' || targetId === '/') {
          // For hero section or root path, go to the very top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          // Update URL without affecting history to show we're on the hero section
          if (history && history.replaceState) {
            history.replaceState(null, null, '#hero');
          }
        } else {
          // For other sections, apply the standard scroll behavior
          window.scrollTo({
            top: targetPosition - navbarHeight, // Account for fixed navbar
            behavior: 'smooth'
          });
          
          // Update URL hash to reflect current section
          if (history && history.replaceState) {
            history.replaceState(null, null, targetId);
          }
        }
      }
    });
  });
};

// UNCHANGED: Initialize all sections
const initSections = () => {
  // Initialize hero section
  initHero();
  
  // Initialize winners section (NEW)
  initWinners();
  
  // Initialize celebration carousel
  initCelebrationCarousel();
  
  // Initialize about section
  initAbout();
  
  // Initialize categories section
  initCategories();
  
  // Initialize all other sections
  initWhy();
  initJudges();
  initJudgeInterest();
  initTimeline();
  initFaq();
  initSponsorship();
};

// Initialize analytics tracking
const initAnalytics = () => {
  // This would typically include Google Analytics or similar tracking code
  console.log('Analytics initialized');
};

// Initialize global event delegator for dynamic content
const initEventDelegation = () => {
  // Listen for clicks on the entire document
  document.addEventListener('click', (e) => {
    // Check if the clicked element is a nomination button added after initial page load
    // Only handle buttons that weren't processed by initNominationModal
    if ((e.target.matches('a[href="#nominate"]') || 
         e.target.matches('.nominate-btn') || 
         e.target.matches('.cta-button')) && 
        !e.target.classList.contains('sponsor-cta-button')) { // Skip sponsorship buttons
      
      e.preventDefault();
      
      // Show the nomination modal (only if not already shown)
      const modal = document.querySelector('.nomination-modal');
      if (modal && !modal.classList.contains('active')) {
        // Set modal title based on where this button is located
        const modalTitle = modal.querySelector('.modal-header h2');
        if (modalTitle) {
          // For navbar and hero buttons, just show "Nominate Now"
          if (e.target.classList.contains('hero-cta') || 
              e.target.closest('.nav-links') || 
              e.target.closest('.mobile-links')) {
            modalTitle.textContent = "Nominate Now";
          } else if (e.target.closest('.categories-left')) {
            // For the main nominate button in the categories left panel
            const activeCategory = document.querySelector('.category-card.active');
            if (activeCategory && activeCategory.querySelector('.category-text h3')) {
              modalTitle.textContent = "Nominate Now: " + activeCategory.querySelector('.category-text h3').textContent;
            } else {
              modalTitle.textContent = "Nominate Now";
            }
          } else {
            // For buttons inside category cards
            const categoryCard = e.target.closest('.category-card');
            if (categoryCard && categoryCard.querySelector('.category-text h3')) {
              modalTitle.textContent = "Nominate Now: " + categoryCard.querySelector('.category-text h3').textContent;
            } else {
              modalTitle.textContent = "Nominate Now";
            }
          }
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // HubSpot form is already loaded in the HTML
      }
      
      // Button click processed
    }
  });
};

// HubSpot form initialization handled directly in HTML

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Ensure scrolling is enabled on page load
  document.body.style.overflow = '';
  
  // Close any modals that might be stuck open
  const nominationModal = document.querySelector('.nomination-modal');
  if (nominationModal) {
    nominationModal.classList.remove('active');
  }
  
  initMobileMenu();
  initNavbarScroll();
  initSmoothScroll();
  initNominationModal();
  initSections();
  initAnalytics();
  initEventDelegation();
  initCookieConsent();
  initFooter();
  
  // Handle initial page load - if no hash, show hero section only
  if (!window.location.hash || window.location.hash === '#' || window.location.hash === '#hero') {
    // Reset to top of page on initial load if we're on the hero section
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Use 'auto' instead of 'smooth' for initial page load
      });
    }, 50);
  } else {
    // If a specific hash is provided, scroll to that section
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      const navbarHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      
      setTimeout(() => {
        window.scrollTo({
          top: targetPosition - navbarHeight,
          behavior: 'auto' // Use 'auto' instead of 'smooth' for initial page load
        });
      }, 50);
    }
  }
  
  console.log('Cyber UXcellence Awards site initialized');
});