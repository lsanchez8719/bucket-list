// script.js
// Add functionality to the sections here

// Example: Change background color of sections when clicked
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  section.addEventListener('click', () => {
    const randomColor = getRandomColor();
    section.style.backgroundColor = randomColor;
  });
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}