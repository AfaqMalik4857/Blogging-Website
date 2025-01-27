// This script will change the content dynamically when the page loads

// Change the welcome message after a delay
setTimeout(() => {
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.innerText = "Welcome to My Awesome Website!";
}, 2000); // Change after 2 seconds

// Modify the paragraph content dynamically
document.getElementById('contentMessage').innerText = "Updated content using JavaScript!";

// Add an event listener to a navigation link
const homeLink = document.querySelector('a[href="#"]');
homeLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  alert("You clicked the Home link!");
});
