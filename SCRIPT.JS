document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
      mensagem.textContent = "Preencha todos os campos.";
      mensagem.style.color = "red";
      return;
    }

    mensagem.textContent = `Obrigado, ${nome}! Sua inscrição foi recebida com sucesso.`;
    mensagem.style.color = "green";
    form.reset();
  });
});
