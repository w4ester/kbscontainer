/**
 * Cyber UXcellence Awards - Judges Section Module with Bio Popup
 * Initializes and manages the judges section of the site with popup functionality
 */

const initJudges = () => {
  const judgesSection = document.getElementById('judges');
  
  if (!judgesSection) return;
  
  // Add the judges-section class for styling
  judgesSection.classList.add('judges-section');
  
  // Image cache to preload all judge images
  const imageCache = {};
  
  // Judge data with bios
  const judgeData = [
    {
      name: "Ron Gula",
      title: "President & Co-Founder, Gula Tech Adventures | Co-Founder, Tenable Networks",
      bio: "Ron Gula is a cybersecurity pioneer with over two decades of impact. He co-founded and led Tenable Networks as CEO, scaling it to $100M in revenue before its $3B IPO. Earlier, Ron developed Dragon, one of the first commercial intrusion detection systems, and served at NSA. Since 2017, he's supported startups as an advisor and investor.",
      image: "assets/Judges Headshots/RonPurple.png",
      popupImage: "assets/Judges Headshots/judges_ron_blacksvg_popupimage.svg"
    },
    {
      name: "Troy Wilkinson",
      title: "Field CISO at Upwind Security",
      bio: "Troy Wilkinson is a cybersecurity expert, entrepreneur, and former law enforcement officer. He led terrorism and cybercrime investigations, served as Global CISO at Interpublic Group, and co-founded Tego Cyber Inc. A global speaker and Amazon Best-Selling co-author, Troy advises startups and VCs, sharing insights through national conferences, media, and cybersecurity publications.",
      image: "assets/Judges Headshots/troyPurple.png",
      popupImage: "assets/Judges Headshots/judges_troy_blacksvg_popupimage.svg"
    },
    {
      name: "Malcolm Harkins",
      title: "Chief Security & Trust Officer, Hidden Layer | Former CISO Intel",
      bio: "Malcolm Harkins is Chief Security and Trust Officer at HiddenLayer and a recognized cybersecurity leader. He's held executive roles at Intel and Cylance, authored books on risk and security, and advises Congress and federal agencies. An award recipient and ICIT Fellow, he's also taught at UCLA and holds degrees from UC Irvine and UC Davis.",
      image: "assets/Judges Headshots/malcolmsvg.svg",
      popupImage: "assets/Judges Headshots/judges_malcom_blacksvg_popupimage.svg"
    },
    {
      name: "Rinki Sethi",
      title: "Chief Security & Strategy Officer, Upwind Security",
      bio: "Rinki Sethi is a cybersecurity executive with leadership roles at BILL, Twitter, Rubrik, IBM, and more. She serves on the board of Vaultree and advises startups as an angel investor. A frequent contributor to Forbes, Fortune, and WSJ, Rinki is also a global keynote speaker and advocate for diversity in cybersecurity.",
      image: "assets/Judges Headshots/rinkiPurplesvg.svg",
      popupImage: "assets/Judges Headshots/judges_rinki_blacksvg_popupimage.svg"
    },
    {
      name: "Damian Chung",
      title: "VP, Cyber Defense, Netskope",
      bio: "Damian Chung is VP of Cyber Defense at Netskope, leading global SOC, threat management, and AI-driven security initiatives. With 25+ years in cybersecurity, he previously led engineering at Dignity Health and built HIPAA-compliant cloud services in healthcare tech. Damian also heads Netskope's Customer Zero program and holds a master's from Arizona State University.",
      image: "assets/Judges Headshots/Damiansvgpurple.svg",
      popupImage: "assets/Judges Headshots/judges_damian_blacksvg_popupimage.svg"
    },
    {
      name: "Nick Shevelyov",
      title: "CEO & Managing Partner vCSO | Former CISO Silicon Valley Bank",
      bio: "Nick Shevelyov is founder of vCSO.ai and a seasoned cybersecurity executive with roles as CSO, CIO, and CISO, including at Silicon Valley Bank. He advises startups and PE firms, serves on advisory boards, and authored Cyber War…and Peace. A dynamic speaker, Nick integrates history and behavioral science into modern cybersecurity strategy.",
      image: "assets/Judges Headshots/nicksvgpurple.svg",
      popupImage: "assets/Judges Headshots/judges_nick_blacksvg_popupimage.svg"
    },
    {
      name: "Patricia Titus",
      title: "Field CISO, Abnormal AI",
      bio: "Patricia Titus is Field CISO at Abnormal AI and a veteran cybersecurity executive with leadership roles at DHS, Freddie Mac, Symantec, and Booking Holdings. Known for aligning security with business strategy, she drives risk management and digital transformation. Patricia serves on several boards, including Black Kite, Girl Scouts of Virginia, and Glasswing Ventures.",
      image: "assets/Judges Headshots/patriciasvgpruple.svg",
      popupImage: "assets/Judges Headshots/judges_patricia_blacksvg_popupimage.png"
    },
    {
      name: "Michael Baker",
      title: "CISO, DXC Technology",
      bio: "Michael Baker is Global CISO at DXC Technology, leading cyber risk for a $14B enterprise with 130,000 employees. With 24+ years of experience in defense, consulting, and government, he specializes in zero-trust, incident response, and strategic risk. Michael chairs the CapitalCISO Council and is a past CISO of the Year award winner.",
      image: "assets/Judges Headshots/michaelsvgpurple.svg",
      popupImage: "assets/Judges Headshots/judges_michael_blacksvg_popupimage.svg"
    },
    {
      name: "Peter Kilpe",
      title: "CEO, N2K Networks",
      bio: "Peter Kilpe is founder and CEO of N2K Networks, home to CyberWire, a leading cybersecurity podcast network. He delivers trusted intelligence to public and private sector leaders. Peter also leads N2K Certify, a global leader in performance-driven learning, offering certification practice tests and study tools to the world's largest training platforms.",
      image: "assets/Judges Headshots/petersvgpurple.svg",
      popupImage: "assets/Judges Headshots/judges_peter_blacksvg_popupimage.svg"
    },
    {
      name: "Alicia Lynch",
      title: "CISO, TD SYNNEX",
      bio: "Alicia Lynch, a retired U.S. Army Colonel, has over 30 years of experience in intelligence, security, and cyber operations. She's served as CISO at TD SYNNEX, SAIC, and Cognizant. Alicia advises on cybersecurity and privacy through roles with NVTC and the National Security Institute, and holds CISSP, CIPP, and an MBA from Maryland.",
      image: "assets/Judges Headshots/aliciasvgpurple.svg",
      popupImage: "assets/Judges Headshots/judges_alicia_blacksvg_popupimage.svg"
    },
    {
      name: "Meagan Petri",
      title: "Director, Creative & Design, Mindgrub Technologies",
      bio: "Meagan Petri is Director of Creative & Design at Mindgrub, with 19+ years of experience delivering award-winning digital solutions. She leads cross-functional teams in UX/UI, content strategy, and design. Her client work spans Dragos to NASA. Meagan holds a BA from UMBC and has taught UX/UI design as an adjunct professor.",
      image: "assets/Judges Headshots/megansvgpurple.svg",
      popupImage: "assets/Judges Headshots/judges_megan_blacksvg_popupimage.svg"
    }
  ];
  
  // Preload all judge popup images
  const preloadImages = () => {
    judgeData.forEach(judge => {
      const img = new Image();
      img.src = judge.popupImage || judge.image;
      imageCache[judge.name] = img;
    });
  };
  
  // Create HTML for judges grid
  const generateJudgesGrid = () => {
    let judgesGridHTML = '';

    judgeData.forEach(judge => {
      judgesGridHTML += `
        <div class="judge-card" data-judge="${judge.name.replace(/\s+/g, '-').toLowerCase()}">
          <div class="judge-image">
            <img src="${judge.image}" alt="${judge.name}" loading="lazy">
          </div>
          <div class="judge-info">
            <h3 class="judge-name">${judge.name}</h3>
            <div class="judge-location">
              <img src="assets/Judges Headshots/judgesBioicon.svg" alt="Location">
              <span>${judge.title}</span>
            </div>
            <button class="read-bio">Read Bio</button>
          </div>
        </div>
      `;
    });
    
    return judgesGridHTML;
  };
  
  // Create judges content
  const judgesContent = `
    <div class="container">
      <div class="section-header">
        <h2>Meet the Judges</h2>
      </div>

      <div class="judges-grid">
        ${generateJudgesGrid()}
      </div>
    </div>
    
    <div class="judge-bio-overlay">
      <div class="judge-bio-popup">
        <div class="judge-bio-close"></div>
        <div class="judge-bio-image">
          <img src="" alt="">
        </div>
        <div class="judge-bio-content">
          <h2 class="judge-bio-name"></h2>
          <p class="judge-bio-title"></p>
          <div class="judge-bio-text"></div>
        </div>
      </div>
    </div>
  `;
  
  // Insert the judges content into the section
  judgesSection.innerHTML = judgesContent;
  
  // Setup event listeners for judge cards
  const setupEventListeners = () => {
    // Get elements
    const judgeCards = document.querySelectorAll('.judge-card');
    const bioOverlay = document.querySelector('.judge-bio-overlay');
    const bioPopup = document.querySelector('.judge-bio-popup');
    const bioClose = document.querySelector('.judge-bio-close');
    const bioImage = bioPopup.querySelector('.judge-bio-image img');
    const bioName = bioPopup.querySelector('.judge-bio-name');
    const bioTitle = bioPopup.querySelector('.judge-bio-title');
    const bioText = bioPopup.querySelector('.judge-bio-text');
    
    // Handle judge card click
    judgeCards.forEach(card => {
      card.addEventListener('click', function() {
        // Find the judge data
        const judgeName = card.getAttribute('data-judge');
        const judge = judgeData.find(j => j.name.replace(/\s+/g, '-').toLowerCase() === judgeName);
        
        if (judge) {
          // Add loading state to prevent flash of previous image
          bioImage.style.opacity = '0';
          bioImage.src = ''; // Clear the current image immediately
          
          // Use cached image if available, otherwise load new one
          const cachedImage = imageCache[judge.name];
          if (cachedImage && cachedImage.complete) {
            bioImage.src = cachedImage.src;
          } else {
            bioImage.src = judge.popupImage || judge.image;
          }
          
          bioImage.alt = judge.name;
          bioName.textContent = judge.name;
          bioTitle.textContent = judge.title;
          bioText.textContent = judge.bio;
          
          // Fade in the image once it's loaded
          bioImage.onload = () => {
            bioImage.style.opacity = '1';
          };
          
          // If image is already loaded (from cache), show it immediately
          if (bioImage.complete && bioImage.naturalHeight !== 0) {
            bioImage.style.opacity = '1';
          }

          // Let CSS handle the styling
          setTimeout(() => {
            // Get the screen size to determine styling
            const isMobile = window.innerWidth <= 576;
            const isVerySmallMobile = window.innerWidth <= 400;

            // Set appropriate object-fit based on screen size
            const imageContainer = bioPopup.querySelector('.judge-bio-image');

            if (isMobile) {
              // On mobile, use contain to ensure the entire image is visible but smaller
              bioImage.style.objectFit = "contain";
              bioImage.style.objectPosition = "center";

              // Add padding (less for very small screens)
              if (isVerySmallMobile) {
                bioImage.style.padding = "5px";
              } else {
                bioImage.style.padding = "8px";
              }

              // Make sure container has brand black background
              if (imageContainer) {
                imageContainer.style.backgroundColor = "#231F20";
                imageContainer.style.display = "flex";
                imageContainer.style.alignItems = "center";
                imageContainer.style.justifyContent = "center";
              }
            } else {
              // On larger screens, like in the mockup
              bioImage.style.objectFit = "cover";
              bioImage.style.objectPosition = "center 25%"; // Position to show face better
              bioImage.style.padding = "0";

              // For desktop, make sure the container is properly styled like the mockup
              if (imageContainer) {
                imageContainer.style.backgroundColor = "#231F20";
                imageContainer.style.display = "block";
                imageContainer.style.borderTopLeftRadius = "12px";
                imageContainer.style.borderBottomLeftRadius = "12px";
              }
            }

            // Set border radius to match container
            const imageType = bioImage.src.toLowerCase().endsWith('.png') ? 'png' : 'svg';
            bioImage.dataset.type = imageType; // Store image type for debugging if needed

            // Ensure scroll is at the top when opening
            const contentArea = bioPopup.querySelector('.judge-bio-content');
            if (contentArea) {
              contentArea.scrollTop = 0;
            }
          }, 10);

          // Show the overlay
          bioOverlay.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
        }
      });
    });
    
    // Close popup when clicking the close button
    bioClose.addEventListener('click', function() {
      bioOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close popup when clicking outside the popup
    bioOverlay.addEventListener('click', function(e) {
      if (e.target === bioOverlay) {
        bioOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    });
    
    // Close popup with escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && bioOverlay.classList.contains('active')) {
        bioOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    });
  };
  
  // Preload all images to avoid flashing
  preloadImages();
  
  // Initialize event listeners after content is inserted
  setupEventListeners();

  // Check for mobile view and ensure proper styling
  const checkMobileView = () => {
    const isMobile = window.innerWidth <= 576;
    const judgeCards = document.querySelectorAll('.judge-card');
    
    if (isMobile) {
      // Update mobile styling
      judgeCards.forEach(card => {
        // Ensure proper layout for mobile
        card.style.display = 'flex';
        card.style.flexDirection = 'row';
        card.style.alignItems = 'center';
        card.style.textAlign = 'left';
      });
      
      // Mobile styles are handled via CSS, no need to adjust the text alignment
    } else {
      // Reset for desktop/tablet
      judgeCards.forEach(card => {
        card.style.display = '';
        card.style.flexDirection = '';
        card.style.alignItems = '';
        card.style.textAlign = '';
      });
    }
  };
  
  // Run initially
  checkMobileView();
  
  // Update on resize
  window.addEventListener('resize', checkMobileView);
};

export default initJudges;