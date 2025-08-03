/**
 * Cyber UXcellence Awards - Sponsorship Section Module
 * Initializes and manages the sponsorship section of the site
 */

const initSponsorship = () => {
  const sponsorshipSection = document.getElementById('sponsorship');
  
  if (!sponsorshipSection) return;
  
  // Add the sponsorship-section class for styling
  sponsorshipSection.classList.add('sponsorship-section');
  
  // Create the sponsorship content with mailto link
  const sponsorshipContent = `
    <div class="container">
      <h2>Learn About Sponsorship Opportunities</h2>
      <p>Interested in sponsoring the Cyber UXcellence Awards? Contact us to learn about our sponsorship packages and benefits.</p>
      <a href="mailto:cyberuxcellence@mindgrub.com" class="cta-button sponsor-cta-button">Contact Us</a>
    </div>
  `;
  
  // Insert the sponsorship content into the section
  sponsorshipSection.innerHTML = sponsorshipContent;
};

export default initSponsorship;