
const colorCombos = [
  { bg: "#1A1A1D", text: "#F8E9A1" },
  { bg: "#2E4057", text: "#F6F6F6" },
  { bg: "#355C7D", text: "#F8B195" },
  { bg: "#6C5B7B", text: "#C06C84" },
  { bg: "#355C7D", text: "#F67280" },
  { bg: "#F8E9A1", text: "#1A1A1D" },
  { bg: "#119DA4", text: "#FFC857" },
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
