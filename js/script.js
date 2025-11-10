document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const msgErro = document.getElementById("mensagem-erro");
  const msgSucesso = document.getElementById("mensagem-sucesso");
  


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // limpa mensagens
    msgErro.textContent = "";
    msgSucesso.textContent = "";
    msgErro.classList.remove("mostrar");
    msgSucesso.classList.remove("mostrar");

    if (!nome || !email || !mensagem) {
      msgErro.textContent = "Por favor, preencha todos os campos.";
      msgErro.classList.add("mostrar");
      return;
    }

    if (nome.length < 3) {
      msgErro.textContent = "O nome deve ter pelo menos 3 caracteres.";
      msgErro.classList.add("mostrar");
      return;
    }

    if (!emailRegex.test(email)) {
      msgErro.textContent = "Digite um e-mail válido.";
      msgErro.classList.add("mostrar");
      return;
    }

    msgSucesso.textContent = "Mensagem enviada com sucesso!";
    msgSucesso.classList.add("mostrar");
    form.reset();
  });

  // --------------------ACESSIBILIDADE
  new window.VLibras.Widget("https://vlibras.gov.br/app");

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
});
// Alterna o modo escuro/claro
const botaoTema = document.getElementById("toggle-tema");
const body = document.body;

botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modoEscuro = body.classList.contains("dark-mode");

  // Atualiza texto do botão
  botaoTema.textContent = modoEscuro ? "☀️" : "🌙";

  // Troca a imagem da seta conforme o modo
  seta.src = modoEscuro ? "img/setaDark.png" : "img/seta.png";
});

