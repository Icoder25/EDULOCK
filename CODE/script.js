// Initialize Lucide icons
lucide.createIcons();
    
// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.querySelector('[data-tabs]');
  const tabTriggers = document.querySelectorAll('[data-tab]');
  const tabContents = document.querySelectorAll('[data-tab-content]');
  
  if (tabsContainer) {
    const defaultTab = tabsContainer.getAttribute('data-tabs');
    
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const tabId = trigger.getAttribute('data-tab');
        
        // Update active tab trigger
        tabTriggers.forEach(t => t.setAttribute('data-state', 'inactive'));
        trigger.setAttribute('data-state', 'active');
        
        // Show selected tab content
        tabContents.forEach(content => {
          if (content.getAttribute('data-tab-content') === tabId) {
            content.removeAttribute('hidden');
          } else {
            content.setAttribute('hidden', 'true');
          }
        });
      });
    });
    
    // Set default tab as active
    const defaultTrigger = document.querySelector(`[data-tab="${defaultTab}"]`);
    if (defaultTrigger) {
      defaultTrigger.setAttribute('data-state', 'active');
    }
  }

  // Mobile menu toggle functionality
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');
  
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = navLinks.style.display === 'flex';
      
      if (isExpanded) {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'hsl(var(--card))';
        navLinks.style.padding = '1rem';
        navLinks.style.gap = '1rem';
      }
    });
  }

  // Form submission handlers
  document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log('Login attempt:', { email, password });
    alert('Login functionality would be implemented here');
  });

  document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    console.log('Signup attempt:', { email, password });
    alert('Account created successfully (simulated)');
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      
      if (document.body.classList.contains('dark')) {
        themeIcon.setAttribute('data-lucide', 'sun');
      } else {
        themeIcon.setAttribute('data-lucide', 'moon');
      }
      
      lucide.createIcons();
    });
  }

  // Profile button and login popup functionality
  const profileButton = document.getElementById('profile-button');
  const loginPopup = document.getElementById('login-popup');
  const loginPopupClose = document.getElementById('login-popup-close');
  const signupPopup = document.getElementById('signup-popup');
  const signupPopupClose = document.getElementById('signup-popup-close');
  
  if (profileButton && loginPopup) {
    profileButton.addEventListener('click', function() {
      loginPopup.classList.add('active');
    });
    
    loginPopupClose.addEventListener('click', function() {
      loginPopup.classList.remove('active');
    });
    
    signupPopupClose.addEventListener('click', function() {
      signupPopup.classList.remove('active');
    });
    
    // Close popup when clicking outside
    loginPopup.addEventListener('click', function(e) {
      if (e.target === loginPopup) {
        loginPopup.classList.remove('active');
      }
    });
    
    signupPopup.addEventListener('click', function(e) {
      if (e.target === signupPopup) {
        signupPopup.classList.remove('active');
      }
    });
  }

  // Popup login form submission
  document.getElementById('popup-login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('popup-email').value;
    const password = document.getElementById('popup-password').value;
    console.log('Popup login attempt:', { email, password });
    alert('Login functionality would be implemented here');
    loginPopup.classList.remove('active');
  });
  
  // Popup signup form submission
  document.getElementById('popup-signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('popup-signup-email').value;
    const password = document.getElementById('popup-signup-password').value;
    const confirmPassword = document.getElementById('popup-confirm-password').value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    console.log('Popup signup attempt:', { email, password });
    alert('Account created successfully (simulated)');
    signupPopup.classList.remove('active');
  });
});

// Page navigation function
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-content').forEach(page => {
    page.classList.add('hidden');
  });
  
  // Show selected page
  document.getElementById(`${pageId}-page`)?.classList.remove('hidden');
  
  // Close mobile menu if open
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Popup navigation function
function showPopup(popupId) {
  if (popupId === 'login') {
    document.getElementById('login-popup').classList.add('active');
    document.getElementById('signup-popup').classList.remove('active');
  } else if (popupId === 'signup') {
    document.getElementById('signup-popup').classList.add('active');
    document.getElementById('login-popup').classList.remove('active');
  }
}
 // Add this to your existing script section
document.addEventListener('DOMContentLoaded', function() {
// Initialize feature cards animation
const featureCards = document.querySelectorAll('#features-page .bg-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

featureCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `all 0.3s ease ${index * 0.1}s`;
  observer.observe(card);
});
});