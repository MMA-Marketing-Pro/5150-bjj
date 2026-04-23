/* =========================================================
   5150 MARTIAL ARTS — Shared scripts
   ========================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initIcons();
    initNav();
    initYear();
    initLeadModal();
    initScrollAnimations();
    initBookingPage();
  });

  function initIcons() {
    try { if (window.lucide) lucide.createIcons(); } catch (e) { /* noop */ }
  }

  function initYear() {
    var el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }

  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var toggle = nav.querySelector('.nav-toggle');
    var mobile = nav.querySelector('.nav-mobile');

    function onScroll() {
      if (window.scrollY > 12) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toggle) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        var isOpen = nav.classList.contains('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
        var icon = toggle.querySelector('i[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
          initIcons();
        }
      });
    }

    // Close mobile menu on link tap
    if (mobile) {
      mobile.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.tagName === 'A') {
          nav.classList.remove('open');
          document.body.style.overflow = '';
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- Lead Modal ---------- */
  function initLeadModal() {
    var modal = document.getElementById('lead-modal');
    if (!modal) return;

    var backdrop = modal.querySelector('.lead-modal__backdrop');
    var closeBtn = modal.querySelector('.lead-modal__close');
    var form = modal.querySelector('form');
    var programSelect = modal.querySelector('[name="program"]');

    function openModal(presetProgram) {
      if (presetProgram && programSelect) {
        programSelect.value = presetProgram;
      }
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        var first = modal.querySelector('input[name="firstName"]');
        if (first) first.focus();
      }, 120);
    }
    function closeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    // Open from any data-cta="lead-modal" trigger
    document.querySelectorAll('[data-cta="lead-modal"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var preset = btn.getAttribute('data-program') || '';
        openModal(preset);
      });
    });

    if (backdrop) backdrop.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });

    // Phone mask
    var phone = modal.querySelector('input[name="phone"]');
    if (phone) {
      phone.addEventListener('input', function () {
        var d = phone.value.replace(/\D/g, '').slice(0, 10);
        if (d.length > 6) phone.value = '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
        else if (d.length > 3) phone.value = '(' + d.slice(0, 3) + ') ' + d.slice(3);
        else if (d.length > 0) phone.value = '(' + d;
        else phone.value = '';
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
          firstName: form.firstName.value.trim(),
          lastName: form.lastName.value.trim(),
          email: form.email.value.trim(),
          phone: form.phone.value.trim(),
          program: form.program.value
        };
        // TODO: later wire this to a webhook or GHL form endpoint for backend capture
        try { sessionStorage.setItem('leadFormData', JSON.stringify(data)); } catch (err) {}
        var target = 'booking.html?program=' + encodeURIComponent(data.program || 'adults-gracie-jiu-jitsu');
        window.location.href = target;
      });
    }
  }

  /* ---------- Booking Page ---------- */
  function initBookingPage() {
    var progress = document.querySelector('.booking-progress');
    if (!progress) return;

    var params = new URLSearchParams(window.location.search);
    var requested = (params.get('program') || 'adults-gracie-jiu-jitsu').toLowerCase();

    var calendars = document.querySelectorAll('.booking-calendar');
    var chips = document.querySelectorAll('.program-chip');

    function activate(program) {
      calendars.forEach(function (cal) {
        if (cal.getAttribute('data-program') === program) cal.classList.add('is-active');
        else cal.classList.remove('is-active');
      });
      chips.forEach(function (chip) {
        if (chip.getAttribute('data-program') === program) chip.classList.add('is-active');
        else chip.classList.remove('is-active');
      });
      // Smooth scroll to calendar on program switch
      var scroller = document.querySelector('.booking-calendar.is-active');
      if (scroller) scroller.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Fall back to first available calendar if requested program doesn't exist
    var found = false;
    calendars.forEach(function (cal) {
      if (cal.getAttribute('data-program') === requested) found = true;
    });
    if (!found && calendars.length > 0) {
      requested = calendars[0].getAttribute('data-program');
    }
    activate(requested);

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        activate(chip.getAttribute('data-program'));
      });
    });

    // Pre-fill lead name into a greeting element if present
    try {
      var stored = JSON.parse(sessionStorage.getItem('leadFormData') || 'null');
      if (stored && stored.firstName) {
        var greet = document.querySelector('[data-lead-greeting]');
        if (greet) greet.textContent = stored.firstName + ', you’re almost done — pick a time below.';
      }
    } catch (e) {}
  }
})();
