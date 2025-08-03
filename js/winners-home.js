/**
 * Cyber UXcellence Awards - Winners Section for Home Page
 * Handles winners display with toggle functionality
 */

// Toggle flag - Change to true on August 6, 2025
const REVEAL_WINNERS = false;

// Winners data for 2025
const winnersData2025 = [
  {
    category: 'best-overall',
    categoryKey: 'best-overall-late',
    categoryName: 'BEST OVERALL UX - LATE STAGE',
    winner: {
      company: 'RedSeal',
      companyDisplay: 'REDSEAL',
      url: 'https://www.redseal.net/',
      logo: 'winPageAssestFolder/LogosCyberUXcellenceSubmissons2025/RedSeal Logo.png'
    }
  },
  {
    category: 'best-overall',
    categoryKey: 'best-overall-mid',
    categoryName: 'BEST OVERALL UX - MID STAGE',
    winner: {
      company: 'SOCRadar',
      companyDisplay: 'SOCRADAR',
      url: '#',
      logo: 'winPageAssestFolder/LogosCyberUXcellenceSubmissons2025/SOCRadar Logo 2 (1).svg'
    }
  },
  {
    category: 'best-overall',
    categoryKey: 'best-overall-early',
    categoryName: 'BEST OVERALL UX - EARLY STAGE',
    winner: {
      company: 'Pixee',
      companyDisplay: 'PIXEE',
      url: 'https://www.pixee.ai/',
      logo: 'winPageAssestFolder/LogosCyberUXcellenceSubmissons2025/Pixee Logo (1).svg'
    }
  },
  {
    category: 'data-visualization',
    categoryKey: 'data-visualization',
    categoryName: 'BEST USE OF DATA VISUALIZATION',
    winner: {
      company: 'RedSeal',
      companyDisplay: 'REDSEAL',
      url: 'https://www.redseal.net/',
      logo: 'winPageAssestFolder/LogosCyberUXcellenceSubmissons2025/RedSeal Logo.png'
    }
  },
  {
    category: 'intuitive-interface',
    categoryKey: 'intuitive-interface',
    categoryName: 'MOST INTUITIVE USER INTERFACE',
    winner: {
      company: 'Pixee',
      companyDisplay: 'PIXEE',
      url: 'https://www.pixee.ai/',
      logo: 'winPageAssestFolder/LogosCyberUXcellenceSubmissons2025/Pixee Logo (1).svg'
    }
  },
  {
    category: 'mobile-security',
    categoryKey: 'mobile-security',
    categoryName: 'BEST MOBILE SECURITY UX',
    winner: {
      company: 'Beyond Identity',
      companyDisplay: 'BEYOND IDENTITY',
      url: 'https://www.beyondidentity.com/',
      logo: 'winPageAssestFolder/LogosCyberUXcellenceSubmissons2025/Beyond Identity Logo.svg'
    }
  },
  {
    category: 'accessibility',
    categoryKey: 'accessibility',
    categoryName: 'BEST ACCESSIBILITY & INCLUSIVE UX',
    isHonorableMention: true,
    winner: {
      company: 'Dataminr',
      companyDisplay: 'DATAMINR',
      url: '#',
      logo: 'winPageAssestFolder/LogosCyberUXcellenceSubmissons2025/Dataminr Logo.png'
    }
  }
];

// Initialize winners section
const initWinnersSection = () => {
  const heroSection = document.getElementById('hero');
  const categoriesSection = document.getElementById('categories');
  
  if (!heroSection || !categoriesSection) return;
  
  // Create winners section HTML
  const winnersSection = document.createElement('section');
  winnersSection.id = 'winners';
  winnersSection.className = 'winners-section';
  winnersSection.setAttribute('data-revealed', REVEAL_WINNERS);
  
  // Only show if winners are revealed
  if (!REVEAL_WINNERS) {
    winnersSection.style.display = 'none';
    return;
  }
  
  winnersSection.innerHTML = `
    <div class="winners-container">
      <div class="section-header">
        <h2>2025 Award Winners</h2>
        <p class="section-subtitle">Celebrating excellence in cybersecurity user experience design</p>
      </div>
      
      <div class="winners-announcement">
        <h3>Winners Announced at Black Hat USA 2025</h3>
        <p>August 6, 2025 • Las Vegas, Nevada</p>
      </div>
      
      <div class="winners-grid">
        ${generateWinnerCards()}
      </div>
      
      <div class="winners-gallery">
        <div class="gallery-header">
          <h3>Awards Ceremony Gallery</h3>
          <p>Black Hat USA 2025 • Las Vegas</p>
        </div>
        <div class="gallery-placeholder">
          <p>Professional event photography coming August 7, 2025</p>
          <p style="margin-top: 1rem; font-size: 0.875rem;">Interactive gallery featuring all finalists and award ceremony highlights</p>
        </div>
      </div>
    </div>
  `;
  
  // Insert after categories section
  categoriesSection.parentNode.insertBefore(winnersSection, categoriesSection.nextSibling);
};

// Generate winner cards HTML
const generateWinnerCards = () => {
  return winnersData2025.map((winner, index) => {
    const cardClass = index % 2 === 0 ? 'winner-card' : 'winner-card dark';
    const winnerBadge = winner.isHonorableMention ? 'HONORABLE MENTION' : 'WINNER';
    
    return `
      <div class="${cardClass}" data-category="${winner.category}">
        <div class="winner-card-content">
          <div class="card-header">
            <div class="award-label">
              <img src="assets/images/newuxcellenceorangeuseclean.svg" alt="">
              CYBER UXCELLENCE AWARDS
            </div>
            <div class="winner-year">2025</div>
            <div class="winner-badge">${winnerBadge}</div>
          </div>
          
          <div class="company-section">
            <img src="${winner.winner.logo}" alt="${winner.winner.company}" class="company-logo" onerror="this.style.display='none'">
            <h3 class="company-name">${winner.winner.companyDisplay}</h3>
          </div>
          
          <div class="category-box">
            <p class="category-name">${winner.categoryName}</p>
          </div>
          
          <a href="${winner.winner.url}" target="_blank" rel="noopener" class="visit-btn">VISIT SITE</a>
        </div>
      </div>
    `;
  }).join('');
};

// Export for use in main.js
export default initWinnersSection;