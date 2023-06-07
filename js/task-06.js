const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('input', validInput);

function validInput() {
    if (Number(validationInput.dataset.length) === validationInput.value.length) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
      } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
      }
}