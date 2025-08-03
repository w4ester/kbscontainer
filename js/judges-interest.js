/**
 * Cyber UXcellence Awards - Judge Interest Section Module
 * Manages the judge interest capture section
 */

const initJudgeInterest = () => {
  const judgeInterestSection = document.getElementById('judge-interest');
  
  if (!judgeInterestSection) return;
  
  // Add the judge-interest-section class for styling
  judgeInterestSection.classList.add('judge-interest-section');
  
  // Create the judge interest content with sponsorship-style layout
  const judgeInterestContent = `
    <div class="container">
      <h2>Become a Judge for 2026</h2>
      <p>Join our distinguished panel of cybersecurity and UX experts to evaluate the next generation of security solutions.</p>
      <button class="cta-button judge-cta-button" id="judgeInterestBtn">
        Express Interest
      </button>
      <!-- HubSpot form will be inserted here when provided by client -->
      <div id="judgeInterestForm" style="display: none;">
        <!-- Placeholder for HubSpot embed code -->
        <div style="padding: 2rem; background: #f0f0f0; border-radius: 8px; margin-top: 2rem;">
          <p>HubSpot judge interest form will be embedded here</p>
        </div>
      </div>
    </div>
  `;
  
  // Insert the content into the section
  judgeInterestSection.innerHTML = judgeInterestContent;
  
  // Add click handler for the button
  const judgeBtn = document.getElementById('judgeInterestBtn');
  if (judgeBtn) {
    judgeBtn.addEventListener('click', () => {
      const form = document.getElementById('judgeInterestForm');
      if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
      }
    });
  }
};

export default initJudgeInterest;