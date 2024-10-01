// Initialize AOS with updated settings
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    anchorPlacement: "top-bottom",
  });
  
  // Particles.js config
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  
  // Chart.js example
  const ctx = document.getElementById("marketGrowthChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "AI Market Size (Billion $)",
          data: [50, 64, 82, 105, 135, 173],
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Hamburger menu functionality
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  
  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
  
  // Close mobile menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll(".nav-link");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerIcon.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });