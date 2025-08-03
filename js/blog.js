/**
 * Cyber UXcellence Awards - Blog Page JavaScript
 * Handles blog page functionality, mobile menu, and dynamic blog post loading
 */

// Initialize blog posts loading
const initBlogPosts = async () => {
  const loadingElement = document.getElementById('blogLoading');
  const postsContainer = document.getElementById('blogPostsContainer');
  const errorElement = document.getElementById('blogError');
  
  try {
    // Show loading state
    loadingElement.style.display = 'block';
    
    // Fetch blog posts from JSON
    const response = await fetch('./data/blog-posts.json');
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await response.json();
    
    // Filter published posts and sort by date (newest first)
    const publishedPosts = data.posts
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Hide loading state
    loadingElement.style.display = 'none';
    
    if (publishedPosts.length === 0) {
      postsContainer.innerHTML = '<div class="no-posts">No blog posts available yet.</div>';
      return;
    }
    
    // Generate HTML for posts
    postsContainer.innerHTML = publishedPosts.map(post => createPostHTML(post)).join('');
    
  } catch (error) {
    console.error('Error loading blog posts:', error);
    
    // Hide loading state and show error
    loadingElement.style.display = 'none';
    errorElement.style.display = 'block';
  }
};

// Create HTML for a single blog post
const createPostHTML = (post) => {
  const postDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Convert basic markdown to HTML
  const content = post.content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
  
  const featuredClass = post.featured ? 'featured' : '';
  const categoryClass = post.category ? `category-${post.category}` : '';
  
  return `
    <article class="blog-post ${featuredClass} ${categoryClass}">
      ${post.featured ? '<div class="featured-badge">Featured</div>' : ''}
      <div class="post-meta">
        <div class="post-date">${postDate}</div>
        ${post.author ? `<div class="post-author">By ${post.author}</div>` : ''}
        ${post.category ? `<div class="post-category">${post.category}</div>` : ''}
      </div>
      <h2 class="post-title">${post.title}</h2>
      ${post.excerpt ? `<p class="post-excerpt">${post.excerpt}</p>` : ''}
      <div class="post-content">
        <p>${content}</p>
      </div>
    </article>
  `;
};

// Initialize mobile menu functionality
const initMobileMenu = () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-links a');
  
  if (menuToggle && mobileMenu) {
    // Open menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close menu
    if (closeMenu) {
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
      });
    }
    
    // Close menu when clicking a link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
};

// Initialize footer
const initFooter = () => {
  const footer = document.querySelector('footer');
  
  if (!footer) return;
  
  // Create the footer content
  const footerContent = `
    <div class="footer-main-content container">  
      <div class="footer-content-left">
        <p class="powered-by-text">Powered by:</p>
        <a href="https://www.mindgrub.com/" target="_blank" rel="noopener" class="mindgrub-logo-link">
          <img src="../assets/images/useMindgrubLogoFooter.svg" alt="Mindgrub" class="mindgrub-footer-logo">
        </a>
        <p class="footer-description">
          An award‑winning firm specializing in digital<br>
          innovation, UX/UI design and custom software<br>
          development for the cybersecurity sector.
        </p>
        <a href="https://www.mindgrub.com" target="_blank" rel="noopener" class="visit-mindgrub">Visit Mindgrub</a>
      </div>

      <div class="footer-content-right">
        <img src="../assets/images/newuxcellenceorangeuseclean.svg" alt="Cyber UXcellence Awards" class="footer-awards-logo">
        <div class="footer-social">
          <span class="follow-us-text">Follow us!</span>
          <a href="https://www.linkedin.com/showcase/cyber-uxcellence/" target="_blank" rel="noopener" class="social-icon-link" aria-label="LinkedIn">
            <img src="../assets/images/LinkedIn.svg" alt="LinkedIn" class="linkedin-icon">
          </a>
        </div>
      </div>
    </div> 
    
    <div class="copyright-container">
      <p class="copyright">
        <span>© 2025 Mindgrub. All rights reserved.</span> 
        <a href="https://mindgrub.com/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>
        <a href="https://mindgrub.com/terms-of-use/" target="_blank" rel="noopener">Terms of Service</a>
      </p>
    </div>
  `;
  
  // Insert the footer content
  footer.innerHTML = footerContent;
};

// Initialize navbar scroll effect
const initNavbarScroll = () => {
  const navbar = document.querySelector('.main-nav');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScroll();
  initFooter();
  initBlogPosts();
  
  console.log('Blog page initialized');
});