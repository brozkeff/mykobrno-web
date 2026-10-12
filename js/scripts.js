/*!
 * Based on Start Bootstrap - Freelancer v6.0.0
 * Copyright 2013-2020 Start Bootstrap
 * Modernized by Brozkeff 2026. Licensed under MIT.
 * License: ../assets/vendor/freelancer/LICENSE
 */
(() => {
  "use strict";

  const navbar = document.getElementById("mainNav");
  const menu = document.getElementById("navbarResponsive");
  const backToTop = document.querySelector(".scroll-to-top");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let animationFrame = null;

  const updateNavbar = () => {
    navbar.classList.toggle("navbar-shrink", window.scrollY > 100);
    backToTop.classList.toggle("is-visible", window.scrollY > 100);
  };
  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar();

  const scrollspy = new bootstrap.ScrollSpy(document.body, {
    target: menu,
    rootMargin: "-80px 0px -50%",
    threshold: [0, 0.1, 0.5, 1]
  });
  // Images and fonts can change the section positions after initialization.
  window.addEventListener("load", () => scrollspy.refresh(), { once: true });

  const cancelScroll = () => {
    if (animationFrame !== null) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  };
  window.addEventListener("wheel", cancelScroll, { passive: true });
  window.addEventListener("touchstart", cancelScroll, { passive: true });
  window.addEventListener("pointerdown", cancelScroll, { passive: true });
  window.addEventListener("keydown", event => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
      cancelScroll();
    }
  });
  reducedMotion.addEventListener("change", cancelScroll);

  const scrollToSection = target => {
    cancelScroll();
    const start = window.scrollY;
    const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const destination = Math.min(maximum, Math.max(0, target.getBoundingClientRect().top + start - 71));
    if (reducedMotion.matches) {
      window.scrollTo(0, destination);
      return;
    }
    const startedAt = performance.now();
    const animate = now => {
      const progress = Math.min(1, (now - startedAt) / 1000);
      // Preserve the original jQuery Easing easeInOutExpo curve.
      const eased = progress === 0 ? 0 : progress === 1 ? 1 : progress < 0.5
        ? Math.pow(2, 20 * progress - 10) / 2
        : (2 - Math.pow(2, -20 * progress + 10)) / 2;
      window.scrollTo(0, start + (destination - start) * eased);
      animationFrame = progress < 1 ? window.requestAnimationFrame(animate) : null;
    };
    animationFrame = window.requestAnimationFrame(animate);
  };

  document.querySelectorAll("a.js-scroll-trigger").forEach(link => {
    link.addEventListener("click", event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (link.pathname !== window.location.pathname || link.hostname !== window.location.hostname) return;
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
      scrollToSection(target);
    });
  });

  // Return focus to a visible menu control after opening an event from the dropdown.
  document.querySelectorAll(".portfolio-modal").forEach(modal => {
    modal.addEventListener("show.bs.modal", event => {
      if (!event.relatedTarget?.matches("#mainNav .dropdown-item")) return;
      bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
      modal.addEventListener("hidden.bs.modal", () => {
        const control = window.matchMedia("(min-width: 992px)").matches
          ? document.getElementById("eventMenu")
          : navbar.querySelector(".navbar-toggler");
        control.focus();
      }, { once: true });
    });
  });

  // The original cards are divs; support keyboard activation without changing their layout.
  document.querySelectorAll('.portfolio-item[data-bs-toggle="modal"]').forEach(card => {
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
})();
