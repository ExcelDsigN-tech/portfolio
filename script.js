// Damilare Oduyomi — portfolio interactions. Vanilla JS, no dependencies.

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.getElementById("nav-toggle");
  const mobile = document.getElementById("nav-mobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = mobile.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobile.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobile.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Scroll-reveal: toggles both ways, so sections replay their reveal
  // animation in reverse when scrolled back past going up.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // Hero glow blobs drift toward the cursor (Stefano Bartoletti-style background light)
  const hero = document.querySelector(".hero");
  const glows = document.querySelectorAll(".hero-glow");
  if (hero && glows.length && !reduceMotion) {
    hero.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      glows.forEach((glow, i) => {
        const strength = i === 0 ? 18 : -14;
        glow.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    });
  }

  // Case-study galleries: hover previews the content, click pins it open
  document.querySelectorAll(".case-study").forEach((study) => {
    const toggle = study.querySelector(".case-toggle");
    let pinned = false;
    let hovering = false;
    function sync() {
      const open = pinned || hovering;
      study.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }
    study.addEventListener("mouseenter", () => {
      hovering = true;
      sync();
    });
    study.addEventListener("mouseleave", () => {
      hovering = false;
      sync();
    });
    toggle.addEventListener("click", () => {
      pinned = !pinned;
      sync();
    });
  });

  // Lightbox for wireframe/UI case-study images
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("is-open");
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }

  document.querySelectorAll(".lightbox-trigger").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Footer year
  const year = document.getElementById("copyright-year");
  if (year) {
    year.textContent = `© ${new Date().getFullYear()} Oluwadamilare Oduyomi · MIT licensed open source`;
  }

  // Hero content: staggered fade-up on load (delays set per-element in HTML)
  const heroReveals = document.querySelectorAll(".hero-reveal");
  requestAnimationFrame(() => {
    heroReveals.forEach((el) => el.classList.add("is-visible"));
  });
});
