const divList = document.querySelectorAll(".on");

for (let div of divList) {
    let input = div.querySelector("input");
    let label = div.querySelector("label");
    
    // label.classList.add("focused")
    input.addEventListener("focusin",
        () => label.classList.add('focused'));
    input.addEventListener("focusout",
        () => label.classList.remove('focused'));

}

const messageInput = document.querySelector('#message');
const messageLabel = document.querySelector('.message label');
messageInput.addEventListener("focusin",
    () => messageLabel.classList.add("focused"));

    messageInput.addEventListener("focusout",
    () => messageLabel.classList.remove("focused"));



const checkbox = document.querySelector("#styled-checkbox");
const button = document.querySelector("button");
button.disabled = true;
checkbox.addEventListener('change', function() {
    if (this.checked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
