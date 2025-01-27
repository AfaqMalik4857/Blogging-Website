document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      alert(`You clicked on ${link.textContent}`);
      // Here you can add more functionality, like loading content dynamically
    });
  });
});
