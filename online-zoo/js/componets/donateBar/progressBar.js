const radioButtonsListener = () => {
  const radioButtons = document.querySelectorAll(".progress-bar__input");
  if (!radioButtons[0]) return;
  radioButtons.forEach((button) => {
    button.addEventListener("change", changeInput);
  });
};

const changeInput = (e) => {
  const input = document.querySelector(".feed-donate__input");
  input.value = e.target.id;
};

const checkOnLoad = () => {
  const input = document.querySelector(".feed-donate__input");
  const inputToChange = document.getElementById("100");
  if (!inputToChange) return;
  inputToChange.checked = true;
  input.value = "100";
};

radioButtonsListener();
checkOnLoad();
