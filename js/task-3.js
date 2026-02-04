const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onEnterName);

function onEnterName(event) {
  const name = event.currentTarget.value.trim();
  outputName.textContent = name === "" ? "Anonymous" : name;
}
