/**
 * Cyber UXcellence Awards - Judges Section Module (Placeholder Version)
 * Initializes and manages the judges announcement section of the site
 * 
 * This is a placeholder version that shows a "Coming Soon" announcement
 * The actual judges will be revealed at the RSA Conference 2025
 */

const initJudges = () => {
  const judgesSection = document.getElementById('judges');
  
  if (!judgesSection) return;
  
  // Add the judges-section class for styling
  judgesSection.classList.add('judges-section');
  
  // Create the judges announcement content with verified image paths
  const judgesContent = `
    <div class="container">
      <h2 class="section-title">Meet the Judges</h2>
      
      <div class="judges-announcement-container">
        <div class="announcement-card">
          <div class="announcement-icon">
            <img src="assets/images/industry-panel-timeline.svg" alt="Industry Leading Panel" class="announcement-icon-img">
          </div>
          <h3 class="announcement-title">Industry Leading Panel</h3>
          <p class="announcement-description">
            Judges will include top industry CISOs, UX experts, and cybersecurity thought leaders.
          </p>
        </div>
        
        <div class="announcement-card">
          <div class="announcement-icon">
            <img src="assets/images/announcement-timeline-icon.svg" alt="Exclusive Announcement at RSA" class="announcement-icon-img">
          </div>
          <h3 class="announcement-title">Exclusive Announcement at RSA</h3>
          <p class="announcement-description">
            Our distinguished panel of judges will be announced at an exclusive event during the RSA Conference 2025.
          </p>
        </div>
      </div>
      
      <!-- 
      For future: Uncomment this when ready to reveal judges
      <div class="judges-grid">
        Judges cards will be displayed here when ready
      </div>
      -->
    </div>
  `;
  
  // Insert the judges content into the section
  judgesSection.innerHTML = judgesContent;
  
  // Additional DOM manipulation after insertion to ensure styles are applied
  document.querySelectorAll('.judges-section .announcement-title, .judges-section .section-title').forEach(element => {
    element.style.color = '#FFFFFF';
  });
  
  // Add a specific class to the section title for alignment with navbar
  const sectionTitle = judgesSection.querySelector('.section-title');
  if (sectionTitle) {
    sectionTitle.classList.add('navbar-aligned-title');
  }
  
  // Ensure the icons are styled with the light purple color from the design system
  const iconImages = judgesSection.querySelectorAll('.announcement-icon-img');
  iconImages.forEach(icon => {
    // Use the light purple color from the design system
    icon.style.filter = 'none'; // Reset any existing filters
    icon.style.color = '#AF92F8'; // Set light purple color using your design system variable
    // Force the SVG to use the light purple color
    icon.style.fill = '#AF92F8';
  });
};

export default initJudges;