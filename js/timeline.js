/**
 * Cyber UXcellence Awards - Timeline Section Module
 * Initializes and manages the timeline section of the site
 */

const initTimeline = () => {
  const timelineSection = document.getElementById('timeline');
  
  if (!timelineSection) return;
  
  // Add the timeline-section class for styling
  timelineSection.classList.add('timeline-section');
  
  // Create the timeline content
  const timelineContent = `
    <div class="container">
      <div class="section-header">
        <h2>Event Timeline</h2>
      </div>
      
      <div class="timeline-container">
        <div class="timeline-line"></div>
        
        <div class="timeline-item timeline-item-left">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-content">
            <div class="timeline-card">
              <span class="timeline-date">April 24, 2025</span>
              <h3 class="timeline-title">Nominations Open</h3>
              <p class="timeline-description">Submissions accepted from product managers, chief product officers, product marketing teams, and all professionals responsible for developing cybersecurity products.</p>
            </div>
          </div>
        </div>
        
        <div class="timeline-item timeline-item-right">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-content">
            <div class="timeline-card">
              <span class="timeline-date">April 29, 2025</span>
              <h3 class="timeline-title">Judges Announced</h3>
              <p class="timeline-description">Announcement of judges at an exclusive event during RSA Conference in San Francisco.</p>
            </div>
          </div>
        </div>
        
        <div class="timeline-item timeline-item-left">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-content">
            <div class="timeline-card">
              <span class="timeline-date">July 10, 2025</span>
              <h3 class="timeline-title">Nominations Close</h3>
              <p class="timeline-description">Final deadline for all award submissions.</p>
            </div>
          </div>
        </div>
        
        <div class="timeline-item timeline-item-right">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div class="timeline-content">
            <div class="timeline-card">
              <span class="timeline-date">August 6, 2025</span>
              <h3 class="timeline-title">Winners Announced</h3>
              <p class="timeline-description">Winners revealed at a special ceremony during Black Hat USA 2025 in Las Vegas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Insert the timeline content into the section
  timelineSection.innerHTML = timelineContent;
  
  // Add mobile adjustments
  const handleMobileAdjustments = () => {
    const timelineMarkers = timelineSection.querySelectorAll('.timeline-marker');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      timelineMarkers.forEach(marker => {
        marker.style.transform = 'translateX(-4px)'; // Center the dot on the line
      });
    } else {
      timelineMarkers.forEach(marker => {
        marker.style.transform = 'translateX(-50%)'; // Desktop position
      });
    }
  };
  
  // Run on init
  handleMobileAdjustments();
  
  // Run on resize
  window.addEventListener('resize', handleMobileAdjustments);
};

export default initTimeline;