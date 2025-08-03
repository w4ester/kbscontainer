/**
 * Cyber UXcellence Awards - Categories Section Module
 * Initializes and manages the categories section of the site
 */

const initCategories = () => {
  const categoriesSection = document.getElementById('categories');
  
  if (!categoriesSection) return;
  
  // Add the categories-section class for styling
  categoriesSection.classList.add('categories-section');
  
  // Create the categories content
  const categoriesContent = `
    <div class="container">
      <h2 class="section-title">Award Categories</h2>
      
      <div class="categories-container">
        <div class="categories-left">
          <div class="category-icon-main">
            <img src="assets/images/purpleSVG/most_accessibile_design_purple.svg" alt="Category icon" />
          </div>
          <p class="category-description">
            Recognizes a cybersecurity product that prioritizes accessibility, ensuring an
            inclusive experience for all users, including those with disabilities, varying levels of
            technical expertise, or unique environmental challenges.
          </p>
        </div>
        
        <div class="categories-right">
          <div class="category-cards-container">
            <div class="category-card" data-category="best-overall">
              <div class="category-card-icon mobile-only">
                <img src="assets/images/purpleSVG/best_overall_ux_cybersecurity_purple.svg" alt="Best Overall UX in Cybersecurity icon" />
              </div>
              <div class="category-text">
                <h3>Best Overall UX in Cybersecurity</h3>
                <p class="category-subtitle">All submissions automatically entered and winners are selected by judges.</p>
              </div>
              <div class="category-card-content">
                <p>The highest honor, awarded to the product that delivers the most comprehensive, user-centric experience across all aspects of cybersecurity, setting the industry standard for excellence in UX.</p>
                <div class="category-note-container">
                  <p class="category-note"><em>This category includes all submissions automatically. The winner is selected by judges from all category nominations.</em></p>
                  <p class="category-note"><em>Winners will be recognized in three categories: Early, Growth, Late</em></p>
                </div>
              </div>
            </div>
            
            <div class="category-card" data-category="intuitive-interface">
              <div class="category-card-icon mobile-only">
                <img src="assets/images/purpleSVG/most_intuitive_user_interface_purple.svg" alt="Most Intuitive User Interface icon" />
              </div>
              <div class="category-text">
                <h3>Most Intuitive User Interface</h3>
              </div>
              <div class="category-card-content">
                <p>Recognizes a cybersecurity product that offers a seamless and easy-to-navigate interface, minimizing cognitive load and ensuring users can complete tasks with minimal friction or confusion.</p>
              </div>
            </div>
            
            <div class="category-card" data-category="mobile-security">
              <div class="category-card-icon mobile-only">
                <img src="assets/images/purpleSVG/best_mobile_security_ux_purple.svg" alt="Best Mobile Security UX icon" />
              </div>
              <div class="category-text">
                <h3>Best Mobile Security UX</h3>
              </div>
              <div class="category-card-content">
                <p>Honors a cybersecurity product that delivers a top-tier, frictionless experience on mobile devices, ensuring security tools are both effective and effortless for users on the go.</p>
              </div>
            </div>
            
            <div class="category-card" data-category="accessible-design">
              <div class="category-card-icon mobile-only">
                <img src="assets/images/purpleSVG/most_accessibile_design_purple.svg" alt="Most Accessible Design icon" />
              </div>
              <div class="category-text">
                <h3>Best Accessibility & Inclusive UX</h3>
              </div>
              <div class="category-card-content">
                <p>Recognizes a cybersecurity product that prioritizes accessibility, ensuring an inclusive experience for all users, including those with disabilities, varying levels of technical expertise, or unique environmental challenges.</p>
              </div>
            </div>
            
            <div class="category-card" data-category="data-visualization">
              <div class="category-card-icon mobile-only">
                <img src="assets/images/purpleSVG/best_use_of_data_visulaization_purple.svg" alt="Best Use of Data Visualization icon" />
              </div>
              <div class="category-text">
                <h3>Best Use of Data Visualization</h3>
              </div>
              <div class="category-card-content">
                <p>Awards the product that transforms complex security data into clear, digestible, and actionable insights through effective data visualization, reducing information overload and improving decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Insert the categories content into the section
  categoriesSection.innerHTML = categoriesContent;
  
  // Initialize category cards and set default active card
  const categoryCards = categoriesSection.querySelectorAll('.category-card');
  const categoryLeft = categoriesSection.querySelector('.categories-left');
  const categoryDescription = categoryLeft.querySelector('.category-description');
  const categoryIconMain = categoryLeft.querySelector('.category-icon-main img');
  const categoryNominateBtn = categoryLeft.querySelector('.nominate-btn');
  
  // Check if we need to clear localStorage on first load to reset state
  // This helps ensure state is cleared after deploying new changes
  if (!window.initialLoadDone) {
    window.initialLoadDone = true;
  }
  
  // Get active category from localStorage if available
  const storedCategory = localStorage.getItem('activeCategory') || 'best-overall';
  const defaultActiveCard = Array.from(categoryCards).find(card => card.getAttribute('data-category') === storedCategory) || categoryCards[0];
  
  if (defaultActiveCard) {
    defaultActiveCard.classList.add('active');
    
    // Set the data-category on the main nominate button, but only if it's not Best Overall
    const isDefaultBestOverall = defaultActiveCard.getAttribute('data-category') === 'best-overall';
    if (categoryNominateBtn && !isDefaultBestOverall) {
      categoryNominateBtn.setAttribute('data-category', defaultActiveCard.getAttribute('data-category'));
    }
    
    // Set initial description from the selected category
    const defaultDescription = defaultActiveCard.querySelector('.category-card-content p').textContent;
    if (categoryDescription) {
      categoryDescription.textContent = defaultDescription;
    }
    
    // Set the initial main icon to match the selected category
    if (categoryIconMain) {
      const iconInCard = defaultActiveCard.querySelector('.category-card-icon img');
      if (iconInCard) {
        const iconSrc = iconInCard.getAttribute('src');
        categoryIconMain.setAttribute('src', iconSrc);
        categoryIconMain.setAttribute('alt', iconInCard.getAttribute('alt'));
      }
    }
    
    // Special handling for Best Overall category
    const isBestOverall = defaultActiveCard.getAttribute('data-category') === 'best-overall';
    if (isBestOverall && window.innerWidth >= 768) {
      // Show the note instead of button for Best Overall on desktop
      if (categoryNominateBtn) {
        categoryNominateBtn.style.display = 'none';
        
        // Create or show the note element
        let noteElement = categoryLeft.querySelector('.category-note');
        if (!noteElement) {
          noteElement = document.createElement('p');
          noteElement.className = 'category-note';
          noteElement.innerHTML = '<div class="category-note-container"><em>This category includes all submissions automatically. The winner is selected by judges from all category nominations.<br>Winners will be recognized in three categories: Early, Growth, Late</em></div>';
          categoryLeft.appendChild(noteElement);
        } else {
          noteElement.style.display = 'block';
        }
      }
    }
  }
  
  // Handle category card clicks for both mobile and desktop
  categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger card selection if clicking on a nominate button
      if (e.target.closest('.nominate-btn')) {
        return;
      }
      
      const isMobile = window.innerWidth < 768;
      const isBestOverall = card.getAttribute('data-category') === 'best-overall';
      
      if (isMobile) {
        // Mobile accordion behavior
        // Check if this card is already active
        const wasActive = card.classList.contains('active');
        
        // Close all cards first
        categoryCards.forEach(c => {
          c.classList.remove('active');
          const content = c.querySelector('.category-card-content');
          if (content) content.style.display = 'none';
        });
        
        // If clicking on a different card, open it
        if (!wasActive) {
          card.classList.add('active');
          const content = card.querySelector('.category-card-content');
          if (content) content.style.display = 'block';
        }
      } else {
        // Desktop behavior
        // Remove active state from all cards
        categoryCards.forEach(c => c.classList.remove('active'));
        
        // Add active state to clicked card
        card.classList.add('active');
        
        // Save category selection to localStorage
        localStorage.setItem('activeCategory', card.getAttribute('data-category'));
        
        // Update the description text with the selected category description
        const cardDescription = card.querySelector('.category-card-content p').textContent;
        if (categoryDescription) {
          categoryDescription.textContent = cardDescription;
        }
        
        // Handle special case for Best Overall category
        if (isBestOverall) {
          // Show the "Selected from all nominations" text instead of a button
          if (categoryNominateBtn) {
            categoryNominateBtn.style.display = 'none';
            
            // Create a note element if it doesn't exist
            let noteElement = categoryLeft.querySelector('.category-note');
            if (!noteElement) {
              noteElement = document.createElement('p');
              noteElement.className = 'category-note';
              noteElement.innerHTML = '<em>*Selected from all nominations<br>Winners will be recognized in three categories: Early Stage/Growth, Late Stage, and Public</em>';
              categoryLeft.appendChild(noteElement);
            } else {
              noteElement.style.display = 'block';
            }
          }
        } else {
          // Show the nominate button for other categories
          if (categoryNominateBtn) {
            categoryNominateBtn.style.display = 'inline-block';
            
            // Hide any note element
            const noteElement = categoryLeft.querySelector('.category-note');
            if (noteElement) {
              noteElement.style.display = 'none';
            }
          }
        }
        
        // Get category data for potential icon change
        const categoryType = card.getAttribute('data-category');
        
        // Update the main nominate button to reflect the current category
        // But only if this isn't the Best Overall category
        if (categoryNominateBtn && !isBestOverall) {
          categoryNominateBtn.setAttribute('data-category', categoryType);
        }
        
        // Update icon based on category
        if (categoryIconMain) {
          // Use the same gradient SVG icon from the card for the main icon
          const iconInCard = card.querySelector('.category-card-icon img');
          if (iconInCard) {
            // Get the source of the icon in the card
            const iconSrc = iconInCard.getAttribute('src');
            // Apply it to the main icon 
            categoryIconMain.setAttribute('src', iconSrc);
            // Update the alt text to match the category
            categoryIconMain.setAttribute('alt', iconInCard.getAttribute('alt'));
          }
        }
      }
    });
  });
  
  // Initialize category card content display
  categoryCards.forEach(card => {
    const content = card.querySelector('.category-card-content');
    if (content) content.style.display = 'none';
  });
  
  // Show content for default active card if on mobile
  if (defaultActiveCard && window.innerWidth < 768) {
    const content = defaultActiveCard.querySelector('.category-card-content');
    if (content) content.style.display = 'block';
  }
  
  // Handle window resize to toggle between desktop and mobile views
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    const breakpoint = 768;
    
    // Only trigger if crossing the mobile/desktop breakpoint
    if ((lastWidth < breakpoint && currentWidth >= breakpoint) || 
        (lastWidth >= breakpoint && currentWidth < breakpoint)) {
      lastWidth = currentWidth;
      
      // Store the currently active category before reinitializing
      const activeCard = categoriesSection.querySelector('.category-card.active');
      if (activeCard) {
        localStorage.setItem('activeCategory', activeCard.getAttribute('data-category'));
      }
      
      // Reload the section to apply the correct view
      initCategories();
    }
  });
};

export default initCategories;