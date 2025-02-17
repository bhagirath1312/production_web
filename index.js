// Navbar Fucntion when user in mobile and click on nav-link after navbar automatically close
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Closes the navbar
      }
    });
  });
});


// document.querySelectorAll(".nav-link").forEach(link => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
    
//     const targetId = this.getAttribute("href");
//     const targetElement = document.querySelector(targetId);
//     const navbar = document.querySelector(".navbar");
//     const navbarToggler = document.querySelector(".navbar-toggler"); // Mobile menu button
//     const navbarCollapse = document.querySelector(".navbar-collapse"); // Collapsible menu

//     if (targetElement) {
//       const navbarHeight = navbar.offsetHeight;
//       const offset = 0; // Extra space to avoid cutting the heading
//       const targetPosition = targetElement.offsetTop - navbarHeight - offset;

//       window.scrollTo({
//         top: targetPosition,
//         behavior: "smooth",
//       });
//     }

//     // Close the mobile menu after clicking a link
//     if (navbarToggler && navbarCollapse.classList.contains("show")) {
//       navbarCollapse.classList.remove("show"); // Hide the menu
//       navbarToggler.setAttribute("aria-expanded", "false"); // Update accessibility
//     }
//   });
// });

window.onload = function () {
  setTimeout(() => {
      document.querySelector(".preloader").classList.add("hide");
      document.getElementById("main-content").style.display = "block";
  }, 2000); // Adjust time as needed
};

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

  document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee-content');
    const items = Array.from(marquee.children);
    
    // Clone items with proper spacing
    const cloneSet = items.map(item => {
        const clone = item.cloneNode(true);
        clone.style.marginRight = window.innerWidth < 576 ? '10px' : '15px';
        return clone;
    });
    
    marquee.append(...cloneSet);
    
    // Calculate proper animation duration
    const itemWidth = items[0].offsetWidth + 
        parseInt(getComputedStyle(items[0]).marginRight);
    const totalWidth = itemWidth * items.length;
    const duration = (totalWidth / 100) * 0.5; // Adjust speed multiplier
    
    marquee.style.animationDuration = `${duration}s`;
    
    // Reset animation for smooth start
    marquee.style.animation = 'none';
    setTimeout(() => {
        marquee.style.animation = `marquee ${duration}s linear infinite`;
    }, 50);
});

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// Close with Esc key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.add("hidden");
    }
});









