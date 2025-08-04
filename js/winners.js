/**
 * Cyber UXcellence Awards - Winners Section Module
 * Displays the 2025 award winners on the home page
 */

const initWinners = () => {
  const winnersSection = document.getElementById('winners');
  
  if (!winnersSection) return;
  
  // Add the winners-section class for styling
  winnersSection.classList.add('winners-section');
  
  // ⚠️ WINNERS REVEAL CONFIGURATION ⚠️
  // Set this to true on August 6, 2025 to reveal winners
  const REVEAL_WINNERS = true; // TODO: Change to true on August 6, 2025
  
  // Create the winners content
  const winnersContent = REVEAL_WINNERS ? createWinnersContent() : createComingSoonContent();
  
  // Insert the winners content into the section
  winnersSection.innerHTML = winnersContent;
  
  // Add click handler for the winners nominate button to open modal
  const winnersNominateBtn = document.getElementById('winnersNominateBtn2026');
  if (winnersNominateBtn) {
    winnersNominateBtn.addEventListener('click', () => {
      const modal = document.querySelector('.nomination-modal-2026');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      }
    });
  }
};

// Create coming soon content (before August 6)
const createComingSoonContent = () => {
  return `
    <div class="container">
      <div class="winners-header">
        <h2 class="section-title">2025 Cyber UXcellence Award Winners</h2>
        <p class="section-subtitle">Winners will be announced at Black Hat USA 2025 on August 6th</p>
      </div>
      
      <div class="coming-soon-banner">
        <div class="countdown-wrapper">
          <h3>Coming August 6, 2025</h3>
          <p>Join us at Black Hat USA 2025 for the live announcement of this year's winners</p>
        </div>
      </div>
      
      <div class="winners-cta">
        <p>Want to see the finalists?</p>
        <a href="winners.html" class="cta-button">View All Finalists</a>
      </div>
    </div>
  `;
};

// Create winners content (after August 6)
const createWinnersContent = () => {
  return `
    <div class="container">
      <div class="winners-header">
        <h2 class="section-title">Award Winners</h2>
        <p class="section-subtitle">The Cyber UXcellence Awards celebrate teams creating intuitive, user-friendly and effective security products.</p>
      </div>
      
      <div class="winners-grid">
        <!-- Best Overall UX Late-Stage -->
        <div class="winner-card best-overall-late" data-category="best-overall">
          <div class="card-top">
            <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="award-logo">
            <div class="winner-label">2025 WINNER</div>
          </div>
          <div class="company-info">
            <img src="assets/images/LogosCyberUXcellenceSubmissons2025/RedSeal Logo.png" alt="RedSeal" class="company-logo">
          </div>
          <div class="category-banner">
            <div class="category-title">BEST OVERALL UX</div>
            <div class="category-subtitle">ENTERPRISE EXCELLENCE</div>
          </div>
        </div>
        
        <!-- Best Overall UX Mid-Stage -->
        <div class="winner-card best-overall-mid" data-category="best-overall">
          <div class="card-top">
            <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="award-logo">
            <div class="winner-label">2025 WINNER</div>
          </div>
          <div class="company-info">
            <img src="assets/images/LogosCyberUXcellenceSubmissons2025/SOCRadar Logo 2 (1).svg" alt="SOCRadar" class="company-logo">
          </div>
          <div class="category-banner">
            <div class="category-title">BEST OVERALL UX</div>
            <div class="category-subtitle">MID-STAGE EXCELLENCE</div>
          </div>
        </div>
        
        <!-- Best Overall UX Early-Stage -->
        <div class="winner-card best-overall-early" data-category="best-overall">
          <div class="card-top">
            <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="award-logo">
            <div class="winner-label">2025 WINNER</div>
          </div>
          <div class="company-info">
            <img src="assets/images/LogosCyberUXcellenceSubmissons2025/Pixee Logo (1).svg" alt="Pixee" class="company-logo">
          </div>
          <div class="category-banner">
            <div class="category-title">BEST OVERALL UX</div>
            <div class="category-subtitle">EARLY-STAGE EXCELLENCE</div>
          </div>
        </div>
        
        <!-- Best Use of Data Visualization -->
        <div class="winner-card data-visualization" data-category="data-visualization">
          <div class="card-top">
            <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="award-logo">
            <div class="winner-label">2025 WINNER</div>
          </div>
          <div class="company-info">
            <img src="assets/images/LogosCyberUXcellenceSubmissons2025/RedSeal Logo.png" alt="RedSeal" class="company-logo">
          </div>
          <div class="category-banner">
            <div class="category-title">BEST USE OF</div>
            <div class="category-subtitle">DATA VISUALIZATION</div>
          </div>
        </div>
        
        <!-- Most Intuitive User Interface -->
        <div class="winner-card intuitive-interface" data-category="intuitive-interface">
          <div class="card-top">
            <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="award-logo">
            <div class="winner-label">2025 WINNER</div>
          </div>
          <div class="company-info">
            <img src="assets/images/LogosCyberUXcellenceSubmissons2025/Pixee Logo (1).svg" alt="Pixee" class="company-logo">
          </div>
          <div class="category-banner">
            <div class="category-title">MOST INTUITIVE</div>
            <div class="category-subtitle">USER INTERFACE</div>
          </div>
        </div>
        
        <!-- Best Mobile Security UX -->
        <div class="winner-card mobile-security" data-category="mobile-security">
          <div class="card-top">
            <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="award-logo">
            <div class="winner-label">2025 WINNER</div>
          </div>
          <div class="company-info">
            <img src="assets/images/LogosCyberUXcellenceSubmissons2025/Beyond Identity Logo.svg" alt="Beyond Identity" class="company-logo">
          </div>
          <div class="category-banner">
            <div class="category-title">BEST MOBILE</div>
            <div class="category-subtitle">SECURITY UX</div>
          </div>
        </div>
        
        <!-- Best Accessibility & Inclusive UX -->
        <!-- Commented out Dataminr card as requested
        <div class="winner-card accessibility" data-category="accessibility">
          <div class="card-top">
            <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="award-logo">
            <div class="winner-label">2025 WINNER</div>
          </div>
          <div class="company-info">
            <img src="assets/images/LogosCyberUXcellenceSubmissons2025/Dataminr Logo.png" alt="Dataminr" class="company-logo">
          </div>
          <div class="category-banner">
            <div class="category-title">BEST ACCESSIBILITY &</div>
            <div class="category-subtitle">INCLUSIVE UX</div>
          </div>
        </div>
        -->
      </div>
      
      <div class="winners-cta">
        <button class="cta-button secondary" id="winnersNominateBtn2026">Nominate for 2026</button>
      </div>
    </div>
  `;
};

export default initWinners;