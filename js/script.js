// =========================
// Counter Animation
// =========================
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");

      if (entry.isIntersecting) {
        counter.innerText = "0";

        const updateCount = () => {
          const current = +counter.innerText;
          const increment = target / 100;

          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            counter.timeout = setTimeout(updateCount, 15);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      } else {
        clearTimeout(counter.timeout);
        counter.innerText = "0";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// =========================
// Navbar Scroll
// =========================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  }
});

// =========================
// Back To Top
// =========================
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});