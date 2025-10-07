// === Swiper do Instagram ===
window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
    },
  });

  // Swiper das Avaliações
  const swiperAvaliacoes = new Swiper('.swiper-avaliacoes', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    allowTouchMove: false,
    freeMode: false,
    freeModeMomentum: false,
  });
});


// === Assistente Virtual ===
document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.getElementById("chat-icon");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");
  const floatingMsg = document.getElementById("chat-floating-message");

  // Mensagem flutuante
  setTimeout(() => {
    if (floatingMsg) {
      floatingMsg.style.display = "none";
    }
  }, 5000);

  // Abrir chat
  chatIcon.addEventListener("click", () => {
    chatWindow.classList.remove("hidden");
    chatIcon.style.display = "none";
  });

  // Fechar chat
  closeChat.addEventListener("click", () => {
    chatWindow.classList.add("hidden");
    chatIcon.style.display = "block";
  });

  // Enviar mensagem com botão
  sendBtn.addEventListener("click", () => {
    const userMsg = chatInput.value.trim();
    if (userMsg !== "") {
      adicionarMensagem("user", userMsg);
      chatInput.value = "";
      respostaAutomatica(userMsg);
    }
  });

  // Enviar mensagem com Enter
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });

  // Adicionar mensagem no chat
  function adicionarMensagem(remetente, texto) {
    const div = document.createElement("div");
    div.className = "message " + remetente;
    div.innerText = texto;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Respostas automáticas
  function respostaAutomatica(pergunta) {
    const msg = pergunta.toLowerCase();

    if (msg.includes("oi") || msg.includes("olá")) {
      adicionarMensagem("bot", "Olá, como posso te ajudar?");
    } else if (msg.includes("horário") || msg.includes("funcionamento")) {
      adicionarMensagem("bot", "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.");
    } else if (msg.includes("telefone") || msg.includes("contato")) {
      adicionarMensagem("bot", "Você pode entrar em contato pelo número (61) 99923-0382.");
    } else if (msg.includes("endereço") || msg.includes("local")) {
      adicionarMensagem("bot", "Estamos localizados na Rua Olímpio Jacinto, Nº 980, Edifício Santana, 1º Piso, Sala 105, Formosa, Goiás, 73802-040");
    } else if (msg.includes("serviços") || msg.includes("áreas") || msg.includes("especialidades")) {
      adicionarMensagem("bot", "Atuamos nas áreas de Direito Previdenciário, Civil, Família, Trabalhista, Empresarial e Tributário e Consumidor.");
    } else if (msg.includes("taisa") || msg.includes("advogada") || msg.includes("quem é")) {
      adicionarMensagem("bot", "Dra. Taisa Abreu é especialista em Direito Previdenciário, com ampla experiência na defesa dos direitos dos segurados.");
    } else {
      adicionarMensagem("bot", "Vou te encaminhar para nosso atendimento no WhatsApp.");
      setTimeout(() => {
        window.open("https://wa.me/5561999230382", "_blank");
      }, 2500);
    }
  }
});


// === Página de Artigos (busca) ===
document.addEventListener("DOMContentLoaded", function () {
  const campoPesquisa = document.getElementById("campo-pesquisa");
  if (!campoPesquisa) return; // só roda na página que tiver pesquisa
  const artigos = document.querySelectorAll(".artigo");

  campoPesquisa.addEventListener("input", function () {
    const termo = campoPesquisa.value.toLowerCase();

    artigos.forEach(function (artigo) {
      const titulo = artigo.querySelector("h3").textContent.toLowerCase();
      const resumo = artigo.querySelector("p").textContent.toLowerCase();

      const corresponde = titulo.includes(termo) || resumo.includes(termo);
      artigo.style.display = corresponde ? "block" : "none";
    });
  });
});


// === Clique no artigo-card ===
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".artigo-card").forEach(card => {
    card.addEventListener("click", () => {
      const link = card.querySelector("a");
      if (link) {
        window.location.href = link.href;
      }
    });
  });
});
