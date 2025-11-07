const botaoTema = document.getElementById("toggle-tema");
const body = document.body;
const seta = document.querySelector(".seta"); // seleciona a imagem da seta


// Alterna o modo escuro/claro
botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modoEscuro = body.classList.contains("dark-mode");

  // Atualiza texto do botão
  botaoTema.textContent = modoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";

  // Troca a imagem da seta conforme o modo
  seta.src = modoEscuro ? "img/setaDark.png" : "img/seta.png";
});

// Função para abrir/fechar os textos do FAQ
function toggleTexto(index) {
  const textos = document.querySelectorAll(".conteudo");
  const texto = textos[index];
  texto.style.display = texto.style.display === "block" ? "none" : "block";
}


