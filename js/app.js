const situationInput = document.getElementById("situation");
const reactionInput = document.getElementById("reaction");
const submitBtn = document.getElementById("submit-btn");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-text");

submitBtn.addEventListener("click", () => {
  const situation = situationInput.value.trim();
  const reaction = reactionInput.value.trim();

  if (!situation || !reaction) {
    resultText.textContent = "Заполни оба поля, чтобы увидеть зеркало.";
    resultSection.hidden = false;
    return;
  }

  resultText.textContent = "Это заглушка зеркала. Здесь появится живой AI-инсайт на Этапе 1.";
  resultSection.hidden = false;
});
