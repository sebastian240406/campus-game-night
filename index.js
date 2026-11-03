/*** Dark Mode: switch the page theme when the button is clicked. ***/
// Step 1: Select the theme button.
const themeButton = document.getElementById("theme-button");

// Step 2: Define the callback function.
const toggleDarkMode = () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  themeButton.innerText = isDarkMode ? "Light mode" : "Dark mode";
  themeButton.setAttribute("aria-pressed", String(isDarkMode));
};

// Step 3: Register the click event listener.
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Scroll Animations — Unit 8 ***/
let revealableContainers = document.querySelectorAll(".revealable");
const motionButton = document.getElementById("reduce-motion-button");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let motionReduced = motionPreference.matches;

// Add active when a section enters view; remove it below the viewport
// so scrolling back down plays the animation again.
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let current = revealableContainers[i];
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = current.getBoundingClientRect().top;
    let revealDistance = parseInt(
      getComputedStyle(current).getPropertyValue("--reveal-distance"), 10
    );
    if (motionReduced || topOfRevealableContainer < windowHeight - revealDistance) {
      current.classList.add("active");
    } else {
      current.classList.remove("active");
    }
  }
};

const applyMotionPreference = () => {
  document.body.classList.toggle("reduce-motion", motionReduced);
  motionButton.textContent = motionReduced ? "Enable Motion" : "Reduce Motion";
  motionButton.setAttribute("aria-pressed", String(motionReduced));
  reveal();
};

const reduceMotion = () => {
  motionReduced = !motionReduced;
  applyMotionPreference();
};

window.addEventListener("scroll", reveal, { passive: true });
window.addEventListener("resize", reveal);
motionButton.addEventListener("click", reduceMotion);
motionPreference.addEventListener("change", event => {
  motionReduced = event.matches;
  applyMotionPreference();
});
document.body.classList.add("animations-ready");
applyMotionPreference();

/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
