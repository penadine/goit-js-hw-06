const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

ref.nameInput.addEventListener('input', updateName);

function updateName() {
    const name = ref.nameInput.value.trim() || 'Anonymous';
    ref.nameOutput.textContent = name;
}