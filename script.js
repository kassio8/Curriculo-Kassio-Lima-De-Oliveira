// script.js

// Atualiza o ano automaticamente no rodapé
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} - Currículo de Kássio Lima de Oliveira`;

console.log("Currículo carregado com sucesso!");
