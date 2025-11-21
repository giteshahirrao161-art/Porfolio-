// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initProjectCards();
    initResumeDownload();
    initContactForm();
    initSmoothScrolling();
    initProjectVideos();  
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Update aria-expanded for accessibility
        hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .cert-card, .contact-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                skillBar.style.width = level + '%';
                skillBar.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Project cards hover effects
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const playBtn = card.querySelector('.play-btn');
        const thumbnail = card.querySelector('.project-thumbnail img');
        
        // Card hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            if (thumbnail) {
                thumbnail.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            if (thumbnail) {
                thumbnail.style.transform = 'scale(1)';
            }
        });
        
        // Play button click effect
        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.preventDefault();
                playBtn.style.transform = 'scale(1.2)';
                playBtn.style.background = '#ff6b6b';
                
                setTimeout(() => {
                    playBtn.style.transform = 'scale(1)';
                    playBtn.style.background = '#e50914';
                }, 200);
                
                // Add project modal or redirect logic here
                showProjectModal(card);
            });
        }
    });
}

// Project modal functionality
function showProjectModal(card) {
    const projectTitle = card.querySelector('h3').textContent;
    const projectDescription = card.querySelector('p').textContent;
    const projectTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${projectTitle}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>${projectDescription}</p>
                    <div class="modal-tags">
                        ${projectTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="modal-actions">
                        <button class="btn-primary">
                            <i class="fas fa-external-link-alt"></i>
                            View Project
                        </button>
                        <button class="btn-secondary">
                            <i class="fab fa-github"></i>
                            View Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .project-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        .modal-content {
            background: #1a1a1a;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            border: 1px solid #333;
            position: relative;
            z-index: 10001;
            animation: modalSlideIn 0.3s ease;
        }
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-50px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid #333;
        }
        .modal-header h2 {
            color: #ffffff;
            margin: 0;
        }
        .modal-close {
            background: none;
            border: none;
            color: #cccccc;
            font-size: 2rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        .modal-close:hover {
            color: #e50914;
        }
        .modal-body {
            padding: 2rem;
        }
        .modal-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }
        .modal-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
    `;
    
    // Add styles to head
    if (!document.querySelector('#modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(modal);

    // Accessibility: focus management
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = modal.querySelectorAll(focusableSelectors);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Remember opener to return focus later
    const opener = document.activeElement;

    // Set initial focus inside modal
    if (firstFocusable) {
        firstFocusable.focus();
    }

    // Hide main content from screen readers while modal is open
    const main = document.getElementById('main');
    if (main) main.setAttribute('aria-hidden', 'true');

    // Close modal functionality
    const closeModal = () => {
        modal.style.animation = 'modalSlideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
                if (main) main.removeAttribute('aria-hidden');
                if (opener && typeof opener.focus === 'function') opener.focus();
            }
        }, 300);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

    // Close on ESC key and trap focus
    const onKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }

        // Trap focus
        if (e.key === 'Tab') {
            if (focusableElements.length === 0) {
                e.preventDefault();
                return;
            }
            if (e.shiftKey) { // shift + tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else { // tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    };

    document.addEventListener('keydown', onKeyDown);

    // Cleanup listener when modal is removed
    const observer = new MutationObserver(() => {
        if (!document.body.contains(modal)) {
            document.removeEventListener('keydown', onKeyDown);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Add slide out animation
    const slideOutStyles = `
        @keyframes modalSlideOut {
            from {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            to {
                opacity: 0;
                transform: scale(0.8) translateY(-50px);
            }
        }
    `;
    
    if (!document.querySelector('#modal-styles').textContent.includes('modalSlideOut')) {
        document.querySelector('#modal-styles').textContent += slideOutStyles;
    }
}

// Scroll to sections functions
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Project videos functionality
function initProjectVideos() {
    const projectVideos = document.querySelectorAll('.project-video');

    // Lazy load video sources
    lazyLoadVideos(projectVideos);

    // Detect touch devices to avoid hover play
    const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

    projectVideos.forEach(video => {
        const projectCard = video.closest('.project-card');
        if (!projectCard) return;

        if (!isTouch) {
            // Play video on hover for non-touch devices
            projectCard.addEventListener('mouseenter', () => {
                // Ensure video is loaded
                if (video.readyState === 0) {
                    const sources = video.querySelectorAll('source[data-src]');
                    sources.forEach(s => {
                        if (s.getAttribute('data-src')) s.src = s.getAttribute('data-src');
                    });
                    video.load();
                }
                video.play().catch(() => {});
            });

            projectCard.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        } else {
            // For touch devices, show poster and don't autoplay on hover
            video.pause();
        }
    });
}

// Lazy-load videos when they come into viewport (loads data-src into src)
function lazyLoadVideos(videoNodeList) {
    if (!videoNodeList || videoNodeList.length === 0) return;

    const options = { rootMargin: '200px 0px' };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const sources = video.querySelectorAll('source[data-src]');
                sources.forEach(s => {
                    if (s.getAttribute('data-src')) s.src = s.getAttribute('data-src');
                });
                // Load but don't autoplay
                video.load();
                obs.unobserve(video);
            }
        });
    }, options);

    videoNodeList.forEach(v => observer.observe(v));
}

// Resume download functionality
function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadResume');
    
    if (downloadBtn) {
        // Support click and key activation
        const activateDownload = async () => {
            // Try to fetch a local resume.md; if not available, fallback to generated content
            try {
                const resp = await fetch('resume.md');
                if (resp.ok) {
                    const blob = await resp.blob();
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'resume.md';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    showNotification('Resume downloaded successfully!', 'success');
                    return;
                }
            } catch (err) {
                // ignore and fallback
            }

            // Fallback generated resume
            const resumeContent = `# Your Name\n\n## Software Engineer\n\n### Experience\n- Senior Software Engineer at TechCorp Solutions (2022-Present)\n- Full Stack Developer at StartupXYZ (2020-2022)\n- Frontend Developer at Digital Agency ABC (2019-2020)\n\n### Skills\n- JavaScript, React, Node.js\n- Python, AWS, Docker\n- PostgreSQL, MongoDB\n\n### Education\n- Bachelor's in Computer Science\n\n### Contact\n- Email: your.email@example.com\n- Phone: +1 (555) 123-4567\n- Location: San Francisco, CA`;

            const blob = new Blob([resumeContent], { type: 'text/markdown' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume.md';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showNotification('Resume downloaded successfully!', 'success');
        };

        downloadBtn.addEventListener('click', activateDownload);
        downloadBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateDownload();
            }
        });
    }
}

// Contact form functionality
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            // Simulate form submission
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1a1a1a;
            color: #ffffff;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            border-left: 4px solid #e50914;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        }
        .notification-success {
            border-left-color: #4ecdc4;
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .notification-content i {
            color: #e50914;
        }
        .notification-success .notification-content i {
            color: #4ecdc4;
        }
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('fade-in-up'), 200);
    }
    if (heroSubtitle) {
        setTimeout(() => heroSubtitle.classList.add('fade-in-up'), 400);
    }
    if (heroButtons) {
        setTimeout(() => heroButtons.classList.add('fade-in-up'), 600);
    }
    if (heroVideo) {
        setTimeout(() => heroVideo.classList.add('fade-in-up'), 800);
    }
});

// Add CSS for loading animation
const loadingStyles = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    body.loaded {
        opacity: 1;
    }
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = loadingStyles;
document.head.appendChild(loadingStyleSheet);
