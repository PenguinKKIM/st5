// JavaScript for Accordion functionality
// Add event listeners to toggle accordion content
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
  });
});
