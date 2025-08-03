/**
 * Cyber UXcellence Awards - About Section Module
 * Initializes and manages the about section of the site
 */

const initAbout = () => {
  const aboutSection = document.getElementById('about');
  
  if (!aboutSection) return;
  
  // Create the about content
  const aboutContent = `
    <div class="container">
      <h2 class="section-title">About The Awards</h2>
      
      <div class="about-content">
        <div class="about-text">
          <p class="about-description">The Cyber UXcellence Awards recognize cybersecurity products that set the standard for exceptional user experience (UX) and user interface (UI).</p>
          
          <p>Security tools should be powerful, but they also need to be intuitive, efficient, and easy to use. Despite this necessity, many in the industry still overlook or undervalue how good UX and UI design can significantly enhance security. If a product is difficult to navigate, slows workflows, or requires extensive training, it risks being underutilized. Great UX ensures security solutions are adopted, trusted, and effective.</p>
          
          <p>These awards highlight cybersecurity products that excel in:</p>
          
          <div class="feature-item">
            <div class="feature-text">
              <h3>Usability</h3>
              <p>– Intuitive design that simplifies security, not complicates it</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-text">
              <h3>Adoption</h3>
              <p>– Seamless user experiences that drive engagement and minimize friction</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-text">
              <h3>Impact</h3>
              <p>– UX that enhances security outcomes and business efficiency</p>
            </div>
          </div>
          
          <p class="mindgrub-creators">As the creators of the awards, <span class="mindgrub-highlight">Mindgrub</span>, a technology innovation agency specializing in product UX, developed the Cyber UXcellence Awards to raise the bar for the entire industry, recognizing that security should be both powerful and user-friendly.</p>
        </div>
      </div>
    </div>
    
    <div class="ceo-quote-container">
      <div class="container">
        <div class="ceo-quote">
          <div class="quote-content">
            <div class="quote-line"></div>
            <div class="quote-text-container">
              <div class="quote-sidebar">&#8220;</div>
              <p><span style="word-spacing: 0.05em;">Cybersecurity</span> is most powerful when it safeguards data and empowers every user through intentional, user-centered design. By championing UX best practices and weaving security seamlessly into every product experience from the outset, we create trusted tools that inspire confidence and drive meaningful transformation for organizations, client systems, and our daily lives.</p>
              <p class="quote-attribution">Todd Marks - CEO, Mindgrub Technologies</p>
            </div>
          </div>
          <div class="ceo-image">
            <img src="assets/images/tmarkimage.png" alt="Todd Marks, CEO Mindgrub Technologies" />
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Insert the about content into the section
  aboutSection.innerHTML = aboutContent;
};

export default initAbout;