// Seleciona botão
const btn = document.querySelector("button");

// Seleciona todas as barras de progresso
const bars = document.querySelectorAll(".progress span");

// Dados base (simples)
const teams = [
  { name: "Brasil", base: 88 },
  { name: "França", base: 81 },
  { name: "Argentina", base: 79 }
];

// Função para gerar variação aleatória
function randomize(value) {
  let variation = Math.random() * 10 - 5; // -5 até +5
  let result = value + variation;

  if (result > 95) result = 95;
  if (result < 40) result = 40;

  return Math.round(result);
}

// Atualiza as barras na tela
function updateUI() {
  bars.forEach((bar, index) => {
    let newValue = randomize(teams[index].base);

    bar.style.width = newValue + "%";

    // Atualiza número na card (h2)
    const card = bar.closest(".card");
    const number = card.querySelector("h2");

    if (number) {
      number.textContent = newValue + "%";
    }
  });
}

// Evento do botão
btn.addEventListener("click", () => {
  btn.textContent = "Simulando...";

  setTimeout(() => {
    updateUI();
    btn.textContent = "Simular Copa";
  }, 800);
});

// Animação inicial ao abrir site
window.addEventListener("load", () => {
  setTimeout(() => {
    updateUI();
  }, 500);
});
