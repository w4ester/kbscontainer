/**
 * Cyber UXcellence Awards - FAQ Section Module
 * Initializes and manages the FAQ section of the site
 */

const initFaq = () => {
  const faqSection = document.getElementById('faq');
  
  if (!faqSection) return;
  
  // Add the faq-section class for styling
  faqSection.classList.add('faq-section');
  
  // Create the FAQ content
  const faqContent = `
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      
      <div class="faq-tabs">
        <div class="faq-tab active" data-category="all">All</div>
        <div class="faq-tab" data-category="general">General Information</div>
        <div class="faq-tab" data-category="nomination">Nomination Process</div>
        <div class="faq-tab" data-category="judging">Judging & Selection</div>
      </div>
      
      <div class="faq-accordion">
        <h3 class="faq-category-title" data-category="general">General Information</h3>
        
        <div class="faq-item" data-category="general">
          <div class="faq-question">Who is eligible to submit a nomination?</div>
          <div class="faq-answer">
            <p>Nominations are open to individuals and teams across cybersecurity organizations who contribute to the creation of exceptional product user experiences. This includes CEOs, Chief Product Officers, Product Managers, Designers, Engineers, Marketers, and CFOs; anyone involved in shaping, influencing, or championing the user experience of a cybersecurity product. If your product stands out for its usability, design, and overall user experience, we welcome your submission for the Cyber UXcellence Awards.</p>
          </div>
        </div>
        
        <div class="faq-item" data-category="general">
          <div class="faq-question">Who is organizing the Cyber UXcellence Awards?</div>
          <div class="faq-answer">
            <p>The Cyber UXcellence Awards are organized by Mindgrub, a leader in technology innovation, Product UX/UI, and digital transformation. Mindgrub is dedicated to promoting exceptional user experiences in cybersecurity and highlighting the products that are setting the standard for innovation and usability in the industry.</p>
          </div>
        </div>
        
        <div class="faq-item" data-category="general">
          <div class="faq-question">Is there an associated cost with submitting?</div>
          <div class="faq-answer">
            <p>No, there are no costs associated with submitting a nomination for the Cyber UXcellence Awards. Judging is conducted independently by a panel of industry experts, ensuring fairness and integrity in the selection process.</p>
          </div>
        </div>
        
        <h3 class="faq-category-title" data-category="nomination">Nomination Process</h3>
        
        <div class="faq-item" data-category="nomination">
          <div class="faq-question">What materials are required for nomination?</div>
          <div class="faq-answer">
            <p>To submit a nomination, you will need to provide detailed information about your product's UX and UI features, its impact on users, and any supporting materials such as user testimonials, case studies, product demos or video clips that highlight the product's UX/UI strengths as it relates to the submission category you select.</p>
          </div>
        </div>
        
        <div class="faq-item" data-category="nomination">
          <div class="faq-question">What is the deadline for submissions?</div>
          <div class="faq-answer">
            <p>The deadline for submitting nominations is July 10, 2025. All submissions must be completed by this date.</p>
          </div>
        </div>
        
        <div class="faq-item" data-category="nomination">
          <div class="faq-question">How long does it take to complete the nomination process?</div>
          <div class="faq-answer">
            <p>We recommend setting aside at least 30 minutes to complete your submission. Be sure to review the entire form in advance so you can gather all necessary materials beforehand. Please note that the form does not require a login, which means you won't be able to save your progress and return later — it must be completed in one session.</p>
          </div>
        </div>
        
        <div class="faq-item" data-category="nomination">
          <div class="faq-question">Can we submit the same product for multiple categories?</div>
          <div class="faq-answer">
            <p>No, this year each company may submit to only one category. We recommend selecting the category that best represents your strongest work.</p>
          </div>
        </div>
        
        <h3 class="faq-category-title" data-category="judging">Judging & Selection</h3>
        
        <div class="faq-item" data-category="judging">
          <div class="faq-question">How are winners selected?</div>
          <div class="faq-answer">
            <p>Submissions are evaluated by a distinguished panel of judges representing top industry CISOs, UX experts, and cybersecurity thought leaders. Each submission is assessed based on predefined published rubric criteria, including UX/UI design, usability, adoption rates, impact on security outcomes, and overall user experience. Judges evaluate entries according to the specific category descriptions.</p>
          </div>
        </div>
        
        <div class="faq-item" data-category="judging">
          <div class="faq-question">When will I know if I won or am a finalist?</div>
          <div class="faq-answer">
            <p>Finalists will be notified via email during the judging period. Winners will be announced at the awards ceremony during Black Hat 2025 in Las Vegas. You do not need to attend the Black Hat event to win.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Insert the FAQ content into the section
  faqSection.innerHTML = faqContent;
  
  // Initialize FAQ functionality
  const faqTabs = faqSection.querySelectorAll('.faq-tab');
  const faqItems = faqSection.querySelectorAll('.faq-item');
  const faqQuestions = faqSection.querySelectorAll('.faq-question');
  const faqCategoryTitles = faqSection.querySelectorAll('.faq-category-title');
  
  // Tab filtering functionality
  faqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      faqTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter items based on category
      const category = tab.getAttribute('data-category');
      
      faqItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
      
      // Show/hide category titles based on selected tab
      faqCategoryTitles.forEach(title => {
        if (category === 'all' || title.getAttribute('data-category') === category) {
          title.style.display = '';
        } else {
          title.style.display = 'none';
        }
      });
    });
  });
  
  // Accordion functionality
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
};

export default initFaq;