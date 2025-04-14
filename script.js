
function generatePrompt() {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").innerText = random.text;
  document.getElementById("category").innerText = random.category ? `(${random.category})` : '';
}
