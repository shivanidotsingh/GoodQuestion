
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

function generatePrompt() {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").innerText = randomPrompt.text;

  const color = colorCombos[Math.floor(Math.random() * colorCombos.length)];
  document.body.style.backgroundColor = color.bg;
  document.body.style.color = color.text;
  document.querySelector("button").style.backgroundColor = color.text;
  document.querySelector("button").style.color = color.bg;
}
