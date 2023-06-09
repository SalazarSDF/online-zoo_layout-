const input = document.querySelector(".feed-donate__input");

let inputArr = [];
let changeInput = (e) => {
  if (["e", "E", "+", "-", null].includes(e.data)) {
    input.value = "";
    inputArr = [];
    clearProgressBar();
    return;
  }
  inputArr.push(e.data);
  inputArr.splice(-5, inputArr.length - 4);
  input.value = inputArr.join("");
  clearProgressBar();
  checkProgressBar();
};

const clearProgressBar = () => {
  const radioButtons = document.querySelectorAll(".progress-bar__input");
  radioButtons.forEach((button) => (button.checked = false));
};

const checkProgressBar = () => {
  const radioButtons = document.querySelectorAll(".progress-bar__input");
  radioButtons.forEach((button) => {
    if (button.id === inputArr.join("")) {
      button.checked = true;
    }
  });
};

const checkPage = () => (input ? true : false);
if (checkPage()) {
  input.addEventListener("input", changeInput);
}
