const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onEnterName);

function onEnterName(event) {
  outputName.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value;
}
