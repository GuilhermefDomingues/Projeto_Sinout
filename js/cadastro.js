const btn = document.getElementById("btnCadastrar");
const mensagem = document.getElementById("mensagem");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const nomeSocial = document.getElementById("nomeSocial");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const confirmarSenha = document.getElementById("confirmarSenha");

  const campos = [nome, nomeSocial, email, senha, confirmarSenha];
  mensagem.textContent = "";
  mensagem.style.color = "red";
  campos.forEach((campo) => campo.classList.remove("erro"));

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (nome.value.trim().length < 3) {
    nome.classList.add("erro");
    return (mensagem.textContent = "O nome deve ter pelo menos 3 caracteres.");
  }

  if (nomeSocial.value.trim().length < 3) {
    nomeSocial.classList.add("erro");
    return (mensagem.textContent =
      "O nome social deve ter pelo menos 3 caracteres.");
  }

  if (!emailValido.test(email.value.trim())) {
    email.classList.add("erro");
    return (mensagem.textContent = "Digite um e-mail válido.");
  }

  if (senha.value.length < 6) {
    senha.classList.add("erro");
    return (mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.");
  }

  if (!/[A-Z]/.test(senha.value)) {
    senha.classList.add("erro");
    return (mensagem.textContent =
      "A senha deve conter pelo menos uma letra maiúscula.");
  }

  if (!/[0-9]/.test(senha.value)) {
    senha.classList.add("erro");
    return (mensagem.textContent = "A senha deve conter pelo menos um número.");
  }

  if (senha.value !== confirmarSenha.value) {
    confirmarSenha.classList.add("erro");
    return (mensagem.textContent = "As senhas não coincidem.");
  }

  mensagem.style.color = "green";
  mensagem.textContent = "Cadastro realizado com sucesso!";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});

// Mostrar/ocultar senha com ícone SVG
document.querySelectorAll(".toggle-icone").forEach((icon) => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    const input = document.getElementById(targetId);

    if (input.type === "password") {
      input.type = "text";
      icon.innerHTML =
        '<path d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 11-7 11-7-3.367-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/><line x1="2" y1="2" x2="22" y2="22" stroke="#3f375c" stroke-width="2"/>';
    } else {
      input.type = "password";
      icon.innerHTML =
        '<path d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 11-7 11-7-3.367-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>';
    }
  });
});


// Alterna o modo escuro/claro
botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modoEscuro = body.classList.contains("dark-mode");

  // Atualiza texto do botão
  botaoTema.textContent = modoEscuro ? "☀️" : "🌙";

  // Troca a imagem da seta conforme o modo
  seta.src = modoEscuro ? "img/setaDark.png" : "img/seta.png";
});
