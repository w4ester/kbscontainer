/**
 * Cyber UXcellence Awards - Judges Section Module
 * Initializes and manages the judges section of the site
 */

const initJudges = () => {
  const judgesSection = document.getElementById('judges');
  
  if (!judgesSection) return;
  
  // Add the judges-section class for styling
  judgesSection.classList.add('judges-section');
  
  // Create the judges content with inline styles for critical elements
  const judgesContent = `
    <div class="container">
      <h2 class="section-title" style="color: #FFFFFF;">Meet Our Distinguished Panel of Judges</h2>
      <p class="section-subtitle">Our panel brings together cybersecurity leaders, UX experts, and industry innovators to evaluate the most user-friendly security products.</p>
      
      <div class="judges-grid">
        <!-- Ron Gula -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/ronheadshot.png" alt="Ron Gula">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Ron Gula</h3>
          <p class="judge-title">President and Co-Founder Gula Tech Adventures<br>Co-Founder Tenable Networks</p>
          <p class="judge-description">Since 2017, Ron has been a key figure in cybersecurity, investing in start-ups and supporting nonprofits. He co-founded and led Tenable Network Security as CEO, growing it to 20,000 customers and $100M in revenue.</p>
        </div>
        
        <!-- Troy Wilkinson -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Troy Headshot 2025.jpeg" alt="Troy Wilkinson">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Troy Wilkinson</h3>
          <p class="judge-title">Field CISO at Upwind Security</p>
          <p class="judge-description">Troy started his career in law enforcement, leading a Joint Terrorism Task Force and specializing in cyber crimes. As former Global CISO at Interpublic Group, he co-founded Tego Cyber Inc. and serves on its Board.</p>
        </div>
        
        <!-- Malcolm Harkins -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Malcolm Harkins - Headhsot.jpg" alt="Malcolm Harkins">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Malcolm Harkins</h3>
          <p class="judge-title">Chief Security & Trust Officer, Hidden Layer<br>Former CISO Intel</p>
          <p class="judge-description">Malcolm has over 20 years in info security with leadership roles at Intel and Cylance. He's testified before the FTC and U.S. Senate and is a Fellow at the Institute for Critical Infrastructure Technology.</p>
        </div>
        
        <!-- Rinki Sethi -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Rinki Sethi headshot.JPG" alt="Rinki Sethi">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Rinki Sethi</h3>
          <p class="judge-title">Chief Security & Strategy Officer, Upwind Security</p>
          <p class="judge-description">Rinki is a cybersecurity leader with executive experience at companies like BILL, Twitter, Rubrik, IBM, and Palo Alto Networks. She serves on the board of Vaultree and is an active angel investor and advisor to cybersecurity startups.</p>
        </div>
        
        <!-- Damian Chung -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Damian Chung Headshot.png" alt="Damian Chung">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Damian Chung</h3>
          <p class="judge-title">Business Information Security Officer, Netscope</p>
          <p class="judge-description">With 25+ years of experience, Damian oversees global SOC and Threat Management at Netskope. He leads the Netskope Customer Zero program and focuses on AI integrations to enhance security response and reduce risk.</p>
        </div>
        
        <!-- Nick Shevelyov -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Nick Shevelyov-Photo.png" alt="Nick Shevelyov">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Nick Shevelyov</h3>
          <p class="judge-title">CEO & Managing Partner vCSO<br>Former CISO Silicon Valley Bank</p>
          <p class="judge-description">Nick is the founder of vCSO.ai and author of 'Cyber War…and Peace.' With experience as CSO, CPO, CIO, and CISO, he's helped companies like Silicon Valley Bank grow globally while advising next-gen tech companies.</p>
        </div>
        
        <!-- Patricia Titus -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Patti Titus Headshot.jpeg" alt="Patricia Titus">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Patricia Titus</h3>
          <p class="judge-title">Field CISO, Abnormal AI</p>
          <p class="judge-description">Patricia has led security initiatives at top organizations including DHS, Freddie Mac, and Symantec. She specializes in risk management, digital transformation, and AI-driven security, aligning cybersecurity with business strategy.</p>
        </div>
        
        <!-- Michael Baker -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Michael Baker.jpg" alt="Michael Baker">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Michael Baker</h3>
          <p class="judge-title">CISO, DXC Technology</p>
          <p class="judge-description">As Global CISO for DXC Technology, Michael oversees cyber risk management for a $14B enterprise with 130,000 employees. He chairs the CapitalCISO Council and was a finalist for the 2024 Capital CISO of the Year Award.</p>
        </div>
        
        <!-- Peter Kilpe -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Peter Kilpe Headshot.jpg" alt="Peter Kilpe">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Peter Kilpe</h3>
          <p class="judge-title">CEO, N2K Networks</p>
          <p class="judge-description">Peter is the founder and CEO of N2K Networks, a hub for news, insights, and learning in cybersecurity. Under his leadership, N2K CyberWire has become the premier B2B podcast network in the industry.</p>
        </div>
        
        <!-- Alicia Lynch -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Alicia Lynch new headshot.jpg" alt="Alicia Lynch">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Alicia Lynch</h3>
          <p class="judge-title">CISO, TD SYNNEX</p>
          <p class="judge-description">A retired U.S. Army Colonel with 30+ years in intelligence and cybersecurity, Alicia has held executive roles at TD SYNNEX, Cognizant, and SAIC. She's active in industry groups and holds an MBA and certifications in CISSP and CIPP.</p>
        </div>
        
        <!-- Meagan Petri -->
        <div class="judge-card">
          <div class="judge-image">
            <img src="assets/Judges Headshots/Meagan Headshot.jpg" alt="Meagan Petri">
          </div>
          <h3 class="judge-name" style="color: #FFFFFF;">Meagan Petri</h3>
          <p class="judge-title">Director, Creative & Design, Mindgrub Technologies</p>
          <p class="judge-description">With 19+ years of experience, Meagan leads Mindgrub's team of designers and UX/UI professionals. She has created award-winning apps, websites, and campaigns for clients including Dragos, NASA Space Apps, Marriott, and Under Armour.</p>
        </div>
        
        <!-- More Judges Coming Soon Card -->
        <div class="announcement-card">
          <div class="announcement-icon">📣</div>
          <h3 style="color: #FFFFFF;">Become a Judge</h3>
          <p>Are you a cybersecurity or UX leader interested in joining our distinguished panel of judges? We'd love to hear from you.</p>
          <a href="#nominate" class="cta-button nominate-btn">Contact Us</a>
        </div>
      </div>
    </div>
  `;
  
  // Insert the judges content into the section
  judgesSection.innerHTML = judgesContent;
  
  // Additional DOM manipulation after insertion to ensure styles are applied
  document.querySelectorAll('.judge-name, .announcement-card h3, .judges-section .section-title').forEach(element => {
    element.style.color = '#FFFFFF';
  });
};

export default initJudges;