document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".faq-button").forEach(button => {
    button.addEventListener("click", function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector("svg");
      
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      icon.classList.toggle("rotate-90");
    });
  });
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('side-menu').classList.remove('translate-x-full');
    document.getElementById('side-menu').classList.add('translate-x-0');
});

document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('side-menu').classList.remove('translate-x-0');
    document.getElementById('side-menu').classList.add('translate-x-full');
});
});