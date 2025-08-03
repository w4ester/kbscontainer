/**
 * Cyber UXcellence Awards - HubSpot Form Integration
 * Handles the initialization and submission of the HubSpot nomination form
 */

// Initialize the HubSpot form
export const initHubSpotForm = () => {
  // Check if HubSpot form container exists
  const formContainer = document.querySelector('.hs-form-frame');
  
  if (!formContainer || !window.hbspt) {
    console.warn('HubSpot form container or script not found');
    return;
  }
  
  // Skip initialization if form is already loaded
  if (formContainer.querySelector('form')) {
    console.log('HubSpot form already loaded');
    return;
  }
  
  // Get any pre-selected category from the active category item
  let preSelectedCategory = '';
  const activeCategory = document.querySelector('.category-item.active');
  
  if (activeCategory) {
    preSelectedCategory = activeCategory.querySelector('h3').textContent;
  }
  
  // Initialize the HubSpot form
  try {
    window.hbspt.forms.create({
      region: formContainer.getAttribute('data-region') || 'na1',
      portalId: formContainer.getAttribute('data-portal-id') || '2247038',
      formId: formContainer.getAttribute('data-form-id') || '36978c97-a0ec-4eb9-ac9c-2b0c484c2314',
      target: '.hs-form-frame',
      onFormReady: form => {
        console.log('HubSpot form loaded');
        
        // Pre-select the category field if available
        if (preSelectedCategory) {
          const categoryField = form.find(field => field.name === 'category');
          
          if (categoryField) {
            categoryField.setValue(preSelectedCategory);
          }
        }
      },
      onFormSubmit: () => {
        console.log('Form submitted successfully');
        
        // Show success message
        const modal = document.querySelector('.nomination-modal');
        const modalBody = modal.querySelector('.modal-body');
        
        // Replace form with success message
        modalBody.innerHTML = `
          <div class="submission-success">
            <h3>Thank You for Your Nomination!</h3>
            <p>We have received your submission and will be in touch with next steps. Your commitment to excellence in cybersecurity UX is commendable.</p>
            <button class="cta-button close-modal-btn">Close</button>
          </div>
        `;
        
        // Add close button functionality
        const closeButton = modalBody.querySelector('.close-modal-btn');
        
        if (closeButton) {
          closeButton.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
          });
        }
        
        // Automatically close modal after 5 seconds
        setTimeout(() => {
          modal.classList.remove('active');
          document.body.style.overflow = ''; // Enable scrolling
        }, 5000);
      },
      onFormError: errors => {
        console.error('Form submission error:', errors);
      }
    });
  } catch (error) {
    console.error('Error initializing HubSpot form:', error);
    
    // Fallback form if HubSpot fails to load
    formContainer.innerHTML = `
      <div class="fallback-form">
        <h3>Nomination Form</h3>
        <p>There was an issue loading our nomination form. Please try again later or contact us directly at <a href="mailto:nominations@cyberuxcellence.com">nominations@cyberuxcellence.com</a>.</p>
      </div>
    `;
  }
};