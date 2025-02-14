document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function activateNavLink() {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150; // Adjust offset as needed
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", activateNavLink);
  });
  // Navbar Scroll Effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else {
      document.querySelector(".navbar").classList.remove("scrolled");
    }
  });

  // Initialize Carousel
  const myCarousel = new bootstrap.Carousel("#heroCarousel", {
    interval: 6000,
    wrap: true,
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll Reveal Animation
  ScrollReveal().reveal(
    ".card-service, .portfolio-item, .contact-section",
    {
      delay: 300,
      distance: "50px",
      origin: "bottom",
      interval: 200,
    }
  );

  