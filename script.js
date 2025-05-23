// Espera o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links do menu que começam com "#"
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Impede o comportamento padrão

        const targetId = this.getAttribute("href").substring(1); // remove o #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });
