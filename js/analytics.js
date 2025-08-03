/**
 * Analytics and Cookie Consent Functionality
 * Handles Google Analytics initialization and cookie consent
 */

// Analytics configuration
// Replace these placeholder values with actual IDs from Mindgrub
const ANALYTICS_CONFIG = {
  googleAnalyticsId: 'G-HX9FFQ7HWW', // GA4 measurement ID
  cookieExpiration: 365 // Days
};

// Cookie consent handler
export function initCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptButton = document.getElementById('cookieAccept');
  const declineButton = document.getElementById('cookieDecline');
  
  if (!cookieConsent || !acceptButton || !declineButton) return;
  
  // Check if consent was already given
  const hasConsent = getCookie('cookie_consent');
  
  if (hasConsent === null) {
    // Show the consent banner if no decision has been made yet
    setTimeout(() => {
      cookieConsent.classList.add('active');
    }, 1000);
  } else if (hasConsent === 'accepted') {
    // If consent was given, initialize analytics
    initializeAnalytics();
  }
  
  // Add event listeners for the buttons
  acceptButton.addEventListener('click', () => {
    // Set consent cookie
    setCookie('cookie_consent', 'accepted', ANALYTICS_CONFIG.cookieExpiration);
    
    // Initialize analytics
    initializeAnalytics();
    
    // Hide the banner
    cookieConsent.classList.remove('active');
  });
  
  declineButton.addEventListener('click', () => {
    // Set decline cookie
    setCookie('cookie_consent', 'declined', ANALYTICS_CONFIG.cookieExpiration);
    
    // Hide the banner
    cookieConsent.classList.remove('active');
  });
}

// Initialize Google Analytics
function initializeAnalytics() {
  // Only initialize if not already loaded
  if (window.dataLayer) return;
  
  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalyticsId}`;
  document.head.appendChild(script);
  
  // Initialize the data layer
  window.dataLayer = window.dataLayer || [];
  
  // Define the gtag function
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  // Initialize with the proper configuration
  gtag('js', new Date());
  gtag('config', ANALYTICS_CONFIG.googleAnalyticsId, {
    'anonymize_ip': true,
    'cookie_expires': ANALYTICS_CONFIG.cookieExpiration * 24 * 60 * 60 // Convert days to seconds
  });
  
  // Track page view
  trackPageView();
  
  // Add event listeners for tracking
  addTrackingEvents();
}

// Track page view
function trackPageView() {
  if (!window.dataLayer) return;
  
  window.dataLayer.push({
    'event': 'page_view',
    'page_location': window.location.href,
    'page_title': document.title
  });
}

// Add event listeners for tracking important interactions
function addTrackingEvents() {
  // Track nomination button clicks
  document.querySelectorAll('.cta-button').forEach(button => {
    if (!button.dataset.tracked) {
      button.addEventListener('click', () => {
        trackEvent('engagement', 'button_click', 'nominate');
      });
      
      // Mark as tracked to avoid duplicate event listeners
      button.dataset.tracked = 'true';
    }
  });
  
  // Track category selection
  document.querySelectorAll('.category-item').forEach(category => {
    if (!category.dataset.tracked) {
      category.addEventListener('click', () => {
        const categoryName = category.querySelector('h3')?.textContent || 'unknown';
        trackEvent('engagement', 'category_view', categoryName);
      });
      
      // Mark as tracked
      category.dataset.tracked = 'true';
    }
  });
  
  // Track social media clicks
  document.querySelectorAll('.social-link').forEach(link => {
    if (!link.dataset.tracked) {
      link.addEventListener('click', () => {
        const platform = link.getAttribute('aria-label') || 'social';
        trackEvent('engagement', 'social_click', platform);
      });
      
      // Mark as tracked
      link.dataset.tracked = 'true';
    }
  });
}

// Track custom events
export function trackEvent(category, action, label, value) {
  if (!window.dataLayer) return;
  
  window.dataLayer.push({
    'event': 'custom_event',
    'event_category': category,
    'event_action': action,
    'event_label': label,
    'event_value': value
  });
}

// Helper function to set cookies
function setCookie(name, value, days) {
  let expires = '';
  
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  
  document.cookie = `${name}=${value}${expires}; path=/; SameSite=Lax`;
}

// Helper function to get cookie values
function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  
  return null;
}

// Helper function to delete cookies
export function deleteCookie(name) {
  setCookie(name, '', -1);
}