// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll(".nav-link");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
    updateChartColors();
  });

  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    updateChartColors();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    anchorPlacement: "top-bottom",
  });

  // Initialize Particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#cccccc" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#cccccc",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
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
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });

  // Chart.js configuration
  const ctx = document.getElementById("marketGrowthChart").getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(0, 122, 255, 0.9)");
  gradient.addColorStop(1, "rgba(0, 122, 255, 0.1)");

  const chartConfig = {
    type: "line",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Global AI Market Size (in Billion USD)",
          data: [50, 64, 82, 105, 135, 173],
          borderColor: "#007AFF",
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#007AFF",
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleFont: { family: "'Roboto', sans-serif", size: 14 },
          bodyFont: { family: "'Roboto', sans-serif", size: 12 },
          cornerRadius: 6,
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "'Roboto', sans-serif", size: 14 },
            color: "#555",
          },
        },
        y: {
          grid: { borderDash: [5, 5], color: "#ddd" },
          ticks: {
            font: { family: "'Roboto', sans-serif", size: 14 },
            color: "#555",
            callback: function (value) {
              return "$" + value;
            },
          },
        },
      },
    },
  };

  let chart = new Chart(ctx, chartConfig);

  // Function to update chart colors based on dark mode
  function updateChartColors() {
    const isDarkMode = body.classList.contains("dark-mode");
    const textColor = isDarkMode ? "#ccc" : "#555";
    const gridColor = isDarkMode ? "#444" : "#ddd";

    chart.options.scales.x.ticks.color = textColor;
    chart.options.scales.y.ticks.color = textColor;
    chart.options.scales.y.grid.color = gridColor;
    chart.options.plugins.tooltip.backgroundColor = isDarkMode
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(0, 0, 0, 0.8)";
    chart.options.plugins.tooltip.titleColor = isDarkMode ? "#000" : "#fff";
    chart.options.plugins.tooltip.bodyColor = isDarkMode ? "#000" : "#fff";

    chart.update();
  }
});
