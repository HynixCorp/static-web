// Initialize AOS with updated settings
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  anchorPlacement: "top-bottom",
});

// Particles.js config (adjusted colors for Apple-like theme)
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#cccccc" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#cccccc" },
    },
    opacity: {
      value: 0.3,
      random: false,
    },
    size: {
      value: 2,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#cccccc",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
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

// Improved Chart.js configuration for an Apple-esque look
const ctx = document.getElementById("marketGrowthChart").getContext("2d");

// Gradient for the line
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
      legend: {
        display: false, // Hide legend for a cleaner look
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          family: "'Roboto', sans-serif",
          size: 14,
        },
        bodyFont: {
          family: "'Roboto', sans-serif",
          size: 12,
        },
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for x-axis
        },
        ticks: {
          font: {
            family: "'Roboto', sans-serif",
            size: 14,
          },
          color: "#555",
        },
      },
      y: {
        grid: {
          borderDash: [5, 5],
          color: "#ddd",
        },
        ticks: {
          font: {
            family: "'Roboto', sans-serif",
            size: 14,
          },
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

// Dark mode adjustments for the chart
function updateChartColors() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const textColor = isDarkMode ? "#ccc" : "#555";
  const gridColor = isDarkMode ? "#444" : "#ddd";
  const tooltipBackgroundColor = isDarkMode
    ? "rgba(255, 255, 255, 0.8)"
    : "rgba(0, 0, 0, 0.8)";
  const tooltipTitleColor = isDarkMode ? "#000" : "#fff";
  const tooltipBodyColor = isDarkMode ? "#000" : "#fff";

  chart.options.scales.x.ticks.color = textColor;
  chart.options.scales.y.ticks.color = textColor;
  chart.options.scales.y.grid.color = gridColor;

  chart.options.plugins.tooltip.backgroundColor = tooltipBackgroundColor;
  chart.options.plugins.tooltip.titleColor = tooltipTitleColor;
  chart.options.plugins.tooltip.bodyColor = tooltipBodyColor;

  chart.update();
}

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const mobileDarkModeToggle = document.getElementById("mobileDarkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateChartColors();
});

mobileDarkModeToggle.addEventListener("click", () => {
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