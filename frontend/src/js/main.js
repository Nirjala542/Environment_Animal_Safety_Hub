/* ===== ECOLIFE MAIN JAVASCRIPT ===== */

/**
 * Main application entry point.
 * Initializes all modular components when the DOM is fully loaded.
 * This serves as the central initialization hub for the entire application,
 * calling init functions from all imported modules in the correct order.
 */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initNavbar();
  initSmoothScroll();
  initBackToTop();
  initAOS();
  initCounterAnimation();
  initParticles();
  initFormHandlers();
  initNavbarActiveState();
  initScrollProgress();
  initEcoChallenges();
  initTestimonialSlider();
  initModalSystem();
});
