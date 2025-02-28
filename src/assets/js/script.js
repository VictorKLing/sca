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

  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');
  const areasAtuacao = this.documentElement.querySelector('.nav-area-atuacao')
  const body = document.body;

  document.getElementById('menu-toggle').addEventListener('click', function () {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
      
      overlay.classList.remove('translate-x-full');
      overlay.classList.add('translate-x-0');

      body.classList.add('overflow-hidden');
  });

  document.getElementById('close-menu').addEventListener('click', function () {
      menu.classList.remove('translate-x-0');
      menu.classList.add('translate-x-full');
      
      overlay.classList.remove('translate-x-0');
      overlay.classList.add('translate-x-full');

      body.classList.remove('overflow-hidden');
  });

  // fecha o menu ao clicar no overlay
  overlay.addEventListener('click', function () {
      document.getElementById('close-menu').click();
  });
  // fecha o menu ao clicar no link areas de atuação
  areasAtuacao.addEventListener('click', function () {
      document.getElementById('close-menu').click();
  });
});
