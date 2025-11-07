
const btnLogin = document.querySelector(".btn-login");

  btnLogin.addEventListener("click", (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    let msg = document.querySelector(".mensagem");
    if (!msg) {
      msg = document.createElement("p");
      msg.classList.add("mensagem");
      document.querySelector(".login-box").appendChild(msg);
    }

    // Validação
    if (email === "" || senha === "") {
      msg.textContent = "Por favor, preencha todos os campos.";
      msg.style.color = "red";
      return;
    }

    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      msg.textContent = "Digite um e-mail válido.";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "Login realizado com sucesso!";
    msg.style.color = "green";

    setTimeout(() => {
      window.location.href = "./Plataforma.html"; 
    }, 1500);
  });

// Mostrar / ocultar senha com ícone
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  // Alternar ícones
  eyeOpen.style.display = isPassword ? "none" : "block";
  eyeClosed.style.display = isPassword ? "block" : "none";

//    Acessibilidade
//   togglePassword.setAttribute("aria-pressed", isPassword);
//   togglePassword.setAttribute(
//     "aria-label",
//     isPassword ? "Ocultar senha" : "Mostrar senha"
//   );
});
