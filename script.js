// DOM Elements
const themeSelect = document.getElementById('themeSelect');
const savePreferenceButton = document.getElementById('savePreference');
const animatedBox = document.getElementById('animatedBox');
const animateButton = document.getElementById('animateButton');

// Load User Preference from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
  }
});

// Save User Preference to localStorage
savePreferenceButton.addEventListener('click', () => {
  const selectedTheme = themeSelect.value;
  localStorage.setItem('theme', selectedTheme);
  
  // Apply Theme to Body
  document.body.className = ''; // Remove existing classes
  document.body.classList.add(selectedTheme);
  
  alert('Theme preference saved!');
});

// Trigger Animation on Button Click
animateButton.addEventListener('click', () => {
  animatedBox.style.animation = 'bounce 1s ease';
  
  // Reset Animation after 1 second
  setTimeout(() => {
    animatedBox.style.animation = 'none';
  }, 1000);
});