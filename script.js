// Initialize AOS with updated settings
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  anchorPlacement: "top-bottom",
});

// Particles.js config (adjusted colors for black and white theme)
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 20, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
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
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true,
    },
  },
  retina_detect: true,
});

// Improved Chart.js configuration for a more formal look
const ctx = document.getElementById("marketGrowthChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Global AI Market Size (in Billion USD)",
        data: [50, 64, 82, 105, 135, 173],
        borderColor: "#000",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "#000",
        pointBorderColor: "#000",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "#ccc",
        },
        ticks: {
          color: "#000",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#ccc",
        },
        ticks: {
          color: "#000",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#000",
          font: {
            family: 'Merriweather',
          },
        },
      },
    },
  },
});

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateChartColors();
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

// Function to update chart colors based on theme
function updateChartColors() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const chartColor = isDarkMode ? "#fff" : "#000";
  const gridColor = isDarkMode ? "#444" : "#ccc";

  chart.data.datasets[0].borderColor = chartColor;
  chart.data.datasets[0].pointBackgroundColor = chartColor;
  chart.data.datasets[0].pointBorderColor = chartColor;
  chart.options.scales.x.ticks.color = chartColor;
  chart.options.scales.y.ticks.color = chartColor;
  chart.options.scales.x.grid.color = gridColor;
  chart.options.scales.y.grid.color = gridColor;
  chart.options.plugins.legend.labels.color = chartColor;
  chart.update();
}

// Initialize chart variable for updating
let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Global AI Market Size (in Billion USD)",
        data: [50, 64, 82, 105, 135, 173],
        borderColor: "#000",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "#000",
        pointBorderColor: "#000",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "#ccc",
        },
        ticks: {
          color: "#000",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#ccc",
        },
        ticks: {
          color: "#000",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#000",
          font: {
            family: 'Merriweather',
          },
        },
      },
    },
  },
});

// Update chart colors on page load in case dark mode is enabled
updateChartColors();