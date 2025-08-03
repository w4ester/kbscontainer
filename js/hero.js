/**
 * Cyber UXcellence Awards - Hero Section Module
 * Initializes and manages the hero section of the site
 */

const initHero = () => {
  const heroSection = document.getElementById('hero');
  
  if (!heroSection) return;
  
  // Create the hero content with notification bar
  const heroContent = `
    <div class="nominations-notification-bar">
      <div class="notification-content">
        <span class="notification-text">Nominations Closed - Stay tuned for the Winners announcement at Black Hat USA 2025!</span>
      </div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Recognizing Excellence in Cybersecurity Product User Experience</h1>
        <p class="hero-description">The Cyber UXcellence Awards celebrate teams creating intuitive, user-friendly and effective security products.</p>
        <p>Follow us on <a href="https://www.linkedin.com/showcase/cyber-uxcellence/" target="_blank" class="linkedin-link" style="color: #ff6b35; text-decoration: underline;">LinkedIn</a> for the latest updates.</p>
      </div>
      <div class="hero-bg-shape"></div>
    </div>
  `;
  
  // Insert the hero content into the section
  heroSection.innerHTML = heroContent;
};

export default initHero;