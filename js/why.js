/**
 * Cyber UXcellence Awards - Why Nominate Section Module
 * Initializes and manages the why nominate section of the site
 */

const initWhy = () => {
  const whySection = document.getElementById('why-nominate');
  
  if (!whySection) return;
  
  // Add the why-nominate-section class for styling
  whySection.classList.add('why-nominate-section');
  
  // Create the why nominate content
  const whyContent = `
    <div class="container">
      <h2 class="section-title">Why Nominate Your Product?</h2>
      <p class="section-subtitle">Stand out in a crowded market by showcasing your commitment to exceptional user experience.</p>
      
      <div class="benefits-grid">
        <!-- Benefit 1 -->
        <div class="benefit-item">
          <div class="benefit-icon">
            <img src="assets/images/whynominateIcons/Recognition.svg" alt="Industry Recognition icon">
          </div>
          <div class="benefit-content">
            <h3>Industry Recognition & Credibility</h3>
            <p>Stand out as a leader in cybersecurity UX and earn validation from industry experts and peers. Winning reinforces your product's reputation for innovation, trustworthiness, and real-world effectiveness.</p>
          </div>
        </div>
        
        <!-- Benefit 2 -->
        <div class="benefit-item">
          <div class="benefit-icon">
            <img src="assets/images/whynominateIcons/Competitive Advantage.svg" alt="Competitive Advantage icon">
          </div>
          <div class="benefit-content">
            <h3>Marketing & Competitive Advantage</h3>
            <p>Leverage your award or finalist status as a powerful differentiator. Use the Cyber UXcellence Award seal in marketing, sales, and PR to showcase your product's superior UX in a crowded marketplace.</p>
          </div>
        </div>
        
        <!-- Benefit 3 -->
        <div class="benefit-item">
          <div class="benefit-icon">
            <img src="assets/images/whynominateIcons/Media Exposure.svg" alt="Media Exposure icon">
          </div>
          <div class="benefit-content">
            <h3>Media Exposure & Visibility</h3>
            <p>Gain extensive coverage before, during, and after Black Hat 2025 through press releases, major security publications, and amplified social media exposure, ensuring your product reaches the right audience.</p>
          </div>
        </div>
        
        <!-- Benefit 4 -->
        <div class="benefit-item">
          <div class="benefit-icon">
            <img src="assets/images/whynominateIcons/Industry Benchmark.svg" alt="Industry Benchmark icon">
          </div>
          <div class="benefit-content">
            <h3>Customer Confidence & Industry Benchmark</h3>
            <p>Winning signals that your solution isn't just secure, it's built for usability and adoption. The award sets a benchmark for UX excellence, reassuring customers that your product leads the way in user-first security.</p>
          </div>
        </div>
      </div>
      
      <!-- Nomination Banner for 2026 -->
      <div class="nomination-banner">
        <h3>Ready to Nominate for 2026?</h3>
        <p>Be among the first to nominate your product for the 2026 Cyber UXcellence Awards.</p>
        <button class="cta-button nominate-cta-button" id="nominateBtn2026">
          Nominate for 2026
        </button>
      </div>
    </div>
  `;
  
  // Insert the why nominate content into the section
  whySection.innerHTML = whyContent;
  
  // Add click handler for the nominate button to open modal
  const nominateBtn = document.getElementById('nominateBtn2026');
  if (nominateBtn) {
    nominateBtn.addEventListener('click', () => {
      const modal = document.querySelector('.nomination-modal-2026');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      }
    });
  }
  
  // Add close functionality for the 2026 modal
  const modal2026 = document.querySelector('.nomination-modal-2026');
  if (modal2026) {
    const closeBtn = modal2026.querySelector('.modal-close');
    const overlay = modal2026.querySelector('.modal-overlay');
    
    const closeModal = () => {
      modal2026.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
  }
};

export default initWhy;