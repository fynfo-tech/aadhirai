/* particles.js config for Aadhirai portfolio */
if (typeof particlesJS !== "undefined") {
  particlesJS('particles-js', {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 800 } },
      color: { value: "#0e2431" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.45, random: false },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 150, color: "#0e2431", opacity: 0.35, width: 1 },
      move: { enable: true, speed: 4, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 180 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
}
