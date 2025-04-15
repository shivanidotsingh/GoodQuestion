
const colorCombos = [
  { bg: "#CBA0AA", text: "#FAE397" },
  { bg: "#B6CAC0", text: "#C02A1B" },
  { bg: "#355C7D", text: "#F8B195" },
  { bg: "#F9F7E8", text: "#62BFAD" },
  { bg: "#6C5B7B", text: "#C06C84" },
  { bg: "#355C7D", text: "#F67280" },
  { bg: "#F3C9DD", text: "#72AEC5" },
  { bg: "#119DA4", text: "#FFC857" },
  { bg: "#20AD65", text: "#FEC8BE" },
  { bg: "#9C9CDD", text: "#CAE9BF" },
  { bg: "#FF8FA4", text: "#E5E8DC" },
  { bg: "#C6D7C7", text: "#FF5035" },
  { bg: "#B2B2B2", text: "#E9FF27" },
  { bg: "#8AA9C6", text: "#D1BDFF" },
  { bg: "#393E41", text: "#E94F37" }
];

const buttonPhrases = [
  "Nah, give me another question",
  "Hmm, ok hit me with one more",
  "Nope, not the vibe. Try again",
  "Got anything else?",
  "Spin the wheel again",
  "Give me a better one",
  "Try me again",
  "I want a different one"
];

function generatePrompt() {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").innerText = randomPrompt.text;

  const color = colorCombos[Math.floor(Math.random() * colorCombos.length)];
  document.body.style.backgroundColor = color.bg;
  document.body.style.color = color.text;

  const button = document.querySelector("button");
  button.style.color = color.text;
  button.innerText = buttonPhrases[Math.floor(Math.random() * buttonPhrases.length)];
}
