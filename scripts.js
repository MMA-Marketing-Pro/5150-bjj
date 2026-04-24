/* =========================================================
   5150 MARTIAL ARTS — Shared scripts
   ========================================================= */

(function () {
  'use strict';

  // ---------------------------------------------------------
  // GoHighLevel webhook routing — one webhook per audience.
  // Leave a URL empty ('') to disable that audience's webhook.
  // ---------------------------------------------------------
  var GHL_WEBHOOKS = {
    kids:   'https://services.leadconnectorhq.com/hooks/c6lfZjPJedIQ4IUIQG3m/webhook-trigger/dc876834-83e6-459c-80a9-a058343a27cc',
    adults: 'https://services.leadconnectorhq.com/hooks/c6lfZjPJedIQ4IUIQG3m/webhook-trigger/a85e72de-28c4-40df-8a0b-7a19298dd7bc'
  };

  // Human-readable labels for the program values we emit.
  var PROGRAM_LABELS = {
    'tiny-sharks':                 'Tiny Sharks — Parent & Me (Ages 4–6)',
    'kids-gracie-jiu-jitsu-7-8':   'Kids Jiu-Jitsu (Ages 7–8)',
    'kids-gracie-jiu-jitsu-9-12':  'Kids Jiu-Jitsu (Ages 9–12)',
    'adults-gracie-jiu-jitsu':     'Adult Jiu-Jitsu (13+)',
    'adult-kickboxing':            'Adult Kickboxing (16+)'
  };

  function programAudience(program) {
    if (!program) return null;
    if (program === 'tiny-sharks' || program.indexOf('kids-') === 0) return 'kids';
    if (program === 'adult-kickboxing' || program.indexOf('adults-') === 0) return 'adults';
    return null;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initIcons();
    initNav();
    initYear();
    captureUtmParams();
    initLeadModal();
    initScrollAnimations();
    initBookingPage();
  });

  /* ---------- UTM capture (survives redirect to booking.html) ---------- */
  function captureUtmParams() {
    try {
      var params = new URLSearchParams(window.location.search);
      var utm = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
        var v = params.get(k);
        if (v) utm[k.replace('utm_', '')] = v;
      });
      if (Object.keys(utm).length > 0) {
        sessionStorage.setItem('utmParams', JSON.stringify(utm));
      }
    } catch (e) { /* noop */ }
  }

  function getStoredUtm() {
    try {
      var raw = sessionStorage.getItem('utmParams');
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  /* ---------- GHL webhook POST ---------- */
  function sendLeadToGHL(lead, opts) {
    opts = opts || {};
    var audience = programAudience(lead.program);
    if (!audience) return Promise.resolve({ sent: false, reason: 'no-audience' });
    var url = GHL_WEBHOOKS[audience];
    if (!url) return Promise.resolve({ sent: false, reason: 'no-webhook-configured' });

    var formType = lead.formType || 'lead-modal';

    // Fire Meta Pixel Lead event for actual lead forms only — skip the contact "say hi" form.
    if (formType !== 'contact-message' && typeof window.fbq === 'function') {
      try {
        window.fbq('track', 'Lead', {
          content_name: PROGRAM_LABELS[lead.program] || lead.program || '',
          content_category: audience,
          source: formType
        });
      } catch (e) { /* noop */ }
    }

    var payload = {
      firstName: lead.firstName || '',
      lastName: lead.lastName || '',
      email: lead.email || '',
      phone: lead.phone || '',
      program: lead.program || '',
      programLabel: PROGRAM_LABELS[lead.program] || lead.program || '',
      ageBand: lead.ageBand || '',
      message: lead.message || '',
      formType: formType,
      audience: audience,
      source: window.location.hostname,
      page: window.location.pathname,
      pageTitle: document.title,
      referrer: document.referrer || '',
      submittedAt: new Date().toISOString(),
      utm: getStoredUtm(),
      test: !!opts.test
    };

    try {
      return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).then(function (res) {
        return { sent: true, status: res.status, audience: audience, payload: payload };
      }).catch(function (err) {
        console.warn('[5150] GHL webhook error:', err);
        return { sent: false, reason: 'network-error', error: String(err) };
      });
    } catch (e) {
      console.warn('[5150] GHL webhook threw:', e);
      return Promise.resolve({ sent: false, reason: 'exception', error: String(e) });
    }
  }

  // Expose for manual test firing from the browser console
  window._5150 = window._5150 || {};
  window._5150.sendLeadToGHL = sendLeadToGHL;

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
        var ageBandInput = form.querySelector('[name="ageBand"]');
        var data = {
          firstName: form.firstName.value.trim(),
          lastName: form.lastName.value.trim(),
          email: form.email.value.trim(),
          phone: form.phone.value.trim(),
          program: form.program.value,
          ageBand: ageBandInput ? ageBandInput.value : ''
        };
        try { sessionStorage.setItem('leadFormData', JSON.stringify(data)); } catch (err) {}

        // Fire the GHL webhook (keepalive so it completes even after navigation).
        // Never block the redirect — if GHL is down the user still reaches the calendar.
        sendLeadToGHL(data);

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

    // Legacy alias: the old single "Kids BJJ" bucket now splits by age band on the booking page.
    // Any legacy link without an age band lands on the 7–8 calendar.
    if (requested === 'kids-gracie-jiu-jitsu') requested = 'kids-gracie-jiu-jitsu-7-8';

    var calendars = document.querySelectorAll('.booking-calendar');
    var chips = document.querySelectorAll('.program-chip');

    function activate(program, opts) {
      var shouldScroll = !!(opts && opts.scroll);
      calendars.forEach(function (cal) {
        if (cal.getAttribute('data-program') === program) cal.classList.add('is-active');
        else cal.classList.remove('is-active');
      });
      chips.forEach(function (chip) {
        if (chip.getAttribute('data-program') === program) chip.classList.add('is-active');
        else chip.classList.remove('is-active');
      });
      // Only scroll when the user actively picks a chip — don't jump past the
      // switcher on initial load.
      if (shouldScroll) {
        var scroller = document.querySelector('.booking-calendar.is-active');
        if (scroller) scroller.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Fall back to first available calendar if requested program doesn't exist
    var found = false;
    calendars.forEach(function (cal) {
      if (cal.getAttribute('data-program') === requested) found = true;
    });
    if (!found && calendars.length > 0) {
      requested = calendars[0].getAttribute('data-program');
    }
    activate(requested); // initial load — no scroll

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        activate(chip.getAttribute('data-program'), { scroll: true });
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
