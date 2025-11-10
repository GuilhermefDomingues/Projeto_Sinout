
const botaoTema = document.getElementById("toggle-tema");
const body = document.body;
const seta = document.querySelector(".seta"); // seleciona a imagem da seta

// Função para abrir/fechar os textos do FAQ
function toggleTexto(index) {
  const textos = document.querySelectorAll(".conteudo");
  const texto = textos[index];
  texto.style.display = texto.style.display === "block" ? "none" : "block";
}
// Alterna o modo escuro/claro
  botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modoEscuro = body.classList.contains("dark-mode");

  // Atualiza texto do botão
  botaoTema.textContent = modoEscuro ? "☀️" : "🌙";

  // Troca a imagem da seta conforme o modo
  seta.src = modoEscuro ? "img/setaDark.png" : "img/seta.png";
});

// --------------------ACESSIBILIDADE
  new window.VLibras.Widget("https://vlibras.gov.br/app"); //Vlibras

let tamanhoFonte = 100;

  const aumentar = document.getElementById("aumentar-fonte");
  const diminuir = document.getElementById("diminuir-fonte");
  const contraste = document.getElementById("contraste");

  // aumentar.addEventListener("click", () => {
  //   tamanhoFonte += 10;
  //   document.body.style.fontSize = tamanhoFonte + "%";
  // });

  aumentar.addEventListener("click", () => {
    tamanhoFonte += 3;
    document.querySelectorAll("*").forEach((el) => {
      el.style.fontSize = tamanhoFonte + "%";
    });
  });

  diminuir.addEventListener("click", () => {
    tamanhoFonte -= 3;
    document.querySelectorAll("*").forEach((el) => {
      el.style.fontSize = tamanhoFonte + "%";
    });
  });

  contraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });

 