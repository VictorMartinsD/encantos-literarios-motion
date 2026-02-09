/*
  AUTOR: Victor Martins
  DESCRIÇÃO: Script principal para funcionalidades do site.
*/

// 1. Variáveis Globais e Seletores de Elementos
const optionSignatures = document.querySelector(".option-signatures");

// 2. Funções Principais
const handleInitialSignatureHover = () => {
  optionSignatures.classList.add("is-active");
};

// 3. Eventos (Clicks, Forms, etc)
if (optionSignatures) {
  optionSignatures.addEventListener("mouseenter", handleInitialSignatureHover, {
    once: true,
  });
}
