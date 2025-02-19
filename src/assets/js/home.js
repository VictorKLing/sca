document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".faq-button").forEach(button => {
      button.addEventListener("click", function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector(".icon");
        
        content.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
      });
    });
  });