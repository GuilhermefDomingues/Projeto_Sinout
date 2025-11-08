// Alterna o modo escuro/claro
botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modoEscuro = body.classList.contains("dark-mode");

  // Atualiza texto do botão
  botaoTema.textContent = modoEscuro ? "☀️" : "🌙";

  // Troca a imagem da seta conforme o modo
  seta.src = modoEscuro ? "img/setaDark.png" : "img/seta.png";
});
