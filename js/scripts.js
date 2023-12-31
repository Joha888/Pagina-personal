const promptInput = document.getElementById("promptInput");
const terminal = document.getElementById("terminal");
const terminalWindow = document.getElementById("terminalWindow");
const date = document.getElementById("date");

promptInput.focus();
date.innerText = new Date().toDateString();
terminalWindow.addEventListener("click", () => promptInput.focus());

promptInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enterCommand(event);
  }
});

const enterCommand = (event) => {
  const promptElement = document.getElementById("promptClone").cloneNode(true);
  promptElement.classList.remove("hidden");
  promptElement.getElementsByClassName("promptCloneInput")[0].innerHTML =
    event.target.value;
  promptElement.removeAttribute("id");
  promptElement
    .getElementsByClassName("promptCloneContent")[0]
    .appendChild(selectCommandBlock(event.target.value));
  terminal.appendChild(promptElement);
  promptInput.value = "";
  promptInput.scrollIntoView({ block: "start" });
};

const selectCommandBlock = (command) => {
  const lowerCommand = command.toLowerCase();
  switch (lowerCommand) {
    case "help":
      return getCommandTemplate(lowerCommand);
    case "perfil":
      return getCommandTemplate(lowerCommand);
    case "experiencia":
      return getCommandTemplate(lowerCommand);
    case "estudios":
      return getCommandTemplate(lowerCommand);
    case "referencias":
      return getCommandTemplate(lowerCommand);
    case "clear":
      return clearCommand();
    default:
      return notFoundCommand(command);
  }
};

const getCommandTemplate = (command) => {
  const element = document.getElementById(command).cloneNode(true);
  element.classList.remove("hidden");
  element.removeAttribute("id");
  return element;
};

const clearCommand = () => {
  terminal.innerHTML = "";
  const element = document.createElement("span");
  return element;
};

const notFoundCommand = (command) => {
  const element = document.createElement("span");
  element.innerText = `-terminal: ${command} not found`;
  element.classList.add("error");
  return element;
};
